import { Star } from 'lucide-react';

export const TestimonialCard = ({ initials, name, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
          <span className="font-semibold text-indigo-600">{initials}</span>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};
