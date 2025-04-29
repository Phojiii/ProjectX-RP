"use client";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function JoinTeamPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { teamId } = router.query;

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === "loading") return; // wait for session to load

    if (!session) {
      router.push('/api/auth/signin'); // force login if not logged in
      return;
    }

    if (teamId) {
      joinTeam();
    }
  }, [status, session, teamId]);

  async function joinTeam() {
    try {
      const res = await fetch('/api/team/joinTeam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamId,
          playerId: session.user.id, // Discord ID
          playerUsername: session.user.name // Discord username
        })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('🎉 You have successfully joined the team!');
      } else {
        setMessage(`⚠️ Error: ${data.message}`);
      }
    } catch (err) {
      console.error('Join team error', err);
      setMessage('Something went wrong.');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <div>
        <h1 className="text-4xl mb-6">Joining Team...</h1>
        <p className="text-xl">{message}</p>
      </div>
    </div>
  );
}