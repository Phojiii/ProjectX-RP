import { connectToDatabase } from '../../../lib/mongodb';
import { fetch } from 'undici';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { teamId, playerId, playerUsername } = req.body;

  try {
    const { db } = await connectToDatabase();

    // 🔒 Check if user is already in ANY team
    const existingTeam = await db.collection('teams').findOne({
      'players.discordId': playerId,
    });

    if (existingTeam) {
      return res.status(400).json({
        message: `You are already a member of another team: ${existingTeam.name}`,
      });
    }

    // 📌 Find the target team
    const team = await db.collection('teams').findOne({ teamId });

    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    // 🚫 Check if team is full
    if (team.players.length >= 6) {
      return res.status(400).json({ message: 'Team is full (6 members max)' });
    }

    // ✅ Add player to team
    await db.collection('teams').updateOne(
      { teamId },
      { $push: { players: { discordId: playerId, username: playerUsername } } }
    );

    const updatedTeam = await db.collection('teams').findOne({ teamId });

    // 🔔 Send Discord notification
    const webhookUrl = 'https://discord.com/api/webhooks/1366164281590284288/d2obvog7DcLG1CxEsRIYk5DVDmWwd81-BtTzYLlZuFwE-MWit3KZVm7YGHiEzHMMpB3w';

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `✅ **Player Joined Team!**\n\n**Team:** ${updatedTeam.name}\n**New Player:** ${playerUsername} (ID: ${playerId})`,
      }),
    });

    // 🧾 If team now has exactly 5 players, post team summary
    if (updatedTeam.players.length === 5) {
      const fullTeam = await db.collection('teams').findOne({ teamId });

      const summaryLines = fullTeam.players
        .map((p, i) => `Player${i + 1}: ${p.username} (ID: ${p.discordId})`)
        .join('\n');

      const fullMessage = `🚨 **Team of 5 is Complete!**\n\n` +
        `**Team Name:** ${fullTeam.name}\n` +
        `**Captain:** ${fullTeam.captain.username} (ID: ${fullTeam.captain.discordId})\n` +
        `**Team ID:** ${fullTeam.teamId}\n\n` +
        summaryLines;

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: fullMessage }),
      });
    }

    res.status(200).json({ message: 'Joined team successfully' });

  } catch (error) {
    console.error('Error joining team:', error);
    res.status(500).json({ message: 'Failed to join team' });
  }
}
