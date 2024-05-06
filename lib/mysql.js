import mysql from "mysql";
import _ from "./env"

export const connectMysqlDB = () => {
  // Create a connection pool instead of a single connection
  const connection = mysql.createPool({
    connectionLimit: 10, // Adjust this according to your needs
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  });

  // Handle errors and log connection status
  connection.getConnection((err, conn) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database.");
    conn.release(); // Release the connection after successful connection
  });

  // Return the connection pool
  return connection;
};
