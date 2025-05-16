"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

  const [isTournamentOpen, setIsTournamentOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTournamentDropdown = () => {
    setIsTournamentOpen((prev) => !prev);
    setIsTeamOpen(false);
  };

  const toggleTeamDropdown = () => {
    setIsTeamOpen((prev) => !prev);
    setIsTournamentOpen(false);
  };

  const userRoles = (session?.user.roles || []).map(String);
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
      <div className="bg-black fixed top-0 left-0 right-0 z-40 w-full">
        <div className="flex justify-between items-center py-2 px-4 max-w-[1760px] mx-auto">
          {/* Logo */}
          <button onClick={() => router.push("/")}>
            <img src="/ProjectX-Logo.png" className="w-10" alt="ProjectX Logo" />
          </button>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            {session && (
              <div className="flex items-center gap-6">
                <NavButton label="About Us" route="/about" router={router} />
                <NavButton label="Our Team" route="/team" router={router} />
                <NavButton label="Rules" route="/rules" router={router} />
                <NavButton label="Join LSPD" route="/lspd" router={router} />
                <NavButton label="Join EMS" route="/ems" router={router} />

                {/* Tournament Dropdown */}
                {userRoles.includes(adminRole) && (
                  <Dropdown
                    label="Tournament"
                    isOpen={isTournamentOpen}
                    toggle={toggleTournamentDropdown}
                    options={[
                      { label: "Create Tournament", path: "/tournament/create" },
                      { label: "Tournament Matches", path: "/tournament/matches" },
                      { label: "Register Participant", path: "/tournament/register" },
                      { label: "Update Match Score", path: "/tournament/updateScore" },
                    ]}
                    router={router}
                  />
                )}

                {/* Team Dropdown */}
                <Dropdown
                  label="Team Registration"
                  isOpen={isTeamOpen}
                  toggle={toggleTeamDropdown}
                  options={[
                    { label: "Create Team", path: "/team/create" },
                    { label: "My Team", path: "/team/viewMyTeam" },
                    ...(userRoles.includes(adminRole)
                      ? [{ label: "View All Teams", path: "/team/viewAllTeams" }]
                      : []),
                  ]}
                  router={router}
                />
              </div>
            )}
          </div>

          {/* Login / Logout */}
          {session ? (
            <button onClick={() => signOut()} className="hidden md:block bg-red-500 px-4 py-2 rounded-lg text-white">
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn("discord")}
              className="bg-yellow-500 hover:bg-yellow-700 text-black hover:text-white hover:font-bold px-5 py-2 rounded-lg transition-all duration-300"
            >
              Login with Discord
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && session && (
          <div className="md:hidden bg-gray-900 text-white px-4 py-4 space-y-3">
            {["About Us", "Our Team", "Rules", "Join LSPD", "Join EMS"].map((label, idx) => (
              <MobileNavItem key={idx} label={label} route={`/${label.toLowerCase().replace(" ", "")}`} router={router} />
            ))}

            {/* Mobile Dropdowns */}
            {userRoles.includes(adminRole) && (
              <MobileDropdown label="Tournament" options={[
                { label: "Create Tournament", path: "/tournament/create" },
                { label: "Tournament Matches", path: "/tournament/matches" },
                { label: "Register Participant", path: "/tournament/register" },
                { label: "Update Match Score", path: "/tournament/updateScore" },
              ]} router={router} />
            )}
            <MobileDropdown label="Team Registration" options={[
              { label: "Create Team", path: "/team/create" },
              { label: "My Team", path: "/team/viewMyTeam" },
              ...(userRoles.includes(adminRole)
                ? [{ label: "View All Teams", path: "/team/viewAllTeams" }]
                : []),
            ]} router={router} />

            <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded-md w-full mt-2">
              Logout
            </button>
          </div>
        )}

        {/* Welcome Message */}
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

function NavButton({ label, route, router }) {
  return (
    <button onClick={() => router.push(route)} className="px-3 font-bold text-white border-b-2 border-transparent hover:border-white">
      {label}
    </button>
  );
}

function Dropdown({ label, isOpen, toggle, options, router }) {
  return (
    <div className="relative">
      <button onClick={toggle} className="px-3 font-bold text-white border-b-2 border-transparent hover:border-white">
        {label}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
          {options.map((opt, i) => (
            <button key={i} onClick={() => router.push(opt.path)} className="block w-full text-left text-white pl-4 py-2 text-sm hover:bg-gray-700 rounded-lg">
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ label, route, router }) {
  return (
    <button onClick={() => router.push(route)} className="block w-full text-left py-2 border-b border-gray-700">
      {label}
    </button>
  );
}

function MobileDropdown({ label, options, router }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full text-left font-bold py-2">
        {label}
      </button>
      {open && (
        <div className="ml-4 space-y-2">
          {options.map((opt, i) => (
            <button key={i} onClick={() => router.push(opt.path)} className="block w-full text-left text-sm text-white py-1">
              - {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
