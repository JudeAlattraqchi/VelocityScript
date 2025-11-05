import React, { useState } from 'react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [key, setKey] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (key.trim()) {
      onSubmit(key.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Your Gemini API Key</h2>
        <p className="text-gray-600 mb-6">
          To use the interactive chatbot, please provide your own Google Gemini API key. Your key is stored only in your browser for this session and is never saved on our servers.
        </p>
        <div className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Enter your API key"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-teal-500 to-lime-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!key.trim()}
          >
            Save & Start Chatting
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
            You can get a free API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Google AI Studio</a>.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyModal;
