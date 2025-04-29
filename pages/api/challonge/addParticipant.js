import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { tournamentUrl, name } = req.body;

      const response = await axios.post(`https://api.challonge.com/v1/tournaments/${tournamentUrl}/participants.json`, {
        participant: { name }
      }, {
        auth: {
          username: process.env.CHALLONGE_API_KEY,
          password: 'X'
        }
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.response?.data || error.message });
    }
  } else {
    res.status(405).end();
  }
}
