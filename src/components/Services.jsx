import { Globe, Calendar, Map } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Worldwide Tours",
      description: "Curated tours to destinations across the globe with expert local guides."
    },
    {
      icon: Calendar,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your preferences and schedule."
    },
    {
      icon: Map,
      title: "Adventure Packages",
      description: "Thrilling experiences for the adventurous traveler seeking new challenges."
    }
  ];

  return (
    <section className="py-16 px-4 bg-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive travel services to make your journey smooth and memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
