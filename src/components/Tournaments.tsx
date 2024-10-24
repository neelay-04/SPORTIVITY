import React from 'react';
import { Calendar, MapPin, Trophy, Disc, Activity, Heart, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  sport: string;
  icon: LucideIcon;
  image: string;
  description: string;
  registrationFee: string;
}

const tournaments: Tournament[] = [
  { 
    id: '1',
    name: 'City Marathon', 
    date: '2024-05-15', 
    location: 'Downtown', 
    sport: 'Running', 
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800',
    description: 'Join the biggest marathon event of the year',
    registrationFee: '$30'
  },
  { 
    id: '2',
    name: 'Summer Basketball Tournament', 
    date: '2024-07-10', 
    location: 'City Arena', 
    sport: 'Basketball', 
    icon: Disc,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    description: '3v3 basketball tournament with amazing prizes',
    registrationFee: '$50 per team'
  },
  { 
    id: '3',
    name: 'Tennis Open', 
    date: '2024-08-20', 
    location: 'Central Courts', 
    sport: 'Tennis', 
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800',
    description: 'Professional tennis tournament open for all skill levels',
    registrationFee: '$40'
  },
  { 
    id: '4',
    name: 'Cricket Championship', 
    date: '2024-09-05', 
    location: 'National Stadium', 
    sport: 'Cricket', 
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    description: 'Annual cricket championship with teams from across the region',
    registrationFee: '$100 per team'
  }
];

const Tournaments: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Upcoming Tournaments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img 
                src={tournament.image} 
                alt={tournament.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {tournament.registrationFee}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <tournament.icon className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{tournament.name}</h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">{tournament.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(tournament.date).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{tournament.location}</span>
                </div>
              </div>
              
              <Link 
                to={`/tournament-registration/${tournament.id}`}
                className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Register Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;