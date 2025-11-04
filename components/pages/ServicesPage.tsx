import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Voiceovers & Dubbing",
      description: "Bring your videos, ads, and e-learning content to life with expressive, natural-sounding AI voices. Effortlessly dub your content into multiple languages while preserving the original tone and emotion.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.192 10.808A4.5 4.5 0 0117.5 12a4.5 4.5 0 01-2.308 1.192m-1.414-2.384a4.5 4.5 0 00-1.414-1.414M12 18.75a6.75 6.75 0 006.75-6.75a6.75 6.75 0 00-6.75-6.75a6.75 6.75 0 00-6.75 6.75a6.75 6.75 0 006.75 6.75z" />,
    },
    {
      title: "Podcast & Audiobook Production",
      description: "Automate the production of high-quality audio content. Our AI voices deliver clear, engaging narration for podcasts and audiobooks, drastically reducing recording time and production costs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m12 0v-1.5a6 6 0 00-6-6v0a6 6 0 00-6 6v1.5" />,
    },
    {
      title: "Virtual Assistants & IVR",
      description: "Enhance your customer experience with intelligent, conversational virtual assistants and IVR systems. Guide your customers smoothly 24/7 with a calm, clear, and trustworthy voice.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
     {
      title: "Custom AI Voice Creation",
      description: "Create a unique and exclusive AI voice for your brand. We can clone a voice from provided recordings to generate a one-of-a-kind audio identity that's indistinguishable from a human.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v.75c0 .414.336.75.75.75h.75" />,
    },
  ];

  const benefits = [
    {
        name: 'Unmatched Realism',
        description: 'Our voices are rich with human-like intonation and emotion, making them perfect for any application.',
    },
    {
        name: 'Infinite Scalability',
        description: 'Produce countless hours of high-quality audio content in a fraction of the time it takes for manual recording.',
    },
    {
        name: 'Cost-Effective',
        description: 'Significantly reduce expenses related to voice actors, studio rentals, and post-production.',
    },
    {
        name: 'Brand Consistency',
        description: 'Maintain a single, consistent voice across all your marketing channels and customer touchpoints.',
    }
  ]

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">AI Voice Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Generating lifelike, scalable, and cost-effective voice solutions for any application.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-teal-500/20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors items-center">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-lime-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {service.icon}
                    </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal-600 dark:text-lime-400 mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Benefits Section */}
        <div className="mt-24 md:mt-32">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose Velocity Script?</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">The advantages of our next-generation AI voice platform.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                    <div key={benefit.name} className="p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-teal-500/20 text-center">
                        <h3 className="text-xl font-bold text-teal-600 dark:text-lime-400">{benefit.name}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;