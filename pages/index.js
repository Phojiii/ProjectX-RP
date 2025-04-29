"use client";
import Navbar from "./navbar";
import { useSession } from "next-auth/react";
import { RiTeamFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [userRoles, setUserRoles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCaptain, setIsCaptain] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      if (status !== "authenticated" || !session?.user?.id) return;

      try {
        const res = await fetch(`/api/getRoles?userId=${session.user.id}`);
        const data = await res.json();
        setUserRoles(data.roles);

        // Check role IDs against env
        const adminId = process.env.NEXT_PUBLIC_ADMIN_ROLE_ID;
        const captainId = process.env.NEXT_PUBLIC_CAPTAIN_ROLE_ID;

        setIsAdmin(data.roles.includes(adminId));
        setIsCaptain(data.roles.includes(captainId));
      } catch (err) {
        console.error("Error fetching roles:", err);
      }
    };

    fetchRoles();
  }, [session, status]);

  const userName = session?.user?.name || "Guest";

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute inset-0">
        <img src="/hero-image.png" className="object-cover w-full h-screen" alt="Background" />
      </div>

      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black clip-path-custom flex items-center pl-20">
          <div className="text-white">
            <h2 className="text-3xl font-bold">
              Hi, <span className="text-orange-400 capitalize">{userName}</span>
            </h2>
            <h1 className="text-7xl font-bold mt-4">PROJECT X</h1>
            <p className="mt-2 text-gray-400 leading-none">
              One of the oldest FiveM community of Pakistan, <br />
              We wish you have a great time here. <span className="text-2xl">&#9829;</span>
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.youtube.com/watch?v=jFk-8TgsfMg" className="px-6 py-2 border border-white rounded-md font-semibold">Watch Trailer</a>
              <a href="https://discord.gg/eEWEqfbVJr" className="px-6 py-2 border border-white rounded-md font-semibold" target="_blank">Discord</a>
            </div>

            {/* Optional: Display roles */}
            {status === "authenticated" && (
              <div className="mt-4">
                {isAdmin && <p className="text-green-400 font-bold">You are an Admin</p>}
                {isCaptain && <p className="text-blue-400 font-bold">You are a Captain</p>}
                {!isAdmin && !isCaptain && <p className="text-gray-400">You are a Player</p>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cuteyapa Section */}
      <div className="bg-black h-60 flex justify-between items-center px-20 text-white">
        {["Placeholder", "Placeholder", "Placeholder"].map((title, index) => (
          <div className="text-center w-1/3" key={index}>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p>Whereas disregard and contempt for human rights have resulted</p>
          </div>
        ))}
      </div>

      {/* Our Team Section */}
      <div className="bg-[url(/ourteam-bg.png)] bg-no-repeat bg-center bg-cover w-full">
        <div className="bg-black bg-opacity-50">
          <div className="w-4/5 block m-auto py-40">
            <h2 className="flex text-white leading-none text-4xl mb-10">
              <RiTeamFill />&nbsp;&nbsp;Our Team
            </h2>

            <div className="flex justify-between items-center gap-10">
              {[
                { name: "RAJA", role: "Owner", image: "/team/raja.gif" },
                { name: "Maxtitan", role: "Founder", image: "/team/tits.png" },
                { name: "Osman", role: "FiveM Developer", image: "/team/team-icon.png" },
                { name: "ChoKez", role: "Lead Admin", image: "/team/chokez.png" },
                { name: "PHOJi", role: "Web Developer", image: "/team/phoji.png" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-full"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block m-auto w-1/4 rounded-lg"
                  />
                  <h2 className="text-xl">{member.name}</h2>
                  <p className="text-gray-400 leading-none mt-6 text-sm">
                    Whereas disregard and contempt for human rights have resulted
                  </p>
                  <h3 className="text-xl font-bold mt-20 block uppercase">{member.role}</h3>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/team")}
              className="block m-auto w-32 bg-white text-center rounded-md py-3 mt-10 font-bold"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
