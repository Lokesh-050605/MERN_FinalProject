export const Newsletter = () => {
    return (
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Travel Inspiration</h2>
          <p className="mb-6">Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    );
  };
  