// pages/api/getRoles.js

export default async function handler(req, res) {
    const { userId } = req.query;
  
    const guildId = process.env.DISCORD_GUILD_ID;
    const botToken = process.env.DISCORD_BOT_TOKEN;
    
    console.log(guildId);
    console.log(botToken);
    try {
      const response = await fetch(`https://discord.com/api/guilds/${guildId}/members/${userId}`, {
        headers: {
          Authorization: `Bot ${botToken}`,
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch user roles' });
      }
  
      const member = await response.json();
      return res.status(200).json({ roles: member.roles });
    } catch (error) {
      console.error('Error fetching roles:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  