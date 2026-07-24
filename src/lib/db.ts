import { PrismaClient } from "@prisma/client";

/*
  Single shared PrismaClient. In dev, Next.js hot-reload re-evaluates modules
  repeatedly, so without this cache we'd open a new DB connection on every
  change and eventually exhaust them. In production a single instance is used.
*/
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
