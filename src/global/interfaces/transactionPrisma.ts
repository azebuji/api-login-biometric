import { Prisma, PrismaClient } from "@prisma/client";

interface TrxPrisma extends Omit<PrismaClient<Prisma.PrismaClientOptions, never | undefined>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"> { }

export default TrxPrisma