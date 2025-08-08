import { Context } from "hono"
import { ContentfulStatusCode } from "hono/utils/http-status"

export const Response = (c: Context, data: any, message: string, status: ContentfulStatusCode) => {
  return c.json({
    success: status >= 200 && status < 300,
    data,
    message,
  }, status)
}

