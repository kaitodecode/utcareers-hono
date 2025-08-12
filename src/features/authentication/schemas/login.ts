import z from "zod";

export const LoginScheme = z.object({
    identifier: z.string().min(1, "Email atau nomor telepon harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
})
