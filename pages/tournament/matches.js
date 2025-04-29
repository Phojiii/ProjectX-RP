"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar";

export default function TournamentMatches() {
  const [tournamentUrl, setTournamentUrl] = useState('');
  const [matches, setMatches] = useState([]);

  const handleFetchMatches = async () => {
    try {
      const res = await axios.get(`/api/challonge/getMatches?tournamentUrl=${tournamentUrl}`);
      setMatches(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6 sm:p-10">
      <Navbar />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-8 pt-20">Tournament Matches</h1>
      
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Tournament URL"
          value={tournamentUrl}
          onChange={(e) => setTournamentUrl(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        />
        <button
          onClick={handleFetchMatches}
          className="w-full py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold text-lg text-center"
        >
          Fetch Matches
        </button>
      </div>

      <div className="mt-10 w-full max-w-2xl">
        {matches.length > 0 ? (
          matches.map((match, i) => (
            <div key={i} className="p-5 bg-gray-800 my-4 rounded-lg shadow-md">
              <p><strong>Match ID:</strong> {match.match.id}</p>
              <p><strong>State:</strong> {match.match.state}</p>
              <p><strong>Player 1 ID:</strong> {match.match.player1_id}</p>
              <p><strong>Player 2 ID:</strong> {match.match.player2_id}</p>
            </div>
          ))
        ) : (
          <p className="mt-5 text-center text-lg">No matches yet.</p>
        )}
      </div>
    </div>
  );
}
