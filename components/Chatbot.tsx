import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToBooking: () => void;
}

type ConversationState = 'greeting' | 'collecting_name' | 'collecting_email' | 'collecting_time' | 'faq';

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose, scrollToBooking }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState>('greeting');
  const [userData, setUserData] = useState({ name: '', email: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen) {
      setMessages([
        { id: '1', text: "Hey, how are you doing today?", sender: 'bot' },
        { id: '2', text: "Do you want any help with your business, or to create anything? I'm here to assist.", sender: 'bot' }
      ]);
      setConversationState('collecting_name');
    } else {
      // Reset state when closed
      setUserData({ name: '', email: '' });
      setConversationState('greeting');
    }
  }, [isOpen]);

  const addBotMessage = (text: string, hasAction = false) => {
    const botMessage: Message = { id: (Date.now() + 1).toString(), text, sender: 'bot', hasAction };
    setMessages(prev => [...prev.filter(m => !m.isTyping), botMessage]);
    setIsLoading(false);
  };

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    const typingIndicatorId = `${Date.now()}-typing`;
    setMessages(prev => [...prev, { id: typingIndicatorId, text: '', sender: 'bot', isTyping: true }]);
    setTimeout(scrollToBottom, 100);

    // Simulate bot thinking time
    setTimeout(() => {
      let botMessageText = '';

      switch (conversationState) {
        case 'collecting_name':
          botMessageText = "That's great! To best assist you, I can connect you with one of our consultants for a free consultation. First, what is your first name?";
          setConversationState('collecting_email');
          addBotMessage(botMessageText);
          break;
        
        case 'collecting_email':
          setUserData(prev => ({ ...prev, name: currentInput }));
          botMessageText = `Thanks, ${currentInput}! And what is your company email address?`;
          setConversationState('collecting_time');
          addBotMessage(botMessageText);
          break;
          
        case 'collecting_time':
          if (!/\S+@\S+\.\S+/.test(currentInput)) {
            botMessageText = "Hmm, that doesn't look like a valid email. Could you please provide a correct company email?";
            // State remains 'collecting_time' to re-ask
            addBotMessage(botMessageText);
          } else {
            setUserData(prev => ({ ...prev, email: currentInput }));
            botMessageText = "Perfect. What is the preferred day and time to have a chat with our consultants?";
            setConversationState('faq');
            addBotMessage(botMessageText);
          }
          break;
          
        case 'faq':
        default:
          sendMessageToGemini(currentInput).then(responseText => {
              const suggestsBooking = /book|schedule|consultation|demo|call|calendar/i.test(currentInput) || /book|schedule|consultation|demo|call|calendar/i.test(responseText);
              addBotMessage(responseText, suggestsBooking);
          }).catch(error => {
              console.error('Error fetching response from Gemini:', error);
              addBotMessage('Sorry, I encountered an error. Please try again.');
          });
          break;
      }
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] z-50">
      <div className="bg-[#EEFEFD] rounded-2xl shadow-2xl flex flex-col h-full border border-gray-200">
        <header className="bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center rounded-t-2xl border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img src="https://storage.googleapis.com/aai-web-samples/customer-apps/velocity-script/nancy.jpg" alt="Nancy" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Nancy</h3>
              <p className="text-xs text-teal-500">Online</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 text-2xl leading-none">&times;</button>
        </header>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end mb-4 gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-xl max-w-xs flex flex-col ${msg.sender === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow-sm'}`}>
                {msg.isTyping ? (
                   <div className="flex items-center justify-center space-x-1 p-2">
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                   </div>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                )}
                 {msg.hasAction && (
                  <button
                    onClick={scrollToBooking}
                    className="mt-3 bg-gradient-to-r from-teal-500 to-lime-500 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    Book Free Consultation
                  </button>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-gray-200 bg-white/50">
          <div className="flex bg-white rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-teal-500">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-transparent p-3 focus:outline-none text-gray-800 placeholder-gray-500"
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-teal-500 text-white p-3 rounded-r-lg hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
              {isLoading ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;