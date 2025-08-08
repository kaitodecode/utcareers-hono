import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { CreateUserScheme, UpdateUserScheme, GetUsersQueryScheme } from "../schemas/user";
import {
  GetUsersService,
  GetUserService,
  CreateUserService,
  UpdateUserService,
  DeleteUserService
} from "../services/user";
import { Response } from "../../../libs/response";
import { AuthMiddleware } from "../../../middleware/auth";
import { Validate } from "../../../libs/zod";

export const UserRouter = new Hono();


// Get all users with pagination (protected)
UserRouter.get("/", AuthMiddleware, Validate("query", GetUsersQueryScheme), GetUsersService);

// Get single user by ID (protected)
UserRouter.get("/:id", AuthMiddleware, GetUserService);

// Create new user (protected)
UserRouter.post("/", AuthMiddleware, Validate("json", CreateUserScheme), CreateUserService);

// Update user (protected)
UserRouter.put("/:id", AuthMiddleware, Validate("json", UpdateUserScheme), UpdateUserService);

// Delete user (protected)
UserRouter.delete("/:id", AuthMiddleware, DeleteUserService);