'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface LeaderboardEntry {
  rank: number;
  team: string;
  totalScore: number;
  totalTime: number;
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await axios.get(`/api/final?t=${timestamp}`);
      console.log('Leaderboard data:', response.data);
      setLeaderboard(response.data);
      setLoading(false);
      setError(null);
    } catch (err: unknown) {
      console.error('Error fetching leaderboard:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch leaderboard');
      setLoading(false);
    }
  };

  const formatTime = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().substr(11, 8); // Returns time in HH:MM:SS format
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-black">
      <p className="text-xl font-semibold text-gray-300">Loading...</p>
    </div>
  );

  if (error) return (
    <div className="container mx-auto p-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Error</h1>
      <p className="text-red-500 text-center">{error}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={fetchLeaderboard}
        >
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 bg-black text-white font-des tracking-wide">
      <h1 className="text-center font-poppins text-3xl lg:text-5xl font-bold lg:font-semibold mb-8">Live Leaderboard</h1>
      {leaderboard.length === 0 ? (
        <p className="text-center text-xl text-gray-300">No leaderboard data available.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-700">
          <table className="w-full border-collapse bg-black">
            <thead className="bg-tertiary text-white">
              <tr>
                <th className="border border-gray-700 p-3 text-sm font-semibold uppercase tracking-wider">Rank</th>
                <th className="border border-gray-700 p-3 text-sm font-semibold uppercase tracking-wider">Team</th>
                <th className="border border-gray-700 p-3 text-sm font-semibold uppercase tracking-wider">Total Score</th>
                <th className="border border-gray-700 p-3 text-sm font-semibold uppercase tracking-wider">Total Time</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry.team} className={`hover:bg-tertiary transition duration-300 ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-black'}`}>
                  <td className="border border-gray-700 p-3 text-sm text-gray-300">{entry.rank}</td>
                  <td className="border border-gray-700 p-3 text-sm text-gray-300">{entry.team}</td>
                  <td className="border border-gray-700 p-3 text-sm text-gray-300">{entry.totalScore.toFixed(2)}</td>
                  <td className="border border-gray-700 p-3 text-sm text-gray-300">{formatTime(entry.totalTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
