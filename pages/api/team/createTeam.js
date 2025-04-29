import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '../../../lib/mongodb'; // adjust path if needed

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { teamName, captainId, captainUsername } = req.body;

  // Validate input
  if (!teamName || !captainId || !captainUsername) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const teamId = uuidv4();
  const newTeam = {
    teamId,
    name: teamName.trim(),
    captain: { discordId: captainId, username: captainUsername },
    players: [{ discordId: captainId, username: captainUsername }],
    createdAt: new Date(), // optional: add creation time
  };

  try {
    const { db } = await connectToDatabase();

    // Optional: Check if a team with the same name already exists
    const existingTeam = await db.collection('teams').findOne({ name: teamName.trim() });
    if (existingTeam) {
      return res.status(400).json({ message: 'Team name already taken' });
    }

    // Insert new team into database
    await db.collection('teams').insertOne(newTeam);

    res.status(201).json({ message: 'Team created successfully', teamId });
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ message: 'Failed to create team' });
  }
}
