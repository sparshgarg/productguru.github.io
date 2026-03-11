import React, { useState } from 'react';
import { User } from '../types';
import Leaderboard from './Leaderboard';
import PracticeSession from './PracticeSession';
import PersonalGrowth from './PersonalGrowth';
import { Layout, Trophy, LineChart } from 'lucide-react';

interface DashboardProps {
  user: User;
  onUserUpdate: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onUserUpdate }) => {
  const [activeTab, setActiveTab] = useState<'practice' | 'leaderboard' | 'growth'>('practice');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hello, {user.name}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Let's sharpen your PM skills.</p>
        </div>

        {/* Stats Summary */}
        <div className="flex gap-4">
          <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-gray-800 shadow-sm text-center min-w-[100px]">
            <span className="block text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Avg Score</span>
            <span className="block text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">{user.averageScore}</span>
          </div>
          <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-gray-800 shadow-sm text-center min-w-[100px]">
            <span className="block text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Streak</span>
            <span className="block text-xl font-bold text-orange-500">{user.streak} <span className="text-sm font-normal text-slate-400 dark:text-slate-500">days</span></span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 dark:border-gray-800 mb-6">
        <nav className="-mb-px flex space-x-8">
          {([
            { id: 'practice', label: 'Practice', icon: Layout },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
            { id: 'growth', label: 'Personal Growth', icon: LineChart },
          ] as const).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${
                activeTab === id
                  ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-gray-600'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="min-h-[600px]">
        {activeTab === 'practice' && <PracticeSession onComplete={onUserUpdate} />}
        {activeTab === 'leaderboard' && (
          <div className="max-w-3xl mx-auto">
            <Leaderboard />
          </div>
        )}
        {activeTab === 'growth' && <PersonalGrowth />}
      </div>
    </div>
  );
};

export default Dashboard;
