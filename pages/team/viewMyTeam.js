import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '../navbar';

export default function MyTeamPage() {
  const { data: session } = useSession();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchMyTeam(session.user.id).then((data) => {
        if (data) setTeam(data);
      });
    }
  }, [session]);

  
  async function fetchMyTeam(playerId) {
    try {
      const response = await fetch(`/api/team/myTeam?playerId=${playerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch team');
      }
      const team = await response.json();
      return team;
    } catch (error) {
      console.error('Error fetching team:', error);
      return null;
    }
  }
  

  if (!session) return <div>Loading...</div>;

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
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-32 px-6">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          My Team
        </h1>

        {team ? (
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Team Name: <span className="text-orange-400">{team.name}</span>
            </h2>
            <h2 className="text-lg font-semibold text-white mb-2">Team Captain: {team.captain.username}</h2>
            <h3 className="text-lg font-semibold text-white mb-2">Members:</h3>
            <ul className="list-disc list-inside space-y-2">
              {team.players.map((player) => (
                <li key={player.discordId} className="text-gray-300">
                  {player.username}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <p className="text-gray-400 text-lg">
              🚀 You are not part of any team yet.  
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
