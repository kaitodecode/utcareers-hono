import { Context } from "hono";
import { Response } from "../../../libs/response";
import prisma from "../../../libs/prisma";
import { uploadFile } from "../../../libs/s3";

export const ApplyJobService = async (c: Context) => {
    try {
        // Get id from URL parameter
        const { id } = c.req.param();
        // Get user id from request header
        const user = c.get("user") as { id: string };

        // Check if job exists
        const job = await prisma.job_posts.findUnique({
            where: { id },
            include: {
                applicants: true
            }
        });

        if (!job) {
            return Response(c, null, "Job not found", 404);
        }

        // Check if user has already applied
        const existingApplication = await prisma.applicants.findFirst({
            where: {
                job_id: id,
                user_id: user.id
            }
        });
        if (existingApplication) {
            return Response(c, null, "You have already applied for this job", 400);
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
                job_id: id,
                status: 'pending',
                cv: cvUrl,
                national_identity_card: nationalIdCardUrl,
                selections: {
                    createMany: {
                        data: [
                            {
                                id: crypto.randomUUID(),
                                job_id: id,
                                stage: "interview",
                                status: "pending",
                            },
                            {
                                id: crypto.randomUUID(),
                                job_id: id,
                                stage: "interview",
                                status: "pending",
                            },
                            {
                                id: crypto.randomUUID(),
                                job_id: id,
                                stage: "medical_checkup",
                                status: "pending",
                            }
                        ]
                    }
                }
            },
        });

        return Response(c, application, "Successfully applied for job", 201);

    } catch (error) {
        return Response(c, null, "Failed to apply job", 500);
    }
}