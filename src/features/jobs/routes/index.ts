import { Hono } from "hono";
import { GetJobsService } from "../services";
import { ShowJobService } from "../services/show";

export const JobRoutes = new Hono()
    JobRoutes.get("/", GetJobsService)
    JobRoutes.get("/:id", ShowJobService)
