import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const query =
      "SELECT * FROM kalendars WHERE k_status = 'on' and k_datums > SYSDATE() order by k_datums ASC LIMIT 4";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    return res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
