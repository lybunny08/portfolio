import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Services from './views/Services';

function App() {
  return (
    <>
      <Appbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
