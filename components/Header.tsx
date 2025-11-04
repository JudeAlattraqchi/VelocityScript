import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface HeaderProps {
  navigate: (page: Page, anchor?: string) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
  const navLinks: { page: Page | 'book-call', label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'success-stories', label: 'Success Stories' },
    { page: 'services', label: 'Services' },
    { page: 'book-call', label: 'Book Call' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-max mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 flex items-center px-6 py-3 space-x-10">
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="cursor-pointer flex-shrink-0">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(e) => { 
                  e.preventDefault(); 
                  if (link.page === 'book-call') {
                      navigate('home', '#booking');
                  } else {
                      navigate(link.page as Page);
                  }
              }}
              className={`text-base font-medium whitespace-nowrap transition-colors duration-300 ${
                currentPage === link.page
                  ? 'text-teal-500' 
                  : 'text-gray-600 hover:text-teal-500'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;