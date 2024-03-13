import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import PostList from './components/PostList';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
