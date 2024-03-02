import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter basename='/homework'>
    <div className='app'>
      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Footer */}
    </div>
  </BrowserRouter>
);

export default App;
