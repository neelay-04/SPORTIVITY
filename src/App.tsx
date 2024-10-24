import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Activity, Moon, Sun, LogIn } from 'lucide-react';
import Home from './components/Home';
import Clubs from './components/Clubs';
import Tournaments from './components/Tournaments';
import LiveScores from './components/LiveScores';
import Rankings from './components/Rankings';
import Login from './components/auth/Login';
import PlayerDashboard from './components/dashboards/PlayerDashboard';
import ClubDashboard from './components/dashboards/ClubDashboard';
import TournamentRegistration from './components/TournamentRegistration';
import ClubRegistration from './components/ClubRegistration';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <nav className="bg-blue-600 dark:bg-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2 text-xl font-bold hover:text-blue-100 transition">
                <Activity size={24} />
                <span>Sportivity</span>
              </Link>
              <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-4">
                  <Link to="/clubs" className="hover:text-blue-200 transition">Clubs</Link>
                  <Link to="/tournaments" className="hover:text-blue-200 transition">Tournaments</Link>
                  <Link to="/live-scores" className="hover:text-blue-200 transition">Live Scores</Link>
                  <Link to="/rankings" className="hover:text-blue-200 transition">Rankings</Link>
                </div>
                <Link to="/login" className="flex items-center space-x-1 hover:text-blue-200 transition">
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/live-scores" element={<LiveScores />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/player-dashboard" element={<PlayerDashboard />} />
            <Route path="/club-dashboard" element={<ClubDashboard />} />
            <Route path="/tournament-registration/:id" element={<TournamentRegistration />} />
            <Route path="/club-registration/:id" element={<ClubRegistration />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Activity size={24} />
              <span className="text-xl font-bold">Sportivity</span>
            </div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Sportivity. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;