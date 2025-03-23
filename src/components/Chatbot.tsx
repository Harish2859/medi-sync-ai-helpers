
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Mic, X, ChevronDown, ChevronUp, CheckSquare } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your MediSync AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Quick reply options
  const quickReplies = [
    "Check my symptoms",
    "How does diagnosis work?",
    "Find a doctor",
    "Medical advice for headache"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I understand your symptoms. Based on the information you've provided, it could be related to several conditions. Would you like me to recommend a specialist?",
        "Thank you for sharing that information. To provide a more accurate assessment, could you please tell me how long you've been experiencing these symptoms?",
        "I recommend consulting with a healthcare professional. Would you like me to help you find a doctor near you?",
        "Based on your symptoms, it might be a common condition. However, it's important to consult with a healthcare provider for proper diagnosis.",
        "Your health is important. I'd suggest tracking these symptoms and discussing them with your doctor at your next appointment."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: reply,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);
    
    // Simulate bot response for quick replies
    setTimeout(() => {
      let botResponse = "";
      
      switch(reply) {
        case "Check my symptoms":
          botResponse = "I'd be happy to help check your symptoms. Could you please describe what you're experiencing?";
          break;
        case "How does diagnosis work?":
          botResponse = "Our AI diagnosis system analyzes your symptoms and medical history to suggest possible conditions. We use advanced machine learning trained on medical data to provide insights, but always recommend confirming with a healthcare professional.";
          break;
        case "Find a doctor":
          botResponse = "I can help you find a doctor. Could you share your location or specialty you're looking for?";
          break;
        case "Medical advice for headache":
          botResponse = "Headaches can have many causes, from tension and dehydration to more serious conditions. Is it a dull ache, sharp pain, or throbbing sensation? How long have you been experiencing it?";
          break;
        default:
          botResponse = "Thank you for your message. How else can I assist you today?";
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot trigger button */}
      <button 
        onClick={toggleChat}
        className="chatbot-trigger"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        <span className="pulse-ring bg-white/20"></span>
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col z-40 overflow-hidden animate-scale-in">
          {/* Chat header */}
          <div className="bg-medisync-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative mr-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-medisync-600"></span>
              </div>
              <div>
                <h3 className="font-semibold">MediSync AI Assistant</h3>
                <p className="text-xs text-white/70">Online | Medical AI</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-medisync-700" />
                  </div>
                )}
                <div 
                  className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'bg-medisync-600 text-white rounded-tr-none'
                      : 'bg-white shadow-sm border border-gray-100 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center ml-2 flex-shrink-0">
                    <CheckSquare className="w-4 h-4 text-medisync-700" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center mr-2">
                  <MessageSquare className="w-4 h-4 text-medisync-700" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 max-w-[80%] shadow-sm rounded-tl-none border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-medisync-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-medisync-400 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-medisync-400 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Auto-scroll reference */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick replies */}
          <div className="px-4 pt-2 pb-3 bg-white border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1 text-xs rounded-full border border-medisync-100 bg-medisync-50 text-medisync-700 whitespace-nowrap hover:bg-medisync-100 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 bg-white">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-l-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-medisync-500 text-sm"
                value={inputMessage}
                onChange={handleInputChange}
                ref={inputRef}
              />
              <button
                type="button"
                className="bg-gray-100 text-gray-600 p-2 hover:bg-gray-200 transition-colors"
                aria-label="Voice input"
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                type="submit"
                className="bg-medisync-600 text-white p-2 rounded-r-full hover:bg-medisync-700 transition-colors"
                disabled={inputMessage.trim() === ''}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
