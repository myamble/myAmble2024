import { connectMysqlDB } from "@/lib/mysql";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import mysql from "mysql";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          const connection = await connectMysqlDB(); // Establish MySQL connection
          const user = await findUserByUsername(connection, username); // Pass the connection variable

          if (!user) {
            return null;
          }

          // Compare the passwords directly
          if (user.password !== password) {
            return null;
          }
          //console.log("user", user);
          //return user;
          return { ...user, name: user.username };
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

// Function to find user by username
const findUserByUsername = async (connection, username) => {
  // Accept connection as a parameter
  return new Promise((resolve, reject) => {
    // Query MySQL database to find user by username
    const sql = "SELECT * FROM users WHERE username = ?";
    connection.query(sql, [username], (error, results) => {
      if (error) {
        reject(error);
      } else {
        //console.log(results[0]);
        resolve(results[0]);
      }
    });
  });
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
