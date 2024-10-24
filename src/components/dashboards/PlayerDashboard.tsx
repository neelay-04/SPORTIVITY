import React from 'react';
import { Calendar, Trophy, Bell, User, Clock } from 'lucide-react';

const PlayerDashboard: React.FC = () => {
  const upcomingTournaments = [
    {
      id: 1,
      name: "Summer Championship 2024",
      date: "2024-07-15",
      sport: "Football",
      status: "Registered"
    },
    {
      id: 2,
      name: "City Cricket League",
      date: "2024-08-20",
      sport: "Cricket",
      status: "Registration Open"
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "Your next tournament match is in 2 days",
      time: "2 hours ago"
    },
    {
      id: 2,
      message: "New tournament registration is open",
      time: "1 day ago"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Player Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Profile Overview</h2>
            <User className="text-blue-500" />
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-300">John Doe</p>
            <p className="text-gray-600 dark:text-gray-300">Football, Cricket</p>
            <p className="text-gray-600 dark:text-gray-300">Joined: Jan 2024</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Upcoming Tournaments</h2>
            <Trophy className="text-blue-500" />
          </div>
          <div className="space-y-4">
            {upcomingTournaments.map(tournament => (
              <div key={tournament.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{tournament.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tournament.sport}</p>
                </div>
                <span className="text-sm text-blue-500">{tournament.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Notifications</h2>
            <Bell className="text-blue-500" />
          </div>
          <div className="space-y-4">
            {notifications.map(notification => (
              <div key={notification.id} className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0">
                <p className="text-gray-800 dark:text-gray-200">{notification.message}</p>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {notification.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;