import React, { useState } from 'react';
import '../App.css';
import ContactHome from '../components/ContactHome'
import message from '../assets/Send message.json'
import Lottie from 'lottie-react';

function Contact() {
  return (
    <div className="min-h-screen bg-[#ebebeb] justify-around space-x-4 pt-[60px] ">
      <div style={{textAlign:'center'}} className='items-center justify-center px-10'>
        <span>Don't be shy</span>
        <div className='items-center justify-center flex flex-col text-[60px]'>
          <span className='font-sec'>Let's collaborate</span>
          <span>and make good things together</span>
        </div>
      </div>
      <ContactHome />
      <div className='flex flex-row justify-between'>
        <form action="">
          <div className='flex flex-row space-x-4 mb-4'>
            <input type="text" />
            <input type="email" />
          </div>
          <input type="texte" />
          <button type="submit"></button>
        </form>
        <Lottie
            animationData={message}
            loop={true}
            className="w-68 h-48 mx-4"
          />
      </div>
    </div>
  );
}

export default Contact;