"use client";
import Navbar from "./navbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="relative">
      <Navbar />
      <img src="/hero-image.png" className="fixed" />
      <div className="absolute top-40 left-40 bg-black rounded-lg bg-opacity-50 p-10">
      {session && (
          <h2 className="text-white text-9xl font-semibold">Hi,{" "}
            <span className="text-orange-300 text-4xl">&nbsp;&nbsp;{session.user.name}</span>
            <img src="/gtavlogo.svg" className="w-32 float-end" />
          </h2>
        )}
        <h1 className="text-white text-5xl font-bold mt-5">Welcome to Project X RolePlay</h1>
        <p className="text-white text-lg mt-5">One of the OLDEST FiveM community of Pakistan. We wish you have a great time here. <span className="text-4xl">&#9829;</span></p>
        <div className="mt-10">
          <a href="" className="text-white border px-4 py-3">Watch The Trailer</a>&nbsp;&nbsp;<a href="https://discord.gg/eEWEqfbVJr" className="text-white border px-4 py-3" target="_blank">Join Project X Discord</a>
        </div>
      </div>
    </div>
  );
}
