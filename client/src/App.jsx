import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/single" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
