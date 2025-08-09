import { Hono } from "hono";
import { GetJobsService } from "../services";
import { ShowJobService } from "../services/show";
import { ApplyJobService } from "../services/apply";
import { ApplyJobScheme } from "../schemas/apply";
import { Validate } from "../../../libs/zod";
import { AuthMiddleware } from "../../../middleware/auth";
import { ApprovalJobService } from "../services/history";
import { GetHistoryService } from "../services/history";
import { GetApplicantsService } from "../services/history";
import { ApprovalJobScheme } from "../schemas/history";

export const JobRoutes = new Hono()
JobRoutes.get("/", GetJobsService)
JobRoutes.get("/history", AuthMiddleware, GetHistoryService)
JobRoutes.get("/:id", ShowJobService)
JobRoutes.post("/:id/apply", AuthMiddleware, Validate("form", ApplyJobScheme), ApplyJobService)
JobRoutes.post("/:id/approval", AuthMiddleware, Validate("json", ApprovalJobScheme), ApprovalJobService)
JobRoutes.get("/:id/applicants", AuthMiddleware, GetApplicantsService)

