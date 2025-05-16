"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar";

export default function CreateTournament() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/challonge/createTournament', { name, url });
      setMessage('Tournament created successfully!');
    } catch (err) {
      setMessage('Failed to create tournament');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6 sm:p-10">
      <Navbar />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-500 mb-8">Create Tournament</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Tournament Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Tournament URL (no spaces)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold text-lg text-center"
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
      {message && (
        <p className={`mt-6 text-lg font-semibold ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
