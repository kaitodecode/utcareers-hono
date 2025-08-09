import z from "zod";

export const ApprovalJobScheme = z.object({
  status: z.enum(["accepted", "rejected"]).describe("Status must be either 'accepted' or 'rejected'"),
    required_error: "Status is required",
    invalid_type_error: "Status must be either 'accepted' or 'rejected'"
  })