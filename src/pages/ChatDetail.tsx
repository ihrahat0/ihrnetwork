import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreVertical, Paperclip, Smile, Send } from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'You',
    content: "Hi, good to see you! We're starting work on a presentation for a new product today, right?",
    time: '8:36 PM',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    sender: 'Katy',
    content: "Yes, that's right. Let's discuss the main points and structure of the presentation",
    time: '8:38 PM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    sender: 'You',
    content: "🎵 Voice message (1:04)",
    time: '8:40 PM',
    type: 'voice',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    sender: 'Katy',
    content: "Okay, then let's divide the presentation into a few main sections: introduction, product description, features and benefits, use cases, and conclusion.",
    time: '8:52 PM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    sender: 'You',
    content: "It's a deal",
    time: '8:36 PM',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  }
];

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ChatDetail() {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto h-screen flex flex-col"
      >
        {/* Header */}
        <div className="bg-gray-800 p-4 flex items-center gap-4">
          <button 
            onClick={() => navigate('/chats')}
            className="p-2 hover:bg-gray-700 rounded-full transition-all"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Aysha Hayes"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="text-white font-medium">Aysha Hayes</h2>
                <p className="text-sm text-gray-400">Online</p>
              </div>
            </div>
          </div>

          <button className="p-2 hover:bg-gray-700 rounded-full transition-all">
            <MoreVertical size={24} className="text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className={`flex items-end gap-2 ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender !== 'You' && (
                <img 
                  src={message.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              
              <div className={`max-w-[70%] ${message.sender === 'You' ? 'bg-green-400' : 'bg-gray-700'} rounded-2xl p-3`}>
                {message.type === 'voice' ? (
                  <div className="flex items-center gap-2 text-gray-800">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Send size={16} className="text-white" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-800 rounded-full">
                        <motion.div
                          className="h-full w-1/3 bg-white rounded-full"
                          animate={{ x: [0, 100, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      </div>
                    </div>
                    <span className="text-sm">1:04</span>
                  </div>
                ) : (
                  <p className={`${message.sender === 'You' ? 'text-gray-800' : 'text-white'}`}>
                    {message.content}
                  </p>
                )}
                <p className={`text-xs mt-1 ${message.sender === 'You' ? 'text-gray-700' : 'text-gray-400'}`}>
                  {message.time}
                </p>
              </div>

              {message.sender === 'You' && (
                <img 
                  src={message.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-800">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-700 rounded-full transition-all">
              <Paperclip size={24} className="text-gray-400" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="p-2 hover:bg-gray-700 rounded-full transition-all">
              <Smile size={24} className="text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-all">
              <Send size={24} className="text-gray-400" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}