import { PrismaClient } from "@prisma/client";

import { env } from "~/env.mjs";

const globalPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalPrisma.prisma ??
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalPrisma.prisma = prisma;
