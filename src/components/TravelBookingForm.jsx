import { useState, useEffect } from 'react';
import { Calendar, Globe, MapPin, Mail, Phone, User, Package } from 'lucide-react';

export const TravelBookingForm = ({ initialEndDestination = '', initialDepartureDate = '' }) => {
  // Add comprehensive debugging to track props
  console.log("TravelBookingForm rendered with props:", { initialEndDestination, initialDepartureDate });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isPackage: false,
    packageSelection: '',
    startDestination: '',
    endDestination: initialEndDestination || '', // Initialize with prop
    departureDate: initialDepartureDate || '',   // Initialize with prop
    returnDate: '',
    isOneWay: false,
  });

  // Debug current form state
  console.log("Current form state:", formData);

  const [submitted, setSubmitted] = useState(false);
  
  // Sample packages for demonstration with durations in days
  const availablePackages = [
    { id: 'p1', name: 'Paris Getaway', from: 'Any', to: 'Paris, France', duration: 7 },
    { id: 'p2', name: 'Beach Paradise', from: 'Any', to: 'Bali, Indonesia', duration: 10 },
    { id: 'p3', name: 'Mountain Adventure', from: 'Any', to: 'Swiss Alps', duration: 5 },
    { id: 'p4', name: 'Historical Tour', from: 'Any', to: 'Rome, Italy', duration: 6 },
  ];

  // First load data from localStorage
  useEffect(() => {
    console.log("Running localStorage effect");
    const savedData = JSON.parse(localStorage.getItem('travelFormData'));
    const userData = JSON.parse(localStorage.getItem('lastLoginInfo'));
  
    // Log what we're loading from storage
    console.log('Loading from localStorage:', { savedData, userData });
  
    // Load data if user is logged in
    if (userData && localStorage.getItem('isLogin') === 'true') {
      setFormData((prev) => {
        const userDataState = {
          ...prev,
          name: localStorage.getItem('name') || prev.name,      
          email: localStorage.getItem('email') || prev.email,    
          startDestination: localStorage.getItem('city') || prev.startDestination, 
        };
        console.log("After applying user data:", userDataState);
        return userDataState;
      });
    }
  
    // Load previously saved form data if available
    if (savedData) {
      setFormData((prev) => {
        const savedFormState = {
          ...prev,
          ...savedData,
        };
        console.log("After applying saved form data:", savedFormState);
        return savedFormState;
      });
    }
  }, []);

  // Then apply props with priority (after localStorage data)
  useEffect(() => {
    console.log("Running props effect with:", { initialEndDestination, initialDepartureDate });
    
    if (initialEndDestination || initialDepartureDate) {
      setFormData(prev => {
        const propsState = {
          ...prev,
          endDestination: initialEndDestination || prev.endDestination,
          departureDate: initialDepartureDate || prev.departureDate,
        };
        console.log("After applying props:", propsState);
        return propsState;
      });
      
      
    }
  }, [initialEndDestination, initialDepartureDate]);
  
  // Function to calculate return date based on departure date and duration
  const calculateReturnDate = (departureDate, durationDays) => {
    if (!departureDate || !durationDays) return '';
    
    const departure = new Date(departureDate);
    const returnDate = new Date(departure);
    returnDate.setDate(departure.getDate() + durationDays);
    
    // Format as YYYY-MM-DD for input[type="date"]
    return returnDate.toISOString().split('T')[0];
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };
    
    // Handle special cases
    if (name === 'departureDate' && formData.isPackage && formData.packageSelection) {
      // Auto-calculate return date based on package duration
      const selectedPackage = availablePackages.find(pkg => pkg.id === formData.packageSelection);
      if (selectedPackage) {
        updatedFormData.returnDate = calculateReturnDate(value, selectedPackage.duration);
      }
    }
    
    // Clear return date if one-way is checked
    if (name === 'isOneWay' && checked) {
      updatedFormData.returnDate = '';
    }
    
    console.log(`Field "${name}" changed, updating form state:`, updatedFormData);
    setFormData(updatedFormData);
    localStorage.setItem('travelFormData', JSON.stringify(updatedFormData)); 
  };

  const handlePackageSelect = (e) => {
    const packageId = e.target.value;
    const selectedPackage = availablePackages.find(pkg => pkg.id === packageId);
    
    const updatedData = {
      ...formData,
      packageSelection: packageId,
      endDestination: selectedPackage ? selectedPackage.to : formData.endDestination
    };
    
    // Auto-calculate return date if departure date is set
    if (formData.departureDate && selectedPackage) {
      updatedData.returnDate = calculateReturnDate(formData.departureDate, selectedPackage.duration);
    }
    
    console.log("Package selected, updating form state:", updatedData);
    setFormData(updatedData);
    localStorage.setItem('travelFormData', JSON.stringify(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    setSubmitted(true);
    localStorage.removeItem('travelFormData'); 
  };

  const resetForm = () => {
    const resetState = {
      name: '',
      email: '',
      phone: '',
      isPackage: false,
      packageSelection: '',
      startDestination: '',
      endDestination: initialEndDestination || '',  // Keep the prop value on reset
      departureDate: initialDepartureDate || '',    // Keep the prop value on reset
      returnDate: '',
      isOneWay: false,
    };
    
    console.log("Resetting form to:", resetState);
    setFormData(resetState);
    setSubmitted(false);
    localStorage.removeItem('travelFormData'); 
  };

  // Rest of the component remains the same
  // ...

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
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="isPackage"
                name="isPackage"
                checked={formData.isPackage}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <label className="text-gray-700 flex items-center" htmlFor="isPackage">
                <Package className="mr-2" size={16} />
                Book a Travel Package
              </label>
            </div>
            
            {formData.isPackage ? (
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="packageSelection">
                  Select a Package
                </label>
                <select
                  id="packageSelection"
                  name="packageSelection"
                  value={formData.packageSelection}
                  onChange={handlePackageSelect}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required={formData.isPackage}
                >
                  <option value="">-- Select a Package --</option>
                  {availablePackages.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - {pkg.duration} days - To: {pkg.to}
                    </option>
                  ))}
                </select>
                
                {formData.packageSelection && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-md">
                    <h3 className="font-medium text-blue-800 mb-2">Package Details</h3>
                    <p><span className="font-medium">Package:</span> {availablePackages.find(pkg => pkg.id === formData.packageSelection)?.name}</p>
                    <p><span className="font-medium">Destination:</span> {availablePackages.find(pkg => pkg.id === formData.packageSelection)?.to}</p>
                    <p><span className="font-medium">Duration:</span> {availablePackages.find(pkg => pkg.id === formData.packageSelection)?.duration} days</p>
                  </div>
                )}
              </div>
            ) : (
              <>
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
                    required={!formData.isPackage}
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
                    required={!formData.isPackage}
                  />
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="isOneWay"
                    name="isOneWay"
                    checked={formData.isOneWay}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4"
                    disabled={formData.isPackage}
                  />
                  <label className="text-gray-700" htmlFor="isOneWay">
                    One-way trip
                  </label>
                </div>
              </>
            )}
            
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
              
              {!formData.isOneWay && (
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="returnDate">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      Return Date {formData.isPackage ? "" : "(Optional)"}
                    </div>
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    readOnly={formData.isPackage}
                    required={formData.isPackage}
                  />
                  {formData.isPackage && formData.packageSelection && (
                    <p className="text-xs text-gray-500 mt-1">
                      Auto-calculated based on package duration
                    </p>
                  )}
                </div>
              )}
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