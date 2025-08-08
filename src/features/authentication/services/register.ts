import { Context } from "hono"
import { RegisterScheme } from "../schemas/register"
import * as bcrypt from "bcrypt"
import prisma from "../../../libs/prisma"
import { v4 as uuidv4 } from 'uuid';

import { Response } from "../../../libs/response"

export const RegisterService = async (c: Context) => {
  try {
    const data = c.req.valid("json" as never)
    const { name, phone, email, address, description, password } = data

    // Check if email already exists
    const existingUser = await prisma.users.findUnique({
      where: { email, OR: [{ phone }] },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        description: true,
        password: true,
        role: true,
      }
    })

    if (existingUser) {
      return Response(c, null, "Email or phone number already registered", 400)
    }

    const user = await prisma.users.create({  
      data: {
        id: uuidv4(),
        name,
        phone,
        email,
        address,
        description,
        password: bcrypt.hashSync(password, 10),
        role: "pelamar"
      }
    })

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return Response(c, userWithoutPassword, "User registered successfully", 201)

  } catch (error) {
    return Response(c, null, "Failed to register user", 500)
  }
}