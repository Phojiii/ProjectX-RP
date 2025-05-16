import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { playerId } = req.query;

  if (!playerId) {
    return res.status(400).json({ message: 'Player ID is required' });
  }

  try {
    const { db } = await connectToDatabase();

    const team = await db.collection('teams').findOne({
      'players.discordId': playerId
    });

    if (!team) {
      return res.status(404).json({ message: 'You are not in any team' });
    }

    return res.status(200).json(team);
  } catch (error) {
    console.error('Error fetching team:', error);
    return res.status(500).json({ message: 'Failed to fetch team' });
  }
}
