import axios from 'axios';

export async function getUserRoles(accessToken, guildId) {
  try {
    const res = await axios.get(`https://discord.com/api/v10/users/@me/guilds/${guildId}/member`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.roles || [];
  } catch (error) {
    console.error('Failed to fetch user roles:', error.response?.data || error);
    return [];
  }
}
