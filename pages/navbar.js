"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

  const [isTournamentOpen, setIsTournamentOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);


  const toggleTournamentDropdown = () => {
    setIsTournamentOpen((prev) => !prev);
    setIsTeamOpen(false);
  };

  const toggleTeamDropdown = () => {
    setIsTeamOpen((prev) => !prev);
    setIsTournamentOpen(false);
  };

  const userRoles = (session?.user.roles || []).map(String); // Force all to strings
  const adminRole = process.env.NEXT_PUBLIC_ADMIN_ROLE_ID;
  const captainRole = process.env.NEXT_PUBLIC_CAPTAIN_ROLE_ID;

  let roleLabel = "Team Player";
  if (userRoles.includes(adminRole)) {
    roleLabel = "Admin";
  } else if (userRoles.includes(captainRole)) {
    roleLabel = "Captain";
  }



  return (
    <div className="relative">
      <div className="bg-primary fixed top-0 left-0 right-0 z-40 w-full bg-black">
        <div className="flex justify-between items-center py-1 px-4 max-w-[1760px] mx-auto w-full">
          {/* Logo - Left */}
          <button onClick={() => router.push("/")}>
            <img
              src="/ProjectX-Logo.png"
              className="font-semibold text-3xl w-10"
              alt="ProjectX Logo"
            />
          </button>

          {session ? (
            <>
              {/* Navigation - Center */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-6 py-2 px-5 rounded-full">
                  <button onClick={() => router.push("/about")} className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white">
                    About Us
                  </button>
                  <button onClick={() => router.push("/team")} className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white">
                    Our Team
                  </button>
                  <button onClick={() => router.push("/rules")} className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white">
                    Rules
                  </button>
                  <button onClick={() => router.push("/lspd")} className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white">
                    Join LSPD
                  </button>
                  <button onClick={() => router.push("/ems")} className="border border-t-0 border-r-0 border-l-0 px-3 font-bold py-1 text-white">
                    Join EMS
                  </button>
                  {/* Tournament Dropdown */}
                  {userRoles.includes(adminRole) && (  
                    <div className="relative">
                      <button onClick={toggleTournamentDropdown} className="px-3 py-1 font-bold text-white border border-t-0 border-r-0 border-l-0">
                        Tournament
                      </button>
                      {isTournamentOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
                          <button onClick={() => router.push("/tournament/create")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                            Create Tournament
                          </button>
                          <button onClick={() => router.push("/tournament/matches")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                            Tournament Matches
                          </button>
                          <button onClick={() => router.push("/tournament/register")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                            Register Participant
                          </button>
                          <button onClick={() => router.push("/tournament/updateScore")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                            Update Match Score
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Team Registration Dropdown */}
                  <div className="relative">
                    <button onClick={toggleTeamDropdown} className="px-3 py-1 font-bold text-white border border-t-0 border-r-0 border-l-0">
                      Team Registration
                    </button>
                    {isTeamOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
                        <button onClick={() => router.push("/team/create")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                          Create Team
                        </button>
                        <button onClick={() => router.push("/team/viewMyTeam")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                          My Team
                        </button>
                        {userRoles.includes(adminRole) && (
                          <button onClick={() => router.push("/team/viewAllTeams")} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
                            View All Teams
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Logout Button - Right */}
              <button onClick={() => signOut()} className="bg-red-500 px-5 py-2 rounded-lg text-white">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => signIn("discord")} className="bg-yellow-500 hover:bg-yellow-700 text-black hover:text-white hover:font-bold px-5 py-2 rounded-lg text-md transition-all duration-500">
              Login with Discord
            </button>
          )}
        </div>

        {/* Welcome message + Roles */}
        {session && (
          <div className="w-full text-white text-center py-1 text-sm bg-black border-t border-gray-700">
            Welcome to Project X, <span className="text-orange-300">{session.user.name}</span>
            <span className="text-white ml-4">Roles: <span className="text-gray-400">{roleLabel}</span></span>
          </div>
        )}
      </div>
    </div>
  );
}
