import React, { useEffect, useRef } from 'react';
import '../App.css';
import Lottie from 'lottie-react';
import personAnimation from '../assets/person.json';
import Appbar from '../components/Appbar';
import ContactHome from '../components/ContactHome';
import Creator from '../assets/Website Creator.gif'
import facebook from '../assets/facebook-logo.png'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn-logo.png'
import {gsap} from 'gsap'

function Home () { 

  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col pt-20">
        
      <div style={{ textAlign: 'center' }} className="flex flex-row items-center justify-center text-[120px]">
          <span className="font-sec">Hajaniaina</span>
          <span className='pl-4'>Lydien</span>
      </div>

      <ContactHome />


      <div className="flex flex-row justify-between items-center w-full px-[83px] mb-[90px] ">
        {/* Coin gauche */}
        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mb-5'>
            <path d="M14.8382 9.13358L12.2744 0L9.70836 9.13358L0 12L9.70836 14.5087L12.2744 24L14.6552 14.5087L24 12L14.8382 9.13358Z" fill="#1C1C1C" />
          </svg>
          <div className="flex flex-col items-center">
            <span className='text-[11px] text-center'>HAJANIAINA MAMITIANA LYDIEN IS AN</span>
            <span className='text-[11px] text-center'>INDEPENDENT DEVELOPER FROM ANTANANARIVO</span>
            <span className='text-[11px] text-center'>CITY, MADAGASCAR</span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Lottie
            animationData={personAnimation}
            loop={true}
            className="w-68 h-48 mx-4"
          />
          {/* <img src={Creator} alt="" className='w-[250px] h-[220px] '/> */}
          <span className='text-[10px]'>Just an ordinary developer. From Madagascar with love</span>
        </div>
        {/* Coin droite */}
        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mb-5'>
            <path d="M14.8382 9.13358L12.2744 0L9.70836 9.13358L0 12L9.70836 14.5087L12.2744 24L14.6552 14.5087L24 12L14.8382 9.13358Z" fill="#1C1C1C" />
          </svg>
          <div className="flex flex-col items-center">
            <span className='text-[11px] text-center'>PASSIONATE ABOUT CREATING</span>
            <span className='text-[11px] text-center'>WEB AND MOBILE APPLICATIONS, BUT I LIKE</span>
            <span className='text-[11px] text-center'>MOBILE MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
