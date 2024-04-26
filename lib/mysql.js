import mysql from "mysql";

export const connectMysqlDB = () => {
  // Create a connection pool instead of a single connection
  const connection = mysql.createPool({
    connectionLimit: 10, // Adjust this according to your needs
    host: "database-myamble.cj064ygomm4o.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Welcome1",
    database: "db",
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
