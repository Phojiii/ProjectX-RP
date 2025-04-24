"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="relative">
      <div className="bg-primary fixed top-0 left-0 right-0 z-40 w-full bg-black bg-opacity-50">
        <div className="flex justify-between items-center py-1 px-4 max-w-[1760px] mx-auto w-full ">
          {/* Logo - Left */}
          <button onClick={() => router.push("/")}>
            <img
              src="/ProjectX-Logo.png"
              className="font-semibold text-3xl w-10"
              alt="ProjectX Logo"
            />
          </button>
          {session ? (
            // Navigation + Logout (when logged in)
            <>
              {/* Navigation - Center */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-6 py-2 px-5 rounded-full">
                  
                  <button
                    onClick={() => router.push("/about")}
                    className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => router.push("/team")}
                    className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white"
                  >
                    Our Team
                  </button>
                  <button
                    onClick={() => router.push("/rules")}
                    className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white"
                  >
                    Rules
                  </button>
                  <button
                    onClick={() => router.push("/lspd")}
                    className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white"
                  >
                    Join LSPD
                  </button>
                  <button
                    onClick={() => router.push("/ems")}
                    className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white"
                  >
                    Join EMS
                  </button>
                </div>
              </div>

              {/* Logout Button - Right */}
              <button
                onClick={() => signOut()}
                className="bg-red-500 px-5 py-2 rounded-lg text-white"
              >
                Logout
              </button>
            </>
          ) : (
            // When NOT logged in: only Logo and Login
            <button
              onClick={() => signIn("discord")}
              className="bg-yellow-500 hover:bg-yellow-700 text-black hover:text-white hover:font-bold px-5 py-2 rounded-lg text-md transition-all duration-500"
            >
              Login with Discord
            </button>
          )}
        </div>

        {/* Welcome message below navbar, only if logged in */}
        {session && (
          <div className="w-full text-white text-center py-1 text-sm">
            Welcome to Project X,{" "}
            <span className="text-orange-300">{session.user.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}