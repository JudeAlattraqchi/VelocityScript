import React from 'react';
import Logo from './Logo';
import { Page } from '../types';

interface FooterProps {
  navigate: (page: Page, anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-500 max-w-md">
              Leading the revolution in AI voice and automation solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-teal-600">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="text-gray-600 hover:text-teal-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('success-stories'); }} className="text-gray-600 hover:text-teal-500 transition-colors">Success Stories</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('services'); }} className="text-gray-600 hover:text-teal-500 transition-colors">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="text-gray-600 hover:text-teal-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-teal-600">Connect</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-teal-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Auckland, New Zealand</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-teal-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(+64) 9 888 9282</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-teal-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>(+64) 223 037 330</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
