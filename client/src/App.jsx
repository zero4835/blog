import React from 'react';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoute';
import "./style.scss";

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </div>
  );
}

export default App;
