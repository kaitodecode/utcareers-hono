import { Context } from "hono"
import { Response } from "../../../libs/response"

export const MeService = async (c: Context) => {
  try {
    const user = c.get("user")
    return Response(c, user, "User retrieved successfully", 200)
  } catch (error) {
    return Response(c, null, "Failed to retrieve user", 500)
  }
}