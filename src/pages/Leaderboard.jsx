import React from 'react';
import { Trophy, Medal, Hash } from 'lucide-react'; // Ensure lucide-react is installed: npm i lucide-react
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const LeaderboardPage = () => {
  // Mock Data - In a real app, fetch this from your backend and ensure it's sorted by winPct
  const leaderboardData = [
  { id: 1, name: "Pratham", rank: 1, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 2, name: "Akash", rank: 2, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 3, name: "Nikunj", rank: 3, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 4, name: "Aditya Chauhan", rank: 4, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 5, name: "Aditya Maurya", rank: 5, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 6, name: "Aditi", rank: 6, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 7, name: "Indrani", rank: 7, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 8, name: "Shivendra", rank: 8, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 9, name: "Aneeka", rank: 9, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 10, name: "Shambhavi", rank: 10, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 11, name: "Dushyant", rank: 11, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 12, name: "Sarthak", rank: 12, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 13, name: "Ronak", rank: 13, winPct: "0%", wins: 0, tournaments: 6 },
  { id: 14, name: "Saksham", rank: 14, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 15, name: "Shivendra Mohan", rank: 15, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 16, name: "Ravi", rank: 16, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 17, name: "Vaibhav", rank: 17, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 18, name: "Mohd Ayan", rank: 18, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 19, name: "Aman", rank: 19, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 20, name: "Ayaan", rank: 20, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 21, name: "Vipul", rank: 21, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 22, name: "Abhinav", rank: 22, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 23, name: "Aayush", rank: 23, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 24, name: "Rishabh", rank: 24, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 25, name: "Krishna", rank: 25, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 26, name: "Mohd Saad", rank: 26, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 27, name: "Himanshu", rank: 27, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 28, name: "Parth", rank: 28, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 29, name: "Anant", rank: 29, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 30, name: "Arnav", rank: 30, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 31, name: "Dev Pratap", rank: 31, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 32, name: "Devansh", rank: 32, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 33, name: "Harsh", rank: 33, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 34, name: "Prarabdh", rank: 34, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 35, name: "Piyush", rank: 35, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 36, name: "Ajil", rank: 36, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 37, name: "Shivam", rank: 37, winPct: "0%", wins: 0, tournaments: 0 },
  { id: 38, name: "Utkarsh", rank: 38, winPct: "0%", wins: 0, tournaments: 0 }
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
          Last updated: Today at 18:00 IST
        </p>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LeaderboardPage;