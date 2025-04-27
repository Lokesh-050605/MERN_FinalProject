import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { PopularDestinations } from '../components/PopularDestinations';
import { Services } from '../components/Services';
import { FeaturedDeal } from '../components/FeaturedDeal';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
  const [currentDestination, setCurrentDestination] = useState(0);
  const destinations = [
    {
      name: "Santorini, Greece",
      description: "Experience the breathtaking views of white-washed buildings against the azure Aegean Sea.",
      image: "https://www.magnificenttravel.com/public/uploads/2025/01/24/6793207c360f9/Santorini-26.jpg",
      rating: 4.9
    },
    {
      name: "Bali, Indonesia",
      description: "Discover lush landscapes, vibrant culture, and pristine beaches in this island paradise.",
      image: "https://www.outlooktravelmag.com/media/bali-1-1679062958.profileImage.2x-1536x884.webp",
      rating: 4.8
    },
    {
      name: "Kyoto, Japan",
      description: "Immerse yourself in ancient temples, traditional gardens, and serene bamboo forests.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbQJOEZZZVGWttPBl7YopdUtFGA77HKO-sg&s",
      rating: 4.7
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header/>
      <Hero />
      <PopularDestinations destinations={destinations} />
      <Services />
      <FeaturedDeal />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}