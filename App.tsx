import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import SuccessStoriesPage from './components/pages/SuccessStoriesPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import Chatbot from './components/Chatbot';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(false);

  useEffect(() => {
    // Show the proactive chat bubble after a delay
    const timer = setTimeout(() => {
      if (!isChatOpen) {
        setShowChatBubble(true);
      }
    }, 3000); // 3-second delay
    return () => clearTimeout(timer);
  }, [isChatOpen]);


  const navigate = useCallback((page: Page, id?: string) => {
    const targetPage = page === 'services' ? 'home' : page;
    const isSwitchingRenderedPage = (targetPage !== (currentPage === 'services' ? 'home' : currentPage));
    
    const doScroll = () => {
        // FIX: The original check `page === 'book-call'` was incorrect due to type constraints.
        // This now correctly uses the `id` parameter for anchor scrolling.
        const targetAnchor = (page === 'services') ? '#solutions' : (id && id.startsWith('#')) ? id : undefined;
        if (targetAnchor) {
            document.querySelector(targetAnchor)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    if (page === 'blog-post' && id) {
      setSelectedPostId(id);
    } else if (page !== 'blog-post') {
      setSelectedPostId(null);
    }
    
    setCurrentPage(page);

    if (isSwitchingRenderedPage) {
        setTimeout(doScroll, 100);
    } else {
        doScroll();
    }
  }, [currentPage]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    setShowChatBubble(false); // Hide bubble whenever chat is toggled
  };
  
  const scrollToBooking = () => {
    navigate('home', '#booking');
    setIsChatOpen(false); // Close chat after directing them
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case 'services':
        return <HomePage navigate={navigate} />;
      case 'success-stories':
        return <SuccessStoriesPage />;
      case 'blog':
        return <BlogPage navigate={navigate} />;
      case 'blog-post':
        if (!selectedPostId) {
          return <BlogPage navigate={navigate} />;
        }
        return <BlogPostPage postId={selectedPostId} navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header navigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <div className="fixed bottom-6 right-6 z-50">
        {showChatBubble && !isChatOpen && (
            <div 
              className="absolute bottom-20 right-0 bg-white p-4 rounded-xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 w-max"
              onClick={handleChatToggle}
            >
                <p className="text-sm font-medium text-gray-800 whitespace-nowrap">Hey, how are you doing today?</p>
                <button onClick={(e) => { e.stopPropagation(); setShowChatBubble(false); }} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        )}
        <button
          onClick={handleChatToggle}
          className="bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 hover:scale-110 transform transition-transform duration-300"
          aria-label="Toggle Chatbot"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} scrollToBooking={scrollToBooking} />
    </div>
  );
};

export default App;