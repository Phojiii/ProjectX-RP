import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '../../../lib/mongodb';
import { fetch } from 'undici'; // native fetch for Node.js

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
    createdAt: new Date(),
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

    // Send message to Discord webhook
    const webhookUrl =
      'https://discord.com/api/webhooks/1366164281590284288/d2obvog7DcLG1CxEsRIYk5DVDmWwd81-BtTzYLlZuFwE-MWit3KZVm7YGHiEzHMMpB3w';

    const discordMessage = {
      content: `🚨 **New Valorant Team Registered!**\n\n**Team Name:** ${teamName}\n**Captain:** ${captainUsername} (ID: ${captainId})\n**Team ID:** ${teamId}`,
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });

    // Respond success
    res.status(201).json({ message: 'Team created successfully', teamId });
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ message: 'Failed to create team' });
  }
}




