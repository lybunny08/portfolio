import React, { useEffect, useState } from 'react';
import '../App.css';

const Appbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculer les positions des sections
      const homeSection = document.getElementById('home')?.offsetTop || 0;
      const projectsSection = document.getElementById('projects')?.offsetTop || 0;
      const aboutSection = document.getElementById('about')?.offsetTop || 0;
      const contactSection = document.getElementById('contact')?.offsetTop || 0;

      // Déterminer quelle section est active en fonction de la position de défilement
      if (scrollPosition >= aboutSection - 100 && scrollPosition < contactSection - 100) {
        setActiveLink('about');
      } else if (scrollPosition >= contactSection - 100) {
        setActiveLink('contact');
      } else if (scrollPosition >= projectsSection - 100) {
        setActiveLink('projects');
      } else if (scrollPosition >= homeSection - 100) {
        setActiveLink('home');
      } else {
        setActiveLink('');
      }

      // Gérer l'état du scroll
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Écouter l'événement de scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'événement de scroll lors du démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActiveLink = (value) => {
    setActiveLink(value);
    // Optionnel : faire défiler la page vers la section correspondante
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center px-10 pt-10 z-50 ${
        scrolled ? 'scrolled' : ''
      } ${activeLink === 'about' ? 'navbar-about' : ''}`}
    >
      <div className={`flex flex-row items-start ${scrolled || activeLink === 'about' ? 'text-appbar-content-about' : 'text-appbar-content-common'}`}>
        <svg
          className={`nav-logo__rotate ${scrolled || activeLink === 'about' ? 'text-appbar-content-about' : 'text-appbar-content-common'}`}
          width="30"height="30"viewBox="0 0 30 30"fill="none"xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.9999 12L5.61501 20.2027C5.11281 20.7653 4.23154 20.7803 3.72078 20.2572C3.21795 19.7423 3.24334 18.879 3.79721 18.3849C6.53142 16.2566 9.26566 14.1283 11.9999 12Z"fill="currentColor"></path>
          <path d="M11.9999 11.9999L1.68496 13.2852C0.932055 13.3279 0.298262 12.7154 0.306974 11.9844C0.315539 11.2647 0.943908 10.6723 1.68496 10.7145C5.12328 11.143 8.56161 11.5714 11.9999 11.9999Z"fill="currentColor"></path>
          <path d="M11.9999 11.9999L3.79723 5.61501C3.23466 5.11281 3.21962 4.23154 3.74269 3.72078C4.25764 3.21795 5.12089 3.24334 5.61503 3.79721C7.74334 6.53142 9.87162 9.26566 11.9999 11.9999Z"fill="currentColor"></path>
          <path d="M11.9999 11.9999L10.7145 1.68496C10.6718 0.932055 11.2843 0.298262 12.0154 0.306974C12.735 0.315539 13.3275 0.943908 13.2852 1.68496C12.8568 5.12328 12.4283 8.56161 11.9999 11.9999Z"fill="currentColor"></path>
          <path d="M11.9999 12L18.3848 3.79735C18.887 3.23478 19.7682 3.21974 20.279 3.74282C20.7818 4.25776 20.7565 5.12102 20.2026 5.61515C17.4684 7.74346 14.7341 9.87174 11.9999 12Z"fill="currentColor"></path>
          <path d="M11.9999 11.9999L22.3149 10.7145C23.0678 10.6718 23.7016 11.2843 23.6929 12.0154C23.6843 12.735 23.056 13.3275 22.3149 13.2852C18.8766 12.8568 15.4382 12.4283 11.9999 11.9999Z"fill="currentColor"></path>
          <path d="M12 12L20.2027 18.3849C20.7653 18.8871 20.7803 19.7684 20.2572 20.2791C19.7423 20.782 18.879 20.7566 18.3849 20.2027C16.2566 17.4685 14.1283 14.7342 12 12Z"fill="currentColor"></path>
          <path d="M12 12L13.2853 22.315C13.328 23.0679 12.7155 23.7017 11.9845 23.693C11.2648 23.6845 10.6724 23.0561 10.7147 22.315C11.1431 18.8767 11.5715 15.4383 12 12Z"fill="currentColor"></path>
        </svg>
        <div className={`flex flex-col pl-4 ${scrolled || activeLink === 'about' ? 'text-appbar-content-about' : 'text-appbar-content-common'}`}>
          <span className="text-[8.5px]">Open for any</span>
          <span className="text-[8.5px]">collaboration and offers</span>
        </div>
      </div>
      <div className={`flex flex-row space-x-8 text-lg font-semibold ${scrolled || activeLink === 'about' ? 'text-appbar-content-about' : 'text-appbar-content-common'}`}>
        <a
          href="#home"
          className={`cursor-pointer ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => handleSetActiveLink('home')}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`cursor-pointer ${activeLink === 'projects' ? 'active' : ''}`}
          onClick={() => handleSetActiveLink('projects')}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`cursor-pointer ${activeLink === 'about' ? 'active' : ''}`}
          onClick={() => handleSetActiveLink('about')}
        >
          About
        </a>
        <a
          href="#contact"
          className={`cursor-pointer ${activeLink === 'contact' ? 'active' : ''}`}
          onClick={() => handleSetActiveLink('contact')}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Appbar;
