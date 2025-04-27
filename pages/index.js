"use client";
import Navbar from "./navbar";
import {useSession } from "next-auth/react";
import { RiTeamFill } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src="/hero-image.png"
          className="object-cover w-full h-screen"
          alt="Background"
        />
      </div>
      <div className="relative w-full h-screen">
        {/* Black Polygon Section */}
        <div className="absolute inset-0 bg-black clip-path-custom flex items-center pl-20">
          <div className="text-white">
            <h2 className="text-3xl font-bold">Hi, <span className="text-orange-400 capitalize">{session?.user?.name}</span></h2>
            {/* <p className="mt-5 mb-1 text-gray-400 text-lg">Welcome to</p> */}
            <h1 className="text-7xl font-bold mt-4">PROJECT X</h1>
            <p className="mt-2 text-gray-400 leading-none">
              One of the oldest FiveM community of Pakistan, <br /> We wish you have a great time here.<span className="text-2xl">&#9829;</span>
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.youtube.com/watch?v=jFk-8TgsfMg" className="px-6 py-2 border border-white rounded-md font-semibold">Watch Trailer</a>
              <a href="https://discord.gg/eEWEqfbVJr" className="px-6 py-2 border border-white rounded-md font-semibold" target="_blank">Discord</a>
            </div>
          </div>
        </div>
      </div>
      {/* Something which no one know yet P.S. Cuteyapa by USMAN Karwa */}
      <div className="bg-black h-60 flex justify-between items-center px-20 text-white">
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold mb-2">Placeholder</h2>
          <p>Whereas disregard and contempt for human rights have resulted</p>
        </div>
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold mb-2">Placeholder</h2>
          <p>Whereas disregard and contempt for human rights have resulted</p>
        </div>
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold mb-2">Placeholder</h2>
          <p>Whereas disregard and contempt for human rights have resulted</p>
        </div>
      </div>
      {/* Our Team */}
      <div className="bg-[url(/ourteam-bg.png)] bg-no-repeat bg-center bg-cover w-full">
        <div className="bg-black bg-opacity-50">
          <div className="w-4/5 block m-auto py-40">
            <h2 className="flex text-white leading-none text-4xl mb-10"><RiTeamFill />&nbsp;&nbsp;Our Team</h2>
            <div className="flex justify-between items-center gap-10">
              <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-full">
                <img src="/team/raja.gif" alt="" className="block m-auto w-1/4 rounded-lg" />
                <h2 className="text-xl">RAJA</h2>
                <p className="text-gray-400 leading-none mt-6 text-sm">Whereas disregard and contempt for human rights have resulted Whereas disregard </p>
                <h3 className="text-xl font-bold mt-20 block uppercase">Owner</h3>
              </div>
              <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-full">
                <img src="/team/tits.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                <h2 className="text-xl">Maxtitan</h2>
                <p className="text-gray-400 leading-none mt-6 text-sm">Whereas disregard and contempt for human rights have resulted Whereas disregard </p>
                <h3 className="text-xl font-bold mt-20 block uppercase">Founder</h3>
              </div>
              <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-full">
                <img src="/team/team-icon.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                <h2 className="text-xl">Osman</h2>
                <p className="text-gray-400 leading-none mt-6 text-sm">Whereas disregard and contempt for human rights have resulted Whereas disregard </p>
                <h3 className="text-xl font-bold mt-20 block uppercase">FiveM Developer</h3>
              </div>
              <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-full">
                <img src="/team/chokez.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                <h2 className="text-xl">ChoKez</h2>
                <p className="text-gray-400 leading-none mt-6 text-sm">Whereas disregard and contempt for human rights have resulted Whereas disregard </p>
                <h3 className="text-xl font-bold mt-20 block uppercase">Lead Admin</h3>
              </div>
              <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-full">
                <img src="/team/phoji.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                <h2 className="text-xl">PHOJi</h2>
                <p className="text-gray-400 leading-none mt-6 text-sm">Whereas disregard and contempt for human rights have resulted Whereas disregard </p>
                <h3 className="text-xl font-bold mt-20 block uppercase">Web Developer</h3>
              </div>
            </div>
            <button onClick={() => router.push("/team")} className="block m-auto w-32 bg-white text-center rounded-md py-3 mt-10 font-bold">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
