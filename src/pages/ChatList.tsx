import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Pin, Mic, ExternalLink } from 'lucide-react';

const contacts = [
  { id: 1, name: 'Daniel', status: 'online', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop' },
  { id: 2, name: 'Nixtio', status: 'online', avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop' },
  { id: 3, name: 'Anna', status: 'online', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  { id: 4, name: 'Nelly', status: 'online', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop' },
];

const pinnedChats = [
  { 
    id: 1, 
    name: 'George Lobko',
    message: 'Thanks for the quick...',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    bg: 'bg-[#e8f3d6]'
  },
  { 
    id: 2, 
    name: 'Amelia Korns',
    message: "I'm stuck in traffic...",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    bg: 'bg-[#d6e8f3]'
  },
];

const recentChats = [
  { 
    id: 1, 
    name: 'Hasima Medvedeva',
    message: 'Records a voice message',
    time: '12:23',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop',
    unread: 1,
    status: 'online'
  },
  { 
    id: 2, 
    name: 'Nixtio Team',
    message: 'Daniel is typing ...',
    time: '12:13',
    avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop',
    status: 'online'
  },
  { 
    id: 3, 
    name: 'Anatoly Ferusso',
    message: 'Sorry for the delay. 😅 I...',
    time: '11:53',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    status: 'offline'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ChatList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6"
      >
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Messages</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
              <ExternalLink size={24} />
            </button>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-3 overflow-x-auto py-2 scrollbar-hide"
          >
            {contacts.map((contact) => (
              <motion.div 
                key={contact.id}
                variants={item}
                className="flex flex-col items-center space-y-1 min-w-[64px]"
              >
                <div className="relative">
                  <img 
                    src={contact.avatar} 
                    alt={contact.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {contact.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <span className="text-sm">{contact.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Pin size={20} className="text-purple-600" />
              <h2 className="font-semibold">Pinned Chats</h2>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-3"
            >
              {pinnedChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  variants={item}
                  onClick={() => navigate(`/chat/${chat.id}`)}
                  className={`${chat.bg} p-4 rounded-2xl cursor-pointer hover:opacity-90 transition-all`}
                >
                  <div className="flex items-start gap-3">
                    <img 
                      src={chat.avatar} 
                      alt={chat.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{chat.name}</h3>
                      <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex items-center gap-2">
              <h2 className="font-semibold">All Chats</h2>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {recentChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  variants={item}
                  onClick={() => navigate(`/chat/${chat.id}`)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all"
                >
                  <div className="relative">
                    <img 
                      src={chat.avatar} 
                      alt={chat.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {chat.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{chat.name}</h3>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {chat.message.includes('voice message') && <Mic size={16} className="text-gray-500" />}
                      <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                    </div>
                  </div>
                  {chat.unread && (
                    <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white">{chat.unread}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}