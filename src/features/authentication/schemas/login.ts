import z from "zod";

export const LoginScheme = z.object({
    phone: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/),
    password: z.string().min(8),
})
