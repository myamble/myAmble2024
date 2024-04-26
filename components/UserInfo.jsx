"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function UserInfo() {
  const { data: session } = useSession();
  //console.log("Session Data:", session); // Log session object to console
  const handleLogout = () => {
    signOut();
    setLoading(true);
  };
  return (
    <div>
      <div className="bg-sky-800 text-white py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold">MyAmble</div>
        <div className="flex items-center">
          {session && (
            <div className="mr-4">
              <span className="text-white-300 text-sm mr-2">
                Welcome, {session.user?.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Log Out
              </button>
            </div>
          )}
          {!session && (
            <a
              href="/api/auth/signin"
              className="text-gray-300 hover:text-white"
            >
              Log In
            </a>
          )}
        </div>
      </div>
      <div className="py-8 px-8 flex justify-center items-center h-screen">
        <div className="bg-red-50 rounded-lg shadow-md p-8">
          {/* Daily Trip Planner Menu Item */}
          <div className="mb-2">
            <Link
              className="flex items-center text-black-300 hover:text-black text-lg font-semibold rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
              href={"/daily-trip-planner"}
            >
              <Image
                src="/book.png"
                alt="Daily Trip Planner"
                className="w-12 h-12 mr-4"
                width={48}
                height={48}
              />
              Daily Trip Planner
            </Link>
          </div>

          {/* Challenge Logger Menu Item */}
          <div className="mb-2">
            <Link
              className="flex items-center text-black-300 hover:text-black text-lg font-semibold rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
              href={"/daily-trip-planner"}
            >
              <Image
                src="/list.png"
                alt="Challenge Logger"
                className="w-12 h-12 mr-4"
                width={48}
                height={48}
              />
              Challenge Logger
            </Link>
          </div>

          {/* Travel Story Menu Item */}
          <div className="mb-2">
            <Link
              className="flex items-center text-black-300 hover:text-black text-lg font-semibold rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
              href={"/daily-trip-planner"}
            >
              <Image
                src="/study.png"
                alt="Travel Story"
                className="w-12 h-12 mr-4"
                width={48}
                height={48}
              />
              Travel Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
