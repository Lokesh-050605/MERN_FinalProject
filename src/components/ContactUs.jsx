import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export const ContactUs=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setSubmitted(false);
  };
  
  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h2>
          <p className="mb-6">Thank you for contacting us, {formData.name}. Our team will get back to you within 24 hours.</p>
          <button 
            onClick={resetForm}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">Contact Us</h1>
      <p className="text-gray-600 text-center mb-10">We're here to help plan your perfect journey</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Our Location</h4>
                <p className="text-gray-600">123 Travel Lane, Adventure City, AC 12345</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Email Us</h4>
                <p className="text-gray-600">info@dreamtravel.com</p>
                <p className="text-gray-600">bookings@dreamtravel.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">+1 (800) TRAVELS</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Business Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <div>Monday - Friday:</div>
              <div>9:00 AM - 6:00 PM</div>
              <div>Saturday:</div>
              <div>10:00 AM - 4:00 PM</div>
              <div>Sunday:</div>
              <div>Closed</div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <MessageSquare className="mr-2" size={24} />
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Send className="mr-2" size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-12 bg-white p-1 rounded-lg shadow-md">
  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
    <div className="text-center w-full h-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.366634572679!2d80.1370932747882!3d12.948375387364852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1745820594577!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        className="rounded-lg border-0"
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</div>

    </div>
  );
}