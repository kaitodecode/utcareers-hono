import { Hono } from "hono";
import { AuthRouter } from "../features/authentication/routers";

export const AppRouter = new Hono()
AppRouter.route("/auth", AuthRouter)

