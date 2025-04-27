import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const testimonials = [
    {
      initials: "JD",
      name: "John Doe",
      content: "\"Our trip to Japan was flawlessly planned by EXPLORE EASE. Every detail was taken care of, from accommodations to local experiences. Will definitely book with them again!\""
    },
    {
      initials: "AS",
      name: "Amanda Smith",
      content: "\"The customized European tour exceeded our expectations. The local guides were knowledgeable and the accommodations were perfect. Thank you for an unforgettable experience!\""
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our happy customers about their experiences traveling with EXPLORE EASE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              initials={testimonial.initials}
              name={testimonial.name}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};