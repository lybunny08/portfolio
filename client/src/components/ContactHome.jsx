import React from 'react';

function ContactHome() {
  return (
    <section className="group">
      <div className='flex flex-row items-center justify-between space-x-60 group-hover:bg-black group-hover:text-white px-10 py-7'>
        <a href="https://github.com/lybunny08" target="_blank" rel="noopener noreferrer" className='flex flex-col text-[10px]'>
          <span className='opacity-50'>01</span>
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/mamitiana-hajaniaina-b0b425270/" target="_blank" rel="noopener noreferrer" className='flex flex-col text-[10px]'>
          <span className='opacity-50'>02</span>
          <span>LinkedIn</span>
        </a>
        <a href="https://www.facebook.com/mamtiana.lydien/" target="_blank" rel="noopener noreferrer" className='flex flex-col text-[10px]'>
          <span className='opacity-50'>03</span>
          <span>Facebook</span>
        </a>
        <a href="mailto:mamitiana.hajaniaina@esti.mg" className='flex flex-col text-[10px]'>
          <span className='opacity-50'>04</span>
          <span>mamitiana.hajaniaina@esti.mg</span>
        </a>
        <div className='flex flex-col text-[10px]'>
          <span>©2024</span>
        </div>
      </div>
    </section>
  );
}

export default ContactHome;
