import { Star, ArrowRight } from 'lucide-react';

export const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm">{destination.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <button className="text-indigo-600 font-medium flex items-center">
          Explore <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};
