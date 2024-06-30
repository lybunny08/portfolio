import React from 'react';
import { Link } from 'react-router-dom';

function Appbar() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex justify-around items-center pt-4 m-3">
        {/* Logo */}
        <span className="font-bold">Mamitiana Lydien</span>
        
        {/* Liens vers les pages */}
        <div className="flex space-x-10">
          <Link to="/" className="px-4 hover:text-gray-400">Home</Link>
          <Link to="/about" className="px-4 hover:text-gray-400">About</Link>
          <Link to="/contact" className="px-4 hover:text-gray-400">Contact</Link>
          <Link to="/services" className="px-4 hover:text-gray-400">Service</Link>
        </div>
        
        {/* Liens vers les réseaux sociaux */}
        <div className="flex space-x-4">
          <a href="https://github.com/lybunny08" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.facebook.com/mamtiana.lydien/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/in/mamitiana-hajaniaina-b0b425270/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
