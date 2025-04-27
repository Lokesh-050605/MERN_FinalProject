import { useState } from 'react';
import { Check, X, HelpCircle, Sun, Map, Compass, Coffee, Utensils, Camera, Bus, Plane, Hotel } from 'lucide-react';

export const Pricing = ()=> {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [showTooltip, setShowTooltip] = useState(null);
  
  const packages = [
    {
      name: 'Explorer',
      description: 'Perfect for solo travelers looking for budget-friendly options',
      monthly: 199,
      yearly: 2149,
      color: 'blue',
      icon: <Compass className="h-8 w-8 text-blue-500" />,
      features: [
        { name: 'Basic travel planning', included: true },
        { name: 'Economy class flights', included: true },
        { name: 'Standard accommodation', included: true },
        { name: 'Limited guided tours', included: true },
        { name: 'Airport transfers', included: true },
        { name: 'Premium accommodations', included: false },
        { name: 'Personalized itinerary', included: false },
        { name: 'Luxury transportation', included: false },
      ],
    },
    {
      name: 'Voyager',
      description: 'Our most popular package for couples and small families',
      monthly: 349,
      yearly: 3779,
      color: 'indigo',
      icon: <Map className="h-8 w-8 text-green-500" />,
      popular: true,
      features: [
        { name: 'Comprehensive planning', included: true },
        { name: 'Economy plus/Premium economy flights', included: true },
        { name: 'Premium accommodations', included: true },
        { name: 'Multiple guided tours', included: true },
        { name: 'Airport transfers', included: true },
        { name: 'Personalized itinerary', included: true },
        { name: 'Luxury transportation', included: false },
        { name: 'VIP experiences', included: false },
      ],
    },
    {
      name: 'Odyssey',
      description: 'Luxury travel experience with premium services and accommodations',
      monthly: 599,
      yearly: 6469,
      color: 'blue',
      icon: <Sun className="h-8 w-8 text-purple-500" />,
      features: [
        { name: 'Full concierge service', included: true },
        { name: 'Business/First class flights', included: true },
        { name: 'Luxury accommodations', included: true },
        { name: 'Private guided tours', included: true },
        { name: 'Private airport transfers', included: true },
        { name: 'Customized itinerary', included: true },
        { name: 'Luxury transportation', included: true },
        { name: 'VIP experiences', included: true },
      ],
    },
  ];
  
  const toolTips = {
    'Basic travel planning': 'Initial consultation and basic trip outline based on your preferences',
    'Comprehensive planning': 'Detailed planning with multiple options for activities and accommodations',
    'Full concierge service': '24/7 support, dedicated travel agent, and all planning handled for you',
    'VIP experiences': 'Exclusive access to events, private dining, and special activities',
    'Luxury transportation': 'Private cars, upgraded rental vehicles, and premium transportation options',
  };
  
const destinations = [
    {
        name: 'European Escape',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        startingPrice: 1299,
        duration: '10 days',
        locations: ['Paris', 'Rome', 'Barcelona'],
        highlights: ['Eiffel Tower', 'Colosseum', 'Sagrada Familia'],
        icon: <Plane size={18} />
    },
    {
        name: 'Asian Adventure',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/960px-Skyscrapers_of_Shinjuku_2009_January.jpg',
        startingPrice: 1499,
        duration: '12 days',
        locations: ['Tokyo', 'Bangkok', 'Singapore'],
        highlights: ['Mount Fuji', 'Grand Palace', 'Gardens by the Bay'],
        icon: <Camera size={18} />
    },
    {
        name: 'Caribbean Cruise',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        startingPrice: 999,
        duration: '7 days',
        locations: ['Jamaica', 'Bahamas', 'Cayman Islands'],
        highlights: ['Beach resorts', 'Snorkeling', 'Island tours'],
        icon: <Coffee size={18} />
    },
    {
        name: 'American Road Trip',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        startingPrice: 1199,
        duration: '14 days',
        locations: ['Los Angeles', 'Las Vegas', 'Grand Canyon'],
        highlights: ['Hollywood', 'The Strip', 'National Parks'],
        icon: <Bus size={18} />
    }
];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Travel Packages & Pricing</h1>
        <p className="text-xl text-gray-600 mt-2">Choose the perfect package for your travel needs</p>
      </div>
      
      {/* Billing toggle */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-2 rounded-md text-sm font-medium ${
              billingPeriod === 'monthly' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-6 py-2 rounded-md text-sm font-medium ${
              billingPeriod === 'yearly' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700'
            }`}
          >
            Yearly <span className="text-xs text-green-600 ml-1">Save 10%</span>
          </button>
        </div>
      </div>
      
      {/* Pricing packages */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg) => (
          <div 
            key={pkg.name} 
            className={`border ${pkg.popular ? 'border-green-500 ring-2 ring-green-500 ring-opacity-20' : 'border-gray-200'} rounded-xl shadow-sm overflow-hidden relative`}
          >
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-gray-100 p-2 rounded-lg">
                  {pkg.icon}
                </div>
                <h3 className={`text-xl font-bold text-${pkg.color}-600`}>{pkg.name}</h3>
              </div>
              
              <p className="text-gray-600 mt-2 min-h-12">{pkg.description}</p>
              
              <div className="mt-4">
                <span className="text-3xl font-bold">${billingPeriod === 'monthly' ? pkg.monthly : pkg.yearly}</span>
                <span className="text-gray-600">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <button 
                className={`mt-6 w-full py-3 px-4 rounded-lg bg-${pkg.color}-600 hover:bg-${pkg.color}-700 text-white font-medium transition-colors`}
              >
                Choose {pkg.name}
              </button>
              
              <div className="mt-6 space-y-4">
                {pkg.features.map((feature) => (
                  <div key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-2" />
                    )}
                    <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                    {toolTips[feature.name] && (
                      <div className="relative ml-1">
                        <HelpCircle 
                          className="h-4 w-4 text-gray-400 cursor-help" 
                          onMouseEnter={() => setShowTooltip(feature.name)}
                          onMouseLeave={() => setShowTooltip(null)}
                        />
                        {showTooltip === feature.name && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 w-48 z-10">
                            {toolTips[feature.name]}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Destinations */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{destination.name}</h3>
                  {destination.icon}
                </div>
                <p className="text-green-600 font-bold mt-1">From ${destination.startingPrice}</p>
                <p className="text-gray-600 text-sm">{destination.duration}</p>
                <div className="mt-3 flex flex-wrap">
                  {destination.locations.map((location) => (
                    <span key={location} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                      {location}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">Highlights:</p>
                  <div className="flex flex-wrap">
                    {destination.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs text-gray-600 mr-2">• {highlight}</span>
                    ))}
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">What's included in each package?</h3>
            <p className="text-gray-600">Each package includes different levels of service, from basic travel planning to full concierge services. All packages include flight bookings, accommodations, and some level of guided tours.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Can I customize my travel package?</h3>
            <p className="text-gray-600">Yes! All packages can be customized to suit your preferences. Additional services can be added at extra cost. Contact our travel specialists for custom quotes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">How do I pay for my travel package?</h3>
            <p className="text-gray-600">We accept all major credit cards, bank transfers, and payment plans. A deposit of 25% is required at booking, with the balance due 30 days before departure.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">What is your cancellation policy?</h3>
            <p className="text-gray-600">Cancellations made 60+ days before departure receive a full refund minus deposit. 30-59 days: 50% refund. Less than 30 days: no refund. We recommend travel insurance for all bookings.</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to start your adventure?</h2>
        <p className="mb-6">Our travel specialists are ready to help you plan your perfect trip</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            onClick={() => window.location.href = '/contact-us'}
          >
            Contact Us
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-blue-400"
            onClick={() => window.location.href = '/booking'}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}