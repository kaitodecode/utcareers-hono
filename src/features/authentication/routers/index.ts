import { Hono } from "hono";
import { RegisterScheme } from "../schemas/register";
import { RegisterService } from "../services/register";
import { LoginScheme } from "../schemas/login";
import { LoginService } from "../services/login";
import { Validate } from "../../../libs/zod";
import { AuthMiddleware } from "../../../middleware/auth";
import { MeService } from "../services/me";
import { UpdateProfileScheme } from "../schemas/profile";
import { UpdateProfileService } from "../services/profile";

export const AuthRouter = new Hono()

AuthRouter.post("/register", Validate("json", RegisterScheme), RegisterService)
AuthRouter.post("/login", Validate("json", LoginScheme), LoginService)
AuthRouter.get("/profile", AuthMiddleware, MeService)
AuthRouter.put("/profile/:id", AuthMiddleware, Validate("form", UpdateProfileScheme), UpdateProfileService)


