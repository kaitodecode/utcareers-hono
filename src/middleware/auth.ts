import { Context } from "hono"
import * as jwt from "jsonwebtoken"
import { Response } from "../libs/response"

export const AuthMiddleware = async (c: Context, next: () => Promise<any>) => {
  try {
    const token = c.req.header("Authorization")?.split(" ")[1]
    if (!token) {
      return Response(c, null, "No token provided", 401)
    }
    const user = jwt.verify(token, process.env.JWT_SECRET as string)
    c.set("user", user)
    await next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return Response(c, null, "Invalid token", 401)
    }
    return Response(c, null, "Failed to authenticate token", 500)
  }
}