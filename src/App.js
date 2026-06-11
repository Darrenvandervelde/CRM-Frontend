import React from 'react';
import '@flaticon/flaticon-uicons/css/all/all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about.js';
import Home from './pages/home.js';
import ContactUs from './pages/contactUs.js';
import Blog from './pages/blog.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;