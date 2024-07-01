// src/components/AppBar.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css';

const Appbar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsHome(location.pathname === '/');
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <div className={`app-bar ${isHome && scrollY === 0 ? 'fixed' : 'absolute'}`}>
      <div className="app-bar-content">
        <Link to="/" className="logo">My Logo</Link>
        <nav className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Appbar;
