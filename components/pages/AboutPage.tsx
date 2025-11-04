import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Velocity Script</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We are innovators, engineers, and strategists passionate about harnessing the power of artificial intelligence to build the future of communication.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-teal-600 dark:text-lime-400 mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                    To empower businesses of all sizes with intelligent automation and AI-driven voice solutions that enhance productivity, foster growth, and create meaningful customer experiences. We believe in making advanced technology accessible and impactful.
                </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img src="https://picsum.photos/800/600?random=1" alt="Our Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
            </div>
        </div>

        <div className="mt-20">
           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Team Member Card */}
                <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-teal-500/20">
                    <img className="w-24 h-24 mx-auto rounded-full" src="https://picsum.photos/200?random=2" alt="Team Member"/>
                    <h3 className="mt-4 text-xl font-bold text-teal-600 dark:text-lime-400">Alex Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">Founder & CEO</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-teal-500/20">
                    <img className="w-24 h-24 mx-auto rounded-full" src="https://picsum.photos/200?random=3" alt="Team Member"/>
                    <h3 className="mt-4 text-xl font-bold text-teal-600 dark:text-lime-400">Maria Garcia</h3>
                    <p className="text-gray-500 dark:text-gray-400">Lead AI Engineer</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-teal-500/20">
                    <img className="w-24 h-24 mx-auto rounded-full" src="https://picsum.photos/200?random=4" alt="Team Member"/>
                    <h3 className="mt-4 text-xl font-bold text-teal-600 dark:text-lime-400">David Chen</h3>
                    <p className="text-gray-500 dark:text-gray-400">Head of Product</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-teal-500/20">
                    <img className="w-24 h-24 mx-auto rounded-full" src="https://picsum.photos/200?random=5" alt="Team Member"/>
                    <h3 className="mt-4 text-xl font-bold text-teal-600 dark:text-lime-400">Sarah Lee</h3>
                    <p className="text-gray-500 dark:text-gray-400">Automation Specialist</p>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;