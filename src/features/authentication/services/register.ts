import { Context } from "hono"
import { RegisterScheme } from "../schemas/register"
import * as bcrypt from "bcrypt"
import prisma from "../../../libs/prisma"
import { v4 as uuidv4 } from 'uuid';

import { Response } from "../../../libs/response"

function createLaravelCompatibleHash(password: string): string {
  const hash = bcrypt.hashSync(password, 12);
  // Ubah prefix $2a atau $2b menjadi $2y untuk kompatibilitas Laravel
  return hash.replace(/^\$(2a|2b)/, '$2y');
}

export const RegisterService = async (c: Context) => {
  try {
    const data = c.req.valid("json" as never)
    const { name, phone, email, password } = data

    // Check if email exists
    const existingUserByEmail = await prisma.users.findUnique({
      where: { email },
      select: { id: true }
    })

    if (existingUserByEmail) {
      return Response(c, null, "Email already registered", 400)
    }

    // Check if phone exists
    const existingUserByPhone = await prisma.users.findUnique({
      where: { phone },
      select: { id: true }
    })

    if (existingUserByPhone) {
      return Response(c, null, "Phone number already registered", 400)
    }

    const user = await prisma.users.create({  
      data: {
        id: uuidv4(),
        name,
        phone,
        email,
        password: createLaravelCompatibleHash(password), // Using cost factor 12 to match Laravel
        role: "pelamar"
      },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        role: true
      }
    })

    return Response(c, user, "User registered successfully", 201)

  } catch (error) {
    return Response(c, null, "Failed to register user", 500)
  }
}