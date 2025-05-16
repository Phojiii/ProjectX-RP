import { getSession } from "next-auth/react";
import { connectToDatabase } from "../../lib/mongodb"; // Adjust path as needed
import Navbar from "../navbar";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const adminRole = process.env.NEXT_PUBLIC_ADMIN_ROLE_ID;

  // Access control
  if (!session || !session.user.roles?.includes(adminRole)) {
    return {
      redirect: {
        destination: "/unauthorized",
        permanent: false,
      },
    };
  }

  // Fetch teams from DB
  const { db } = await connectToDatabase();
  const teams = await db.collection("teams").find().toArray();

  // Serialize MongoDB ObjectId
  const teamsData = teams.map(team => ({
    ...team,
    _id: team._id.toString(),
    createdAt: team.createdAt ? team.createdAt.toISOString() : null,
    updatedAt: team.updatedAt ? team.updatedAt.toISOString() : null,
  }));
  

  return {
    props: {
      session,
      teams: teamsData,
    },
  };
}

export default function ViewAllTeams({ session, teams }) {
  return (
    <div className="text-white p-6 bg-gray-900 min-h-screen">
    <Navbar />
      <h1 className="text-3xl mb-6 font-bold text-yellow-400 mt-32">All Teams (Admin Access)</h1>
      {teams.length === 0 ? (
        <p>No teams have been registered yet.</p>
      ) : (
        <div className="space-y-6">
          {teams.map((team, index) => (
            <div key={team._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2 text-orange-300">
                #{index + 1}. {team.name} ({team.teamId})
              </h2>
              <ul className="ml-4 list-disc text-white">
                {team.players && team.players.length > 0 ? (
                  team.players.map((player, idx) => (
                    <li key={idx}>
                      {player.username} <span className="text-sm text-gray-400">({player.discordId})</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">No players yet.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
