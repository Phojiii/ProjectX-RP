"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar";

export default function UpdateMatchScore() {
  const [tournamentUrl, setTournamentUrl] = useState('');
  const [matchId, setMatchId] = useState('');
  const [scoresCsv, setScoresCsv] = useState('');
  const [winnerId, setWinnerId] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/challonge/updateScore', { tournamentUrl, matchId, scoresCsv, winnerId });
      setMessage('Score updated successfully!');
    } catch (err) {
      setMessage('Failed to update score');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6 sm:p-10">
      <Navbar />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-purple-500 mb-8 pt-20">Update Match Score</h1>
      
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleUpdate} className="space-y-6">
          <input
            type="text"
            placeholder="Tournament URL"
            value={tournamentUrl}
            onChange={(e) => setTournamentUrl(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Match ID"
            value={matchId}
            onChange={(e) => setMatchId(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Scores CSV (e.g. 13-9,11-13,13-11)"
            value={scoresCsv}
            onChange={(e) => setScoresCsv(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Winner ID"
            value={winnerId}
            onChange={(e) => setWinnerId(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full py-4 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold text-lg text-center"
          >
            Update Score
          </button>
        </form>
      </div>

      {message && (
        <p className={`mt-6 text-lg font-semibold ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
