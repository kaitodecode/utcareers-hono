import z from "zod";

export const ApprovalJobScheme = z.object({
  status: z.string()
})