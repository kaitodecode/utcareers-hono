import { Context } from "hono"
import prisma from "../../../libs/prisma"
import { Response } from "../../../libs/response"

export const listCompanies = async (c: Context) => {
    try {
        const data = await prisma.companies.findMany({
            where: {
                job_posts: {
                    some: {} // Check if company has any job posts
                },
                AND: {
                    deleted_at: {
                        equals: null

                    }
                }

            },
            select: {
                id: true,
                name: true,
                logo: true
            }
        });

        if (!data || data.length === 0) {
            return Response(c, null, "No companies found", 404);
        }

        return Response(c, data, "Successfully retrieved companies", 200);
    } catch (error) {
        console.error("Error retrieving companies:", error);
        return Response(c, null, "Internal server error", 500);
    }
}