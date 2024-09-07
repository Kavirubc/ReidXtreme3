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
      const response = await axios.get('/api/final');
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

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <p className="text-red-500">{error}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchLeaderboard}
      >
        Retry
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Live Leaderboard</h1>
      {leaderboard.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Rank</th>
              <th className="border p-2">Team</th>
              <th className="border p-2">Total Score</th>
              <th className="border p-2">Total Time</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry) => (
              <tr key={entry.team} className="hover:bg-gray-100">
                <td className="border p-2">{entry.rank}</td>
                <td className="border p-2">{entry.team}</td>
                <td className="border p-2">{entry.totalScore.toFixed(2)}</td>
                <td className="border p-2">{formatTime(entry.totalTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
