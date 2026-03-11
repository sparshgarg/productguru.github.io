import React, { useEffect, useState } from 'react';
import { LeaderboardEntry } from '../types';
import { getLeaderboard } from '../services/mockBackend';
import { Trophy, Flame, Medal } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    setLeaders(getLeaderboard());
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Medal className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-slate-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-700" />;
      default: return <span className="text-slate-500 dark:text-slate-400 font-semibold w-6 text-center">{rank}</span>;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-slate-200 dark:border-gray-800 overflow-hidden">
      <div className="bg-slate-50 dark:bg-gray-800 px-6 py-4 border-b border-slate-200 dark:border-gray-700 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-cyan-500" />
          Global Leaderboard
        </h3>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-gray-700 px-2 py-1 rounded-full">Top 50</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-gray-800">
          <thead className="bg-slate-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Rank</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">User</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Avg. Score</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Streak</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-slate-200 dark:divide-gray-800">
            {leaders.map((entry) => (
              <tr key={entry.id} className="hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-8 h-8">
                    {getRankIcon(entry.rank)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs mr-3">
                      {entry.name.charAt(0)}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{entry.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-24 bg-slate-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2.5 rounded-full" style={{ width: `${entry.averageScore}%` }}></div>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-bold">{entry.averageScore}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Flame className="w-4 h-4 text-orange-500 mr-1" />
                    {entry.streak} days
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
