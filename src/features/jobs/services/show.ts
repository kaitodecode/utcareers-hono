import { Context } from "hono";
import { Response } from "../../../libs/response";
import prisma from "../../../libs/prisma";

export const ShowJobService = async (c: Context) => {
    try {
        // Get id from URL parameter
        const { id } = c.req.param();
        
        // Find job post by id including related data
        const job = await prisma.job_posts.findUnique({
            where: { id },
            include: {
                companies: true
            }
        });

        if (!job) {
            return Response(c, null, "Job not found", 404);
        }

        // Return successful response with job data
        return Response(c, job, "Job retrieved successfully", 200);

    } catch (error) {   
        return Response(c, null, "Failed to retrieve job", 500);    
    }
}