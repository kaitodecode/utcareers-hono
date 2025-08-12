import { Context } from "hono";
import { Response } from "../../../libs/response";
import prisma from "../../../libs/prisma";
import { uploadFile } from "../../../libs/s3";

export const ApplyJobService = async (c: Context) => {
    try {
        // Get job_post_category_id from URL parameter
        const { id: jobPostCategoryId } = c.req.param();
        // Get user id from request header
        const user = c.get("user") as { id: string };

        // Check if job post category exists and get related job post info
        const jobPostCategory = await prisma.job_post_categories.findUnique({
            where: { id: jobPostCategoryId },
            include: {
                job_categories: true,
                job_posts: {
                    include: {
                        companies: true
                    }
                },
                applicants: {
                    where: {
                        user_id: user.id
                    }
                }
            }
        });

        if (!jobPostCategory) {
            return Response(c, null, "Job position not found", 404);
        }

        // Check if job post is still active
        if (jobPostCategory.job_posts.status === "closed") {
            return Response(c, null, "Job is no longer accepting applications", 400);
        }

        // Check if user has already applied for this specific job post category
        if (jobPostCategory.applicants.length > 0) {
            return Response(c, null, "You have already applied for this position", 400);
        }

        // Get validated form data
        const { cv, national_identity_card: nationalIdCard } = c.req.valid("form" as never);

        // Upload CV to S3
        let cvUrl: string;
        try {
            cvUrl = await uploadFile("applications/cv", cv, null, {
                allowedExtensions: ["pdf", "doc", "docx"],
                maxSizeInMB: 10
            });
        } catch (error) {
            return Response(c, null, error instanceof Error ? error.message : "Failed to upload CV", 400);
        }

        // Upload National Identity Card to S3
        let nationalIdCardUrl: string;
        try {
            nationalIdCardUrl = await uploadFile("applications/identity", nationalIdCard, null, {
                allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
                maxSizeInMB: 5
            });
        } catch (error) {
            return Response(c, null, error instanceof Error ? error.message : "Failed to upload National Identity Card", 400);
        }

        // Create application
        const application = await prisma.applicants.create({
            data: {
                id: crypto.randomUUID(),
                user_id: user.id,
                job_post_category_id: jobPostCategoryId,
                status: 'pending',
                cv: cvUrl,
                national_identity_card: nationalIdCardUrl,
                selections: {
                    createMany: {
                        data: [
                            {
                                id: crypto.randomUUID(),
                                job_post_category_id: jobPostCategoryId,
                                stage: "portfolio",
                                status: "pending",
                            },
                            {
                                id: crypto.randomUUID(),
                                job_post_category_id: jobPostCategoryId,
                                stage: "interview",
                                status: "pending",
                            },
                            {
                                id: crypto.randomUUID(),
                                job_post_category_id: jobPostCategoryId,
                                stage: "medical_checkup",
                                status: "pending",
                            }
                        ]
                    }
                }
            },
            include: {
                job_post_categories: {
                    include: {
                        job_categories: true,
                        job_posts: {
                            include: {
                                companies: true
                            }
                        }
                    }
                }
            }
        });

        return Response(c, application, "Successfully applied for the position", 201);

    } catch (error) {
        console.error("Error applying for job:", error);
        return Response(c, null, error instanceof Error ? error.message : "Failed to apply for the position", 500);
    }
}