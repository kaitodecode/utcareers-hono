import { Context } from "hono";
import prisma from "../../../libs/prisma";
import { Response } from "../../../libs/response";

export const GetHistoryService = async (c: Context) => {
    try {
        const user = c.get("user") as { id: string };
        
        // Get pagination parameters from query
        const page = Number(c.req.query('page')) || 1;
        const perPage = Number(c.req.query('per_page')) || 15;
        const skip = (page - 1) * perPage;

        // Get total count for pagination
        const total = await prisma.applicants.count({
            where: {
                user_id: user.id
            }
        });

        // Get paginated data
        const history = await prisma.applicants.findMany({
            where: {
                user_id: user.id
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
            },
            skip,
            take: perPage,
        });



        // Calculate pagination metadata
        const lastPage = Math.ceil(total / perPage);
        const from = skip + 1;
        const to = Math.min(skip + perPage, total);

        // Format response like Laravel pagination
        const paginatedResponse = {
            current_page: page,
            data: history,
            first_page_url: `${c.req.url.split('?')[0]}?page=1`,
            from,
            last_page: lastPage,
            last_page_url: `${c.req.url.split('?')[0]}?page=${lastPage}`,
            next_page_url: page < lastPage ? `${c.req.url.split('?')[0]}?page=${page + 1}` : null,
            path: c.req.url.split('?')[0],
            per_page: perPage,
            prev_page_url: page > 1 ? `${c.req.url.split('?')[0]}?page=${page - 1}` : null,
            to,
            total
        };

        return Response(c, paginatedResponse, "User application history retrieved successfully", 200);
    } catch (error) {
        return Response(c, null, error instanceof Error ? error.message : "Failed to get history applicant", 400);
    }
}

export const ApprovalJobService = async (c: Context) => {
    try {
        const { id } = c.req.param();
        const { status } = c.req.valid("json" as never);
       
        const applicant = await prisma.applicants.findUnique({
            where: { id },
            include: {
                job_post_categories: {
                    include: {
                        job_categories: true,
                        job_posts: true
                    }
                }
            }
        });

        if (!applicant) {
            return Response(c, null, "Applicant not found", 404);
        }

        // Check if the job post is still active
        if (applicant.job_post_categories.job_posts.status === "closed") {
            return Response(c, null, "Job is closed", 400);
        }

        // Validate status transition
        const validStatuses = ["pending", "selection", "accepted", "rejected"];
        if (!validStatuses.includes(status)) {
            return Response(c, null, "Invalid status", 400);
        }

        await prisma.applicants.update({
            where: { id },
            data: {
                status
            }
        });

        return Response(c, null, "Applicant status updated successfully", 200);
    } catch (error) {
        return Response(c, null, error instanceof Error ? error.message : "Failed to update applicant status", 400);
    }
}



export const GetApplicantsService = async (c: Context) => {
    try {
        const user = c.get("user") as { role: string };
        
        if (user.role !== "admin") {
            return Response(c, null, "Unauthorized access", 403);
        }

        // Get pagination parameters from query
        const page = Number(c.req.query('page')) || 1;
        const perPage = Number(c.req.query('per_page')) || 15;
        const skip = (page - 1) * perPage;

        // Get total count for pagination
        const total = await prisma.applicants.count();

        // Get paginated data
        const applicants = await prisma.applicants.findMany({
            include: {
                users: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        photo: true
                    }
                },
                job_post_categories: {
                    include: {
                        job_categories: true,
                        job_posts: {
                            select: {
                                id: true,
                                title: true,
                                company_id: true
                            },
                            include: {
                                companies: {
                                    select: {
                                        id: true,
                                        name: true,
                                        logo: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            skip,
            take: perPage,
        });

        // Calculate pagination metadata
        const lastPage = Math.ceil(total / perPage);
        const from = skip + 1;
        const to = Math.min(skip + perPage, total);

        // Format response like Laravel pagination
        const paginatedResponse = {
            current_page: page,
            data: applicants,
            first_page_url: `${c.req.url.split('?')[0]}?page=1`,
            from,
            last_page: lastPage,
            last_page_url: `${c.req.url.split('?')[0]}?page=${lastPage}`,
            next_page_url: page < lastPage ? `${c.req.url.split('?')[0]}?page=${page + 1}` : null,
            path: c.req.url.split('?')[0],
            per_page: perPage,
            prev_page_url: page > 1 ? `${c.req.url.split('?')[0]}?page=${page - 1}` : null,
            to,
            total
        };

        return Response(c, paginatedResponse, "Job applicants retrieved successfully", 200);
    } catch (error) {
        return Response(c, null, error instanceof Error ? error.message : "Failed to get job applicants", 400);
    }
}
