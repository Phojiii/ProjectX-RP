"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar";

export default function RegisterParticipant() {
  const [tournamentUrl, setTournamentUrl] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/challonge/addParticipant', { tournamentUrl, name });
      setMessage('Participant added successfully!');
    } catch (err) {
      setMessage('Failed to register participant');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6 sm:p-10">
      <Navbar />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-500 mb-8 mt-20">Register Participant</h1>
      
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            placeholder="Tournament URL"
            value={tournamentUrl}
            onChange={(e) => setTournamentUrl(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            placeholder="Player / Team Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full py-4 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold text-lg text-center"
          >
            {loading ? 'Registering...' : 'Register'}
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
