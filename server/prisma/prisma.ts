import "dotenv/config";
import dotenv from "dotenv";
dotenv.config({ path: "./prisma/.env" });

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../dist/generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

// not sure what the driver adapter is or does
const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
