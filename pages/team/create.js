"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../navbar";

export default function CreateTeam() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [teamName, setTeamName] = useState("");
  const [message, setMessage] = useState("");
  const [teamLink, setTeamLink] = useState("");
  const [alreadyInTeam, setAlreadyInTeam] = useState(false);

  useEffect(() => {
    async function checkIfInTeam() {
      if (session?.user?.id) {
        try {
          const res = await fetch(`/api/team/myTeam?playerId=${session.user.id}`);
          if (res.ok) {
            const data = await res.json();
            if (data) {
              setAlreadyInTeam(true);
              setMessage("⚠️ You are already in a team. You can't create another team.");
            }
          }
        } catch (error) {
          console.error("Error checking team:", error);
        }
      }
    }

    checkIfInTeam();
  }, [session]);

  async function handleCreateTeam(e) {
    e.preventDefault();

    if (alreadyInTeam) {
      setMessage("⚠️ You are already in a team. Cannot create a new team.");
      return;
    }

    if (!teamName.trim()) {
      setMessage("⚠️ Please enter a team name.");
      return;
    }

    if (!session) {
      router.push('/api/auth/signin');
      return;
    }

    try {
      const res = await fetch("/api/team/createTeam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamName,
          captainId: session.user.id, // Discord ID
          captainUsername: session.user.name,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("🎉 Team created successfully!");
        setTeamLink(`${window.location.origin}/team/join/${data.teamId}`);
      } else {
        setMessage(`⚠️ Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Create team error:", err);
      setMessage("Something went wrong.");
    }
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <button
          className="bg-blue-600 px-6 py-3 rounded text-xl"
          onClick={() => router.push('/api/auth/signin')}
        >
          Login with Discord to Create Team
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-white">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Create a Team</h1>

      {!alreadyInTeam ? (
        <form onSubmit={handleCreateTeam} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-4 mb-4 rounded bg-gray-700 placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-center py-2 rounded text-xl"
          >
            Create Team
          </button>
        </form>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <p className="text-yellow-400 text-lg">
            ⚠️ You are already part of a team. You cannot create another one.
          </p>
        </div>
      )}

      {message && <p className="mt-4 text-center">{message}</p>}

      {teamLink && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Invite Link:</h2>
          <a
            href={teamLink}
            className="text-blue-400 underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            {teamLink}
          </a>
        </div>
      )}
    </div>
  );
}
