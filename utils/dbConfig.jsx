// Make sure to install the correct packages:
// npm install @neondatabase/serverless drizzle-orm

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

const db = drizzle(sql, { schema });
