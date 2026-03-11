import React from 'react';
import { User } from '../types';
import { LogOut, Award, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  darkMode: boolean;
  onToggleDark: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, darkMode, onToggleDark }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2.5">
              <Logo className="w-9 h-9" />
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                ProductGuru
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleDark}
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user && (
              <>
                <div className="hidden md:flex flex-col items-end mr-1">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{user.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Award className="w-3 h-3 text-orange-500" />
                    Streak: {user.streak}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
