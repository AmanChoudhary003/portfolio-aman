import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();


const prismaSingleton = () => {
  const url = !process.env.DATABASE_URL;
  if (!url) {
    throw new Error("No database connection url");
  }

  return new PrismaClient({
    datasourceUrl: url,
  } as any);
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
