import React from 'react';
import { Trophy, Users, Calendar, Activity, Disc, Heart, Dumbbell, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SportIconProps {
  name: string;
  icon: React.ReactNode;
}

interface FeaturedContentProps {
  type: 'player' | 'tournament';
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const SportIcon: React.FC<SportIconProps> = ({ name, icon }) => (
  <div className="text-center">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-4 mb-2 mx-auto w-16 h-16 flex items-center justify-center transform hover:rotate-12 transition duration-300">
      {icon}
    </div>
    <span className="text-sm font-medium dark:text-gray-300">{name}</span>
  </div>
);

const FeaturedContent: React.FC<FeaturedContentProps> = ({ type, title, subtitle, image, link }) => (
  <Link to={link} className="block">
    <div className="relative overflow-hidden rounded-lg group">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <div className="flex items-center mb-2">
          {type === 'player' ? (
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
          ) : (
            <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
          )}
          <span className="text-white font-semibold">{type === 'player' ? 'Star Player' : 'Featured Tournament'}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-200">{subtitle}</p>
      </div>
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">Welcome to Sportivity</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your ultimate platform for sports clubs, tournaments, and live scores
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeaturedContent
          type="player"
          title="John Smith"
          subtitle="Rising Star in Tennis"
          image="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&q=80&w=800"
          link="/players/john-smith"
        />
        <FeaturedContent
          type="tournament"
          title="Summer Championship 2024"
          subtitle="The biggest tournament of the year"
          image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
          link="/tournaments/summer-championship"
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Users className="w-12 h-12 text-blue-500" />}
          title="Clubs"
          description="Join or create sports clubs in your area"
        />
        <FeatureCard
          icon={<Calendar className="w-12 h-12 text-green-500" />}
          title="Tournaments"
          description="Participate in exciting tournaments"
        />
        <FeatureCard
          icon={<Activity className="w-12 h-12 text-red-500" />}
          title="Live Scores"
          description="Stay updated with real-time scores"
        />
        <FeatureCard
          icon={<Award className="w-12 h-12 text-yellow-500" />}
          title="Rankings"
          description="Track club and player rankings"
        />
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Featured Sports</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8">
          <SportIcon name="Football" icon={<Trophy className="w-8 h-8" />} />
          <SportIcon name="Basketball" icon={<Disc className="w-8 h-8" />} />
          <SportIcon name="Tennis" icon={<Activity className="w-8 h-8" />} />
          <SportIcon name="Cricket" icon={<Trophy className="w-8 h-8" />} />
          <SportIcon name="Running" icon={<Activity className="w-8 h-8" />} />
          <SportIcon name="Cardio" icon={<Heart className="w-8 h-8" />} />
          <SportIcon name="Fitness" icon={<Dumbbell className="w-8 h-8" />} />
        </div>
      </section>
    </div>
  );
};

export default Home;