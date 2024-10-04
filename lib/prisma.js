import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma: With this variable we are sure that Prisma client instance is reused across hot reloads during development.
// Without it a new instance of a Prisma client will be created whenever an application is reloaded
