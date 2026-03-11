import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { User } from './types';
import { getCurrentUser, logoutUser } from './services/mockBackend';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem('darkMode', String(!prev));
      return !prev;
    });
  };

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  const refreshUser = () => {
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
  };

  if (loading) {
    return (
      <div className={`h-screen w-screen flex items-center justify-center ${darkMode ? 'bg-gray-950' : 'bg-slate-50'}`}>
        <div className="animate-pulse bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold text-lg">
          Loading Product Guru...
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
        <Navbar user={user} onLogout={handleLogout} darkMode={darkMode} onToggleDark={toggleDarkMode} />
        <main>
          {!user ? (
            <Auth onLogin={handleLogin} />
          ) : (
            <Dashboard user={user} onUserUpdate={refreshUser} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
