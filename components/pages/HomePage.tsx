import React, { useState, useRef } from 'react';
import { Page } from '../../types';

interface HomePageProps {
  navigate: (page: Page, anchor?: string) => void;
}

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

const coreOfferings = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M9 6h6M9 18h6" /></svg>,
    title: "AI Voice Agents",
    description: "Custom-trained AI agents that sound human and handle complex conversations.",
    gradient: "from-cyan-50 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50",
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: "Appointment Booking",
    description: "Automated scheduling that integrates with your calendar and CRM systems.",
    gradient: "from-green-50 to-lime-100 dark:from-green-900/50 dark:to-lime-900/50",
    iconBg: "bg-gradient-to-br from-green-400 to-lime-500",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    title: "Lead Qualification",
    description: "Smart lead scoring and qualification through natural conversations.",
    gradient: "from-purple-50 to-violet-100 dark:from-purple-900/50 dark:to-violet-900/50",
    iconBg: "bg-gradient-to-br from-purple-400 to-violet-500",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Data & Analytics",
    description: "Gain insights from conversations with powerful analytics and reporting tools.",
    gradient: "from-orange-50 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50",
    iconBg: "bg-gradient-to-br from-orange-400 to-amber-500",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    title: "24/7 Support",
    description: "Provide round-the-clock support to your customers without scaling your team.",
    gradient: "from-blue-50 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50",
    iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "CRM Integration",
    description: "Seamlessly connect with your existing CRM to sync data and automate workflows.",
    gradient: "from-rose-50 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50",
    iconBg: "bg-gradient-to-br from-rose-400 to-pink-500",
  },
];

