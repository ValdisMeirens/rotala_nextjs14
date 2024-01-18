import mysql from "mysql2/promise";

export default async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    return [];
  } catch (error) {
    console.error("Database error:", error.message);
    throw new Error("Database query failed");
  }
}
