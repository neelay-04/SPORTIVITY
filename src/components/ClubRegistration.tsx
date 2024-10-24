import React from 'react';
import { useParams } from 'react-router-dom';
import { Users, Mail, Phone, Info } from 'lucide-react';

const ClubRegistration: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Club Membership Registration</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">City FC</h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join one of the most prestigious football clubs in the city. Get access to professional training, 
            facilities, and participate in local tournaments.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 absolute ml-3" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-400 absolute ml-3" />
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Experience Level
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Monthly membership fee: $30. Includes access to training facilities, coaching sessions, and club events.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubRegistration;