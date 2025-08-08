import z from "zod";

export const CreateUserScheme = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email format"),
  address: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["pelamar", "admin"]).default("pelamar")
});

export const UpdateUserScheme = z.object({
  name: z.string().min(1, "Name is required").optional(),
  phone: z.string().min(1, "Phone is required").optional(),
  email: z.string().email("Invalid email format").optional(),
  address: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  password: z.string().min(8, "Password must be at least 8 characters").optional(),
  role: z.enum(["pelamar", "admin"]).optional()
});

export const GetUsersQueryScheme = z.object({
  page: z.string().transform(val => parseInt(val) || 1).optional(),
  per_page: z.string().transform(val => parseInt(val) || 15).optional(),
  search: z.string().optional(),
  role: z.enum(["pelamar", "admin"]).optional()
});