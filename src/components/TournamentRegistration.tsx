import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Trophy, Users, Info } from 'lucide-react';

const TournamentRegistration: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Tournament Registration</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Trophy className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Summer Championship 2024</h2>
          </div>
          
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>July 15-20, 2024</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>City Sports Complex</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>32 teams maximum</span>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Team/Player Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Registration fee: $50 per team. Payment details will be sent to your email after registration.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default TournamentRegistration;