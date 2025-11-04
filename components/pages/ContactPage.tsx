import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
    }
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's talk about how we can help you achieve your goals.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white dark:bg-gray-800/50 p-8 md:p-12 rounded-xl border border-gray-200 dark:border-teal-500/20">
            <div>
                <h2 className="text-3xl font-bold text-teal-600 dark:text-lime-400 mb-4">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Fill out the form, or reach out to us via our contact details below. We're excited to hear from you!</p>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> sales@velocityscript.ai</p>
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +1 (555) 123-4567</p>
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> 123 AI Avenue, Tech City, USA</p>
                </div>
            </div>
            <div>
                {submitted ? (
                    <div className="flex flex-col items-center justify-center h-full bg-gray-100/50 dark:bg-gray-700/50 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold text-teal-600 dark:text-lime-400">Thank You!</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">Your message has been sent. We'll get back to you shortly.</p>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                        <input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                        <input type="text" name="company" id="company" onChange={handleChange} className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea name="message" id="message" rows={4} required onChange={handleChange} className="mt-1 block w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-lime-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;