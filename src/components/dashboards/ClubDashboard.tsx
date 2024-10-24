import React, { useState } from 'react';
import { Users, Trophy, Calendar, Plus, Bell } from 'lucide-react';
import NewTournamentModal from '../modals/NewTournamentModal';

const ClubDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clubStats = {
    totalMembers: 120,
    activeTournaments: 2,
    upcomingEvents: 3
  };

  const recentApplications = [
    { id: 1, name: "Sarah Johnson", sport: "Football", status: "Pending" },
    { id: 2, name: "Mike Chen", sport: "Cricket", status: "Approved" }
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: "Summer Championship 2024",
      date: "2024-07-15",
      registrations: 24
    },
    {
      id: 2,
      name: "City Cricket League",
      date: "2024-08-20",
      registrations: 16
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Club Dashboard</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={20} />
          <span>New Tournament</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 dark:text-gray-400">Total Members</h3>
            <Users className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">{clubStats.totalMembers}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 dark:text-gray-400">Active Tournaments</h3>
            <Trophy className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">{clubStats.activeTournaments}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 dark:text-gray-400">Upcoming Events</h3>
            <Calendar className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">{clubStats.upcomingEvents}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Applications</h2>
          <div className="space-y-4">
            {recentApplications.map(application => (
              <div key={application.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{application.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{application.sport}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  application.status === 'Approved' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tournament Overview</h2>
          <div className="space-y-4">
            {upcomingTournaments.map(tournament => (
              <div key={tournament.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{tournament.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(tournament.date).toLocaleDateString()}
                  </p>
                </div>
                <span className="text-sm text-blue-500">{tournament.registrations} registrations</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && <NewTournamentModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ClubDashboard;