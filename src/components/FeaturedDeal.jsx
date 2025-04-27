export const FeaturedDeal = () => {
    return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/14/f0/4f/aerial-view.jpg?w=900&h=500&s=1" 
                  alt="Special offer destination" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Limited Time Offer
                </div>
                <h3 className="text-2xl font-bold mb-4">Summer Special: Maldives</h3>
                <p className="text-gray-600 mb-6">
                  Experience pure paradise with our exclusive 7-day package including luxury accommodations, water activities, and gourmet dining. Book by June 30th and save 25%!
                </p>
                <div className="flex items-center mb-6">
                  <div className="text-2xl font-bold text-indigo-600">$1,899</div>
                  <div className="ml-2 text-gray-500 line-through">$2,499</div>
                  <div className="ml-3 bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Save $600</div>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                  Book This Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };