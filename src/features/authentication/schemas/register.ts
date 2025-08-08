import z from "zod";

export const RegisterScheme = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email({ message: "Invalid email format" }),
  address: z.string().nullable(),
  password: z.string().min(8),
})