"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
//import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const { data: session } = useSession();

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //setLoading(true);

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      console.log("res:", res);
      if (res.error) {
        setError("Invalid Credentials");
        setLoading(false);
        return;
      }
      // console.log("username:", JSON.stringify(username)); // Log the value of username
      //console.log("password:", JSON.stringify(password)); // Log the value of password
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  //console.log("Session data:", session);

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            autoComplete="username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button
            //disabled={loading} // Disable button while loading
            className={`bg-purple-600 text-white font-bold cursor-pointer px-6 py-2`}
          >
            Login
          </button>
          {error && (
            <div
              className="text-black w-fit
          text-sm py-1 px-3 rounded-md mt-2"
            >
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don&apos;t have an account?
            <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
