import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import ChatList from './pages/ChatList';
import ChatDetail from './pages/ChatDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/chats" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;