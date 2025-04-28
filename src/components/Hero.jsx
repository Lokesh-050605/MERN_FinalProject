import { Map, Calendar,  SendHorizontal, ChevronsDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export const Hero = () => {
  const [whereTo, setWhereTo] = useState("");
  const [when, setWhen] = useState("");
  const navigate = useNavigate(); // to navigate programmatically

  const handleBooking = () => {
    if (!whereTo || !when) {
      alert("Please fill out both fields!");
      return;
    }
    navigate(`/booking?whereTo=${encodeURIComponent(whereTo)}&when=${encodeURIComponent(when)}`);
  };
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between my-10 px-4">
      
      {/* Content on the right */}
      <div className="relative text-center text-black max-w-4xl w-full md:w-1/2">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">EXPLORE EASE</h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover the world without the hassle. Your journey begins with us.</p>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center bg-gray-100 rounded px-4 py-2">
              <Map className="text-indigo-500 mr-2" size={20} />
              <input 
                type="text" 
                placeholder="Where to?" 
                value={whereTo}
                onChange={(e) => setWhereTo(e.target.value)}
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center bg-gray-100 rounded px-4 py-2">
              <Calendar className="text-indigo-500 mr-2" size={20} />
              <input 
                type="date" 
                placeholder="When?" 
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                className="bg-transparent w-full outline-none"
              />
            </div>
          </div>
          <button 
            onClick={handleBooking}
            className="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white px-6 py-2 rounded flex items-center justify-center"
          >
            <SendHorizontal size={20} className="mr-2" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>

      {/* Image on the left */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img 
          src="https://i.ibb.co/tpMZ7sFR/image-removebg-preview-5.png" 
          alt="Travel destinations" 
          className="w-full h-auto max-w-[400px] md:max-w-full object-contain"
        />
      </div>
    </div>
  );
};
