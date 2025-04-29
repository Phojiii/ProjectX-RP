import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { teamId, playerId, playerUsername } = req.body;

  try {
    const { db } = await connectToDatabase();

    // Find the team
    const team = await db.collection('teams').findOne({ teamId });

    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    // Check if player already in team
    if (team.players.some(p => p.discordId === playerId)) {
      return res.status(400).json({ message: 'You are already in the team' });
    }

    // Check if team already full
    if (team.players.length >= 6) {
      return res.status(400).json({ message: 'Team is full (6 members max)' });
    }

    // Add player to team
    await db.collection('teams').updateOne(
      { teamId },
      { $push: { players: { discordId: playerId, username: playerUsername } } }
    );

    res.status(200).json({ message: 'Joined team successfully' });
  } catch (error) {
    console.error('Error joining team:', error);
    res.status(500).json({ message: 'Failed to join team' });
  }
}
