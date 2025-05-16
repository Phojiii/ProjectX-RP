import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { tournamentUrl, matchId, scoresCsv, winnerId } = req.body;

      const response = await axios.put(`https://api.challonge.com/v1/tournaments/${tournamentUrl}/matches/${matchId}.json`, {
        match: {
          scores_csv: scoresCsv,
          winner_id: winnerId
        }
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