const caseStudies = [
    {
      id: 'luxe-walk',
      initials: 'LW',
      company: 'LUXE | WALK',
      description: 'Leads went cold after submitting the online form. We launched an AI Voice Agent that called every lead within seconds.',
      result: {
        value: '150+ Extra Bookings Per Month',
        subValue: '3x more leads',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
        gradient: 'bg-gradient-to-r from-cyan-400 to-teal-500',
      },
      audioSrc: '/audio/testimonial1.mp3',
      cardGradient: 'from-cyan-50/50 to-blue-100/50',
      initialsBg: 'bg-cyan-500',
    },
    {
      id: 'jb-properties',
      initials: 'JB',
      company: 'JB Properties',
      description: '200+ manual callbacks were handled manually. Our Voice AI now responds, books & closes every call instantly.',
      result: {
        value: '3 hours saved daily & faster lead handling',
        subValue: '98% call automation',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        gradient: 'bg-gradient-to-r from-green-400 to-lime-500',
      },
      audioSrc: '/audio/testimonial2.mp3',
      cardGradient: 'from-green-50/50 to-lime-100/50',
      initialsBg: 'bg-green-500',
    },
    {
      id: 'pcw-solutions',
      initials: 'P',
      company: 'PCW Solutions',
      description: 'Support clients needed to book the feedback during off hours. We deployed a voice agent that handles 80% of calls automatically.',
      result: {
        value: 'Handles 200 calls/month',
        subValue: '24/7 support',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>,
        gradient: 'bg-gradient-to-r from-purple-500 to-violet-600',
      },
      audioSrc: '/audio/testimonial3.mp3',
      cardGradient: 'from-purple-50/50 to-violet-100/50',
      initialsBg: 'bg-purple-500',
    },
    {
      id: 'lets-fix-it',
      initials: 'FI',
      company: "LET'S FIX IT",
      description: 'Manual callbacks were a major bottleneck. Our Voice AI now responds to, books, and closes every inquiry instantly.',
      result: {
        value: '$22,680 Total Annual Savings',
        subValue: 'ROI: 340%',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
        gradient: 'bg-gradient-to-r from-orange-400 to-red-500',
      },
      audioSrc: '/audio/testimonial4.mp3',
      cardGradient: 'from-rose-50/50 to-orange-100/50',
      initialsBg: 'bg-orange-500',
    },
  ];

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [playingCaseStudyId, setPlayingCaseStudyId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleCaseStudyPlayPause = (id: string, src: string) => {
    if (playingCaseStudyId === id) {
        audioRef.current?.pause();
        setPlayingCaseStudyId(null);
    } else {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        console.log(`Playing case study audio from: ${src}`);
        audioRef.current = { play: () => console.log('play case study'), pause: () => console.log('pause case study') } as any;
        audioRef.current.play();
        setPlayingCaseStudyId(id);
    }
  };


  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-400/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        <div className="container mx-auto px-6 relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900">
            The Future of Voice is Here.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mt-8 mb-8">
            Velocity Script delivers cutting-edge AI voice agents and automation that redefine customer interaction and streamline your business operations.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('services')} className="bg-gradient-to-r from-teal-500 to-lime-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              Explore Services
            </button>
            <button onClick={() => navigate('home', '#booking')} className="bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-teal-500 transition-all duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="solutions" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Complete AI Voice Solutions</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Everything you need to automate and enhance your customer interactions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreOfferings.map((offering, index) => (
            <div key={index} className={`p-6 rounded-2xl bg-gradient-to-br ${offering.gradient} shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${offering.iconBg} shadow-md`}>
                {offering.icon}
              </div>
              <h3 className="mt-5 font-bold text-xl text-gray-800">{offering.title}</h3>
              <p className="mt-2 text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Results Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Real Results, <span className="text-teal-500">Real Impact</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Discover how leading businesses are winning with AI voice automation
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
                <div key={study.id} className={`p-6 rounded-2xl bg-white shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100`}>
                    <div className="flex flex-col h-full">
                        <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${study.initialsBg} text-white flex items-center justify-center font-bold text-lg`}>
                                {study.initials}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{study.company}</h3>
                                <p className="text-sm text-gray-500 font-semibold">How We Helped:</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm flex-grow">{study.description}</p>
                        
                        <div className={`mt-6 p-4 rounded-xl text-white ${study.result.gradient} flex items-start space-x-4`}>
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                                {study.result.icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold opacity-80">Result:</p>
                                <p className="font-bold text-lg leading-tight">{study.result.value}</p>
                                <p className="text-sm opacity-90">{study.result.subValue}</p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center space-x-1 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span>Completed</span>
                                </span>
                                <a href="#" className="font-semibold text-gray-600 hover:text-teal-500 transition-colors">View Details &rarr;</a>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg flex items-center space-x-3">
                                <button 
                                    onClick={() => handleCaseStudyPlayPause(study.id, study.audioSrc)}
                                    className="w-8 h-8 flex-shrink-0 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition-colors"
                                    aria-label="Play testimonial audio"
                                >
                                    {playingCaseStudyId === study.id ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd" /></svg>
                                    )}
                                </button>
                                <div className="flex-grow">
                                    <p className="text-xs font-bold text-gray-700">Client Testimonial</p>
                                    <div className="w-full bg-gray-300 rounded-full h-1 mt-1">
                                        <div className="bg-teal-400 h-1 rounded-full" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500 font-mono">0:00/0:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="booking" className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Book a Free Discovery Call</h2>
          <p className="text-gray-500 mt-2">
            Schedule a time that works for you to discuss how our AI solutions can transform your business.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-2 md:p-4 rounded-xl border border-gray-200 shadow-lg">
          <iframe 
            src="https://cal.com/jude-al-attraqchi-jqzfyj/velocity-script"
            className="w-full h-[600px] border-0 rounded-lg"
            frameBorder="0" 
            scrolling="yes">
          </iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by Industry Leaders</h2>
            <div className="max-w-3xl mx-auto relative">
                <button 
                  onClick={prevTestimonial}
                  className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-white/50 hover:bg-white text-gray-700 shadow-md transition-all"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>

                <div key={activeTestimonial} className="bg-white p-8 rounded-lg shadow-xl text-left flex flex-col transition-opacity duration-500 ease-in-out">
                    <p className="text-md italic text-gray-600 flex-grow">"{testimonials[activeTestimonial].quote}"</p>
                    <div className="mt-6 flex items-center">
                        <img className="w-12 h-12 rounded-full object-cover" src={testimonials[activeTestimonial].imageUrl} alt={testimonials[activeTestimonial].name} />
                        <div className="ml-4">
                        <p className="font-bold text-teal-600">{testimonials[activeTestimonial].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}</p>
                        </div>
                    </div>
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-white/50 hover:bg-white text-gray-700 shadow-md transition-all"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
