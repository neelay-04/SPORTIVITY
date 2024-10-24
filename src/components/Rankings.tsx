import React, { useState } from 'react';
import { Trophy, Users, Medal } from 'lucide-react';

interface Ranking {
  rank: number;
  name: string;
  points: number;
  change: number;
}

const clubRankings: Ranking[] = [
  { rank: 1, name: 'City FC', points: 2500, change: 0 },
  { rank: 2, name: 'Hoops Basketball Club', points: 2350, change: 2 },
  { rank: 3, name: 'Ace Tennis Academy', points: 2200, change: -1 },
  { rank: 4, name: 'Strikers Cricket Club', points: 2100, change: 1 },
  { rank: 5, name: 'Iron Fitness Club', points: 2000, change: -2 },
];

const playerRankings: Ranking[] = [
  { rank: 1, name: 'John Smith', points: 1500, change: 0 },
  { rank: 2, name: 'Maria Garcia', points: 1450, change: 1 },
  { rank: 3, name: 'David Chen', points: 1400, change: -1 },
  { rank: 4, name: 'Sarah Johnson', points: 1350, change: 2 },
  { rank: 5, name: 'Michael Brown', points: 1300, change: 0 },
];

const Rankings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clubs' | 'players'>('clubs');

  const renderRankingRow = (ranking: Ranking) => (
    <div key={ranking.name} className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between transform hover:scale-102 transition duration-300">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 w-8">{ranking.rank}</span>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">{ranking.name}</h3>
          <div className="flex items-center space-x-2">
            <Medal className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{ranking.points} points</span>
          </div>
        </div>
      </div>
      <div className={`flex items-center ${ranking.change > 0 ? 'text-green-500' : ranking.change < 0 ? 'text-red-500' : 'text-gray-500'}`}>
        {ranking.change !== 0 && (
          <span className="text-sm">
            {ranking.change > 0 ? `↑${ranking.change}` : `↓${Math.abs(ranking.change)}`}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">Rankings</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('clubs')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition ${
            activeTab === 'clubs'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          <Trophy className="w-5 h-5" />
          <span>Club Rankings</span>
        </button>
        <button
          onClick={() => setActiveTab('players')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition ${
            activeTab === 'players'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Player Rankings</span>
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'clubs'
          ? clubRankings.map(renderRankingRow)
          : playerRankings.map(renderRankingRow)}
      </div>
    </div>
  );
};

export default Rankings;