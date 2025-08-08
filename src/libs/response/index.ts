import { Context } from "hono"
import { ContentfulStatusCode } from "hono/utils/http-status"

export const Response = (c: Context, data: any, message: string, status: ContentfulStatusCode) => {
  return c.json({
    success: true,
    data,
    message,
  }, status)
}

