import { Hono } from "hono";
import { AuthRouter } from "../features/authentication/routers";
import { UserRouter } from "../features/users/routes";
import { JobRoutes } from "../features/jobs/routes";

export const AppRouter = new Hono()
AppRouter.route("/auth", AuthRouter)
AppRouter.route("/users", UserRouter)
AppRouter.route("/jobs", JobRoutes)


