import React, { useRef, useEffect } from 'react';
import '../App.css';
import ContactHome from '../components/ContactHome';
import message from '../assets/Send message.json';
import Lottie from 'lottie-react';

function Contact() {
  

  return (
    <div className="min-h-screen bg-[#ebebeb] pt-[60px]"> 
      <div style={{ textAlign: 'center' }} className='items-center justify-center px-10'>
        <div className='items-center justify-center flex flex-col text-[70px]'> 
          <span className='font-sec'>Let's collaborate</span> {/* this is first */}
          <span>and make good things together</span> {/* and this is second */}
        </div>
      </div>
      <ContactHome />
      <div className='flex flex-row justify-between px-10'>
        <form action="" className="pt-8">
          <div className='flex flex-row space-x-10 mb-4'>
            <input type="text" className='bg-[#ebebeb]' placeholder='Your name' />
            <input type="email" className='bg-[#ebebeb]' placeholder='Your email' />
          </div>
          <textarea className="input-field input-message" placeholder="Your message"></textarea>
          <button className="border-radius bg-black text-white py-2 px-5 mx-5" type="submit">Send message</button>
        </form>
        <div className='items-center'>
          <Lottie
            animationData={message}
            loop={true}
            className="w-78 h-[250px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
