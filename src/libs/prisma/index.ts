import { PrismaClient } from "./dist"

const prisma = new PrismaClient({
  log: ["query"],
})

export default prisma
