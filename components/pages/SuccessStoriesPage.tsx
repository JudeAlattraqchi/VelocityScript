import React from 'react';

const testimonials = [
  {
    quote: "Velocity Script transformed our customer support. Our response times are down 80%, and customer satisfaction has never been higher. A true game-changer.",
    name: "Jane Doe",
    position: "COO",
    company: "Innovate Inc.",
    imageUrl: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "The AI voiceover quality is astonishingly human-like. We've localized our entire e-learning platform into 5 languages in a month, a task that would've taken a year.",
    name: "John Smith",
    position: "Head of Content",
    company: "Global Learning Co.",
    imageUrl: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Automating our audiobook production was seamless. The AI narrator captures the nuances of storytelling perfectly, and our output has skyrocketed.",
    name: "Emily White",
    position: "Production Manager",
    company: "Digital Reads",
    imageUrl: "https://picsum.photos/100/100?random=3"
  },
  {
    quote: "Their custom voice solution gave our in-car assistant a unique personality that aligns with our brand. The integration was flawless and the user feedback is fantastic.",
    name: "Michael Brown",
    position: "Lead UX Designer",
    company: "NextGen Auto",
    imageUrl: "https://picsum.photos/100/100?random=4"
  },
  {
    quote: "The workflow automation saved us thousands of hours. Our team is now free to focus on strategic initiatives instead of repetitive tasks. The ROI was immediate.",
    name: "Jessica Green",
    position: "Operations Director",
    company: "Solutions Corp",
    imageUrl: "https://picsum.photos/100/100?random=5"
  },
  {
    quote: "We were skeptical about AI agents, but Velocity Script's solution handles complex customer queries with ease. It's like having a super-efficient extension of our team.",
    name: "David Wilson",
    position: "VP of Customer Success",
    company: "Enterprise Dynamics",
    imageUrl: "https://picsum.photos/100/100?random=6"
  }
];

const SuccessStoriesPage: React.FC = () => {
  return (
    <div className="py-28 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Success Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            See how industry leaders are leveraging Velocity Script to revolutionize their operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-left flex flex-col transition-transform duration-300 hover:-translate-y-2">
                    <p className="text-md italic text-gray-600 flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-6 flex items-center">
                        <img className="w-12 h-12 rounded-full object-cover" src={testimonial.imageUrl} alt={testimonial.name} />
                        <div className="ml-4">
                        <p className="font-bold text-teal-600">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
