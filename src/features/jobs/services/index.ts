import { Context } from "hono";
import prisma from "../../../libs/prisma";
import { Response } from "../../../libs/response";

export const GetJobsService = async (c: Context) => {
    try {
        const page = Number(c.req.query('page')) || 1;
        const perPage = Number(c.req.query('per_page')) || 10;
        const skip = (page - 1) * perPage;

        const [total, jobs] = await Promise.all([
            prisma.job_posts.count(),
            prisma.job_posts.findMany({
                skip,
                include:{
                    companies: true,
                    job_post_categories:{
                        include:{
                            job_categories: true
                        }
                    }
                },
                take: perPage,
            })
        ]);

        const lastPage = Math.ceil(total / perPage);
        const nextPage = page + 1 <= lastPage ? page + 1 : null;
        const prevPage = page - 1 >= 1 ? page - 1 : null;

        const data = {
            data: jobs,
            meta: {
                current_page: page,
                from: skip + 1,
                last_page: lastPage,
                per_page: perPage,
                to: skip + jobs.length,
                total,
            },
            links: {
                first: `?page=1`,
                last: `?page=${lastPage}`,
                prev: prevPage ? `?page=${prevPage}` : null,
                next: nextPage ? `?page=${nextPage}` : null,
            }
        };

        return Response(c, data, "Jobs retrieved successfully", 200);
    } catch (error) {
        return Response(c, null, "Failed to retrieve jobs", 500);
    }
}