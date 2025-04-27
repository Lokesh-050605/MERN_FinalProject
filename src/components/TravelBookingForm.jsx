import { useState, useEffect } from 'react';
import { Calendar, Globe, MapPin, Mail, Phone, User } from 'lucide-react';

export const TravelBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDestination: '',
    endDestination: '',
    departureDate: '',
    returnDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('travelFormData'));
    const userData = JSON.parse(localStorage.getItem('lastLoginInfo'));
  
    // Log user data for debugging
    console.log('userData', userData);
  
    // Load data if user is logged in
    if (userData && localStorage.getItem('isLogin') === 'true') {
      setFormData((prev) => ({
        ...prev,
        name: localStorage.getItem('name') || prev.name,      // Load name from localStorage if available
        email: localStorage.getItem('email') || prev.email,    // Load email from localStorage if available
        startDestination: localStorage.getItem('city') || prev.city, 
      }));
    }
  
    // Load previously saved form data if available
    if (savedData) {
      setFormData((prev) => ({
        ...prev,
        ...savedData,  // Merge saved form data (if any) into form state
      }));
    }
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);
    localStorage.setItem('travelFormData', JSON.stringify(updatedFormData)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    setSubmitted(true);
    localStorage.removeItem('travelFormData'); 
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      startDestination: '',
      endDestination: '',
      departureDate: '',
      returnDate: '',
    });
    setSubmitted(false);
    localStorage.removeItem('travelFormData'); 
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
          <p className="mb-6">Thank you for booking with us, {formData.name}. We've sent the details to {formData.email}.</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Trip Details:</h3>
            <p><span className="font-medium">From:</span> {formData.startDestination}</p>
            <p><span className="font-medium">To:</span> {formData.endDestination}</p>
            <p><span className="font-medium">Departure:</span> {formData.departureDate}</p>
            {formData.returnDate && <p><span className="font-medium">Return:</span> {formData.returnDate}</p>}
          </div>
          <button 
            onClick={resetForm}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Book Another Trip
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">Book Your Dream Vacation</h1>
        <p className="text-gray-600">Fill out the form below to start your journey</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-indigo-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <User className="mr-2" size={20} />
            Personal Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                <div className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  Email Address
                </div>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">
                <div className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  Mobile Number
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Globe className="mr-2" size={20} />
            Trip Details
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="startDestination">
                <div className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Starting From
                </div>
              </label>
              <input
                type="text"
                id="startDestination"
                name="startDestination"
                value={formData.startDestination}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="endDestination">
                <div className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Destination
                </div>
              </label>
              <input
                type="text"
                id="endDestination"
                name="endDestination"
                value={formData.endDestination}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="departureDate">
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    Departure Date
                  </div>
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="returnDate">
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    Return Date (Optional)
                  </div>
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};
