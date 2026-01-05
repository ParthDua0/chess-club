import React from 'react';
import { Trophy, Medal, Hash } from 'lucide-react'; // Ensure lucide-react is installed: npm i lucide-react
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const LeaderboardPage = () => {
  // Mock Data - In a real app, fetch this from your backend and ensure it's sorted by winPct
  const leaderboardData = [
    { id: 1, name: "Alex Harmon", rank: 1, winPct: "94.2%", wins: 145, tournaments: 12 },
    { id: 2, name: "Bethany Zhu", rank: 2, winPct: "89.5%", wins: 112, tournaments: 10 },
    { id: 3, name: "Charlie Watts", rank: 3, winPct: "82.1%", wins: 98, tournaments: 15 },
    { id: 4, name: "David Chen", rank: 4, winPct: "76.0%", wins: 85, tournaments: 8 },
    { id: 5, name: "Eva Morales", rank: 5, winPct: "71.8%", wins: 64, tournaments: 11 },
    { id: 6, name: "Frankie Stone", rank: 6, winPct: "68.5%", wins: 52, tournaments: 6 },
    { id: 7, name: "Grace Lee", rank: 7, winPct: "65.0%", wins: 45, tournaments: 9 },
    { id: 8, name: "Henry Ford", rank: 8, winPct: "55.0%", wins: 32, tournaments: 4 },
    { id: 9, name: "Ivy Tan", rank: 9, winPct: "48.0%", wins: 28, tournaments: 7 },
    { id: 10, name: "Jack Ryan", rank: 10, winPct: "42.0%", wins: 15, tournaments: 3 },
  ];

  // Helper function to add icons/colors to top 3 ranks
  const getRankDisplay = (rank) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="font-mono text-gray-500">#{rank}</span>;
  };

  return (
    // Main Container - Dark Theme Background
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F7] p-6 md:p-12">
      {/* NavBar */}
      <Navbar/>
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mt-20 mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          CLUB RANKINGS.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          The top strategists at the university. Rankings are determined primarily by win percentage in official club matches.
        </p>
      </div>

      {/* Leaderboard Container */}
      <div className="max-w-5xl mx-auto">
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-lg border border-gray-800 bg-[#0A0A0A]/50 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-800 bg-white/5">
                <th className="py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium">
                  <span className="flex items-center gap-2"><Hash className="w-4 h-4"/> Rank</span>
                </th>
                <th className="py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium">
                  Player
                </th>
                {/* Primary Metric Highlighted */}
                <th className="py-4 px-6 text-sm uppercase tracking-wider text-white font-bold bg-white/10">
                  Win %
                </th>
                <th className="py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium text-right">
                  Games Won
                </th>
                <th className="py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium text-right hidden md:table-cell">
                  Tournaments
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-800">
              {leaderboardData.map((player) => (
                <tr 
                  key={player.id} 
                  className="hover:bg-white/5 transition-colors duration-200 group"
                >
                  {/* Rank Column */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                     {getRankDisplay(player.rank)}
                    </div>
                  </td>

                  {/* Player Name Column */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <div className="font-bold text-lg group-hover:text-white transition-colors">
                      {player.name}
                    </div>
                  </td>

                  {/* Win % Column - Primary Metric - Monospace Font */}
                  <td className="py-5 px-6 whitespace-nowrap bg-white/5 group-hover:bg-white/10 transition-colors">
                    <span className="font-mono text-xl text-white font-bold tracking-tight">
                      {player.winPct}
                    </span>
                  </td>

                  {/* Games Won Column - Monospace Font */}
                  <td className="py-5 px-6 whitespace-nowrap text-right">
                    <span className="font-mono text-gray-300 text-lg">
                      {player.wins}
                    </span>
                  </td>

                  {/* Tournaments Column - Hidden on small screens - Monospace Font */}
                  <td className="py-5 px-6 whitespace-nowrap text-right hidden md:table-cell">
                    <span className="font-mono text-gray-400">
                      {player.tournaments}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-4 text-right font-mono">
          Last updated: Today at 14:00 IST
        </p>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LeaderboardPage;