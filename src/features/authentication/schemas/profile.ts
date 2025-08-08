import z from "zod";

export const UpdateProfileScheme = z.object({
  name: z.string().min(1, "Name is required").optional(),
  address: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  photo: z.instanceof(File).optional()
});