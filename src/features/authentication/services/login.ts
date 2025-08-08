import { Context } from "hono"
import prisma from "../../../libs/prisma"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { Response } from "../../../libs/response"
import * as bcrypt from "bcrypt"

async function compareLaravelHash(plainPassword: string, laravelHash: string): Promise<boolean> {
  // Ubah prefix $2y$ → $2a$ agar kompatibel di Node.js
  const normalizedHash = laravelHash.replace(/^\$2y/, '$2a');
  return await bcrypt.compare(plainPassword, normalizedHash);
}

export const LoginService = async (c: Context) => {
    const { phone, password } = c.req.valid("json" as never)
    const user = await prisma.users.findFirst({
        where: {
            phone,
        }
    })
    if (!user) {
        return Response(c, null, "User not found", 404)
    }
    // Compare password with Laravel's bcrypt hash (default rounds: 10)
    const isPasswordValid = await compareLaravelHash(password, user.password)

    if (!isPasswordValid) {
        return Response(c, null, "Invalid password", 401)
    }
    
    // Use jsonwebtoken instead of hono/jwt
    const token = sign(user, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
    })
    return Response(c, { token, role: user.role }, "Login successful", 200)
}
