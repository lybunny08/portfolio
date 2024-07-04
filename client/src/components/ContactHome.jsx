import React from 'react';

function ContactHome() {
  return (
    <section className="group relative">
      <div className='flex flex-row items-center justify-between space-x-60 px-10 py-7 overflow-hidden'>
        <a href="https://github.com/lybunny08" target="_blank" rel="noopener noreferrer" className='flex flex-col text-[10px] z-10'>
          <span className='group-hover:text-white opacity-50'>01</span>
          <span className='group-hover:text-white'>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/mamitiana-hajaniaina-b0b425270/" target="_blank" rel="noopener noreferrer" className='flex flex-col text-[10px] z-10'>
          <span className='group-hover:text-white opacity-50'>02</span>
          <span className='group-hover:text-white'>LinkedIn</span>
        </a>
        <a href="https://www.facebook.com/mamtiana.lydien/" target="_blank" rel="noopener noreferrer" className='flex flex-col text-[10px] z-10'>
          <span className='group-hover:text-white opacity-50'>03</span>
          <span className='group-hover:text-white'>Facebook</span>
        </a>
        <a href="mailto:mamitiana.hajaniaina@esti.mg" className='flex flex-col text-[10px] z-10'>
          <span className='group-hover:text-white opacity-50'>04</span>
          <span className='group-hover:text-white'>mamitiana.hajaniaina@esti.mg</span>
        </a>
        <div className='flex flex-col text-[10px] z-10'>
          <span className='group-hover:text-white'>©2024</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-x-0 h-1 bg-black top-1/2 group-hover:top-0 group-hover:bottom-0 group-hover:h-full transition-all duration-1000"></div>
      </div>
    </section>
  );
}

export default ContactHome;