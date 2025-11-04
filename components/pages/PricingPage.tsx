import React from 'react';

const PricingPage: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$499',
      features: [
        '1 AI Voice Agent',
        'Up to 1,000 calls/month',
        'Basic Workflow Automation',
        'Standard Integrations',
        'Email Support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$1,299',
      features: [
        'Up to 5 AI Voice Agents',
        'Up to 5,000 calls/month',
        'Advanced Automation Flows',
        'Premium Integrations (CRM, ERP)',
        'Priority Email & Chat Support',
        'AI Analytics Dashboard',
      ],
      cta: 'Choose Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited AI Voice Agents',
        'Custom Call Volume',
        'Bespoke Automation Solutions',
        'Custom API Development',
        'Dedicated Account Manager',
        'On-site Training & Support',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Flexible Pricing for Every Team</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your business goals and scale as you grow.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative p-8 rounded-xl border ${tier.popular ? 'border-teal-500' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-800/50 flex flex-col`}>
              {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</div>}
              <h3 className="text-2xl font-bold text-teal-600 dark:text-lime-400">{tier.name}</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">{tier.price}<span className="text-base font-normal text-gray-500 dark:text-gray-400">{tier.name !== 'Enterprise' && '/mo'}</span></p>
              <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-lime-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-10 py-3 px-6 font-bold rounded-lg transition-transform duration-300 hover:scale-105 ${tier.popular ? 'bg-gradient-to-r from-teal-500 to-lime-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;