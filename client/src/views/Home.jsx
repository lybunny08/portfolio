import React, { useEffect } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import '../App.css';
import lotties from '../assets/lotties.gif';

function Home() {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col items-center pt-10">
      <div style={{ paddingLeft: '2rem', textAlign: 'left' }} className="w-full flex flex-row items-start mb-8">
        <svg className="nav-logo__rotate colorMobile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9999 12L5.61501 20.2027C5.11281 20.7653 4.23154 20.7803 3.72078 20.2572C3.21795 19.7423 3.24334 18.879 3.79721 18.3849C6.53142 16.2566 9.26566 14.1283 11.9999 12Z" fill="#1C1C1C"></path>
          <path d="M11.9999 11.9999L1.68496 13.2852C0.932055 13.3279 0.298262 12.7154 0.306974 11.9844C0.315539 11.2647 0.943908 10.6723 1.68496 10.7145C5.12328 11.143 8.56161 11.5714 11.9999 11.9999Z" fill="#1C1C1C"></path>
          <path d="M11.9999 11.9999L3.79723 5.61501C3.23466 5.11281 3.21962 4.23154 3.74269 3.72078C4.25764 3.21795 5.12089 3.24334 5.61503 3.79721C7.74334 6.53142 9.87162 9.26566 11.9999 11.9999Z" fill="#1C1C1C"></path>
          <path d="M11.9999 11.9999L10.7145 1.68496C10.6718 0.932055 11.2843 0.298262 12.0154 0.306974C12.735 0.315539 13.3275 0.943908 13.2852 1.68496C12.8568 5.12328 12.4283 8.56161 11.9999 11.9999Z" fill="#1C1C1C"></path>
          <path d="M11.9999 12L18.3848 3.79735C18.887 3.23478 19.7682 3.21974 20.279 3.74282C20.7818 4.25776 20.7565 5.12102 20.2026 5.61515C17.4684 7.74346 14.7341 9.87174 11.9999 12Z" fill="#1C1C1C"></path>
          <path d="M11.9999 11.9999L22.3149 10.7145C23.0678 10.6718 23.7016 11.2843 23.6929 12.0154C23.6843 12.735 23.056 13.3275 22.3149 13.2852C18.8766 12.8568 15.4382 12.4283 11.9999 11.9999Z" fill="#1C1C1C"></path>
          <path d="M12 12L20.2027 18.3849C20.7653 18.8871 20.7803 19.7684 20.2572 20.2791C19.7423 20.782 18.879 20.7566 18.3849 20.2027C16.2566 17.4685 14.1283 14.7342 12 12Z" fill="#1C1C1C"></path>
          <path d="M12 12L13.2853 22.315C13.328 23.0679 12.7155 23.7017 11.9845 23.693C11.2648 23.6845 10.6724 23.0561 10.7147 22.315C11.1431 18.8767 11.5715 15.4383 12 12Z" fill="#1C1C1C"></path>
        </svg>
        <div className='flex flex-col pl-4'>
          <span className="text-1xl">Open for any</span>
          <span className="text-1xl">collaboration and offers</span>
        </div>
      </div>

      <div className="mb-8 text-[140px] ">
        <h1 data-splitting="" className="hello-title words chars splitting" style={{ "--word-total": 2, "--char-total": 14, perspective: '300px' }}>
          <span className="font-sec">
            <span className="word" data-word="Mamitiana" style={{ "--word-index": 0 }}>
              <span className="char" data-char="M" style={{ "--char-index": 0 }}>M</span>
              <span className="char" data-char="a" style={{ "--char-index": 1 }}>a</span>
              <span className="char" data-char="m" style={{ "--char-index": 2 }}>m</span>
              <span className="char" data-char="i" style={{ "--char-index": 3 }}>i</span>
              <span className="char" data-char="t" style={{ "--char-index": 4 }}>t</span>
              <span className="char" data-char="i" style={{ "--char-index": 5 }}>i</span>
              <span className="char" data-char="a" style={{ "--char-index": 6 }}>a</span>
              <span className="char" data-char="n" style={{ "--char-index": 7 }}>n</span>
              <span className="char" data-char="a" style={{ "--char-index": 8 }}>a</span>
            </span>
          </span>
          <span className="pl-4">
            <span className="word" data-word="Lydien" style={{ "--word-index": 1 }}>
              <span className="char" data-char="L" style={{ "--char-index": 9 }}>L</span>
              <span className="char" data-char="y" style={{ "--char-index": 10 }}>y</span>
              <span className="char" data-char="d" style={{ "--char-index": 11 }}>d</span>
              <span className="char" data-char="i" style={{ "--char-index": 12 }}>i</span>
              <span className="char" data-char="e" style={{ "--char-index": 13 }}>e</span>
              <span className="char" data-char="n" style={{ "--char-index": 14 }}>n</span>
            </span>
          </span>
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center w-full px-20">
        {/* coin gauche */}
        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mb-5'>
            <path d="M14.8382 9.13358L12.2744 0L9.70836 9.13358L0 12L9.70836 14.5087L12.2744 24L14.6552 14.5087L24 12L14.8382 9.13358Z" fill="#1C1C1C"/>
          </svg>
          <div className="flex flex-col items-center">
            <span className='text-[12px] text-center'>HAJANIAINA MAMITIANA LYDIEN IS AN</span>
            <span className='text-[12px] text-center'>INDEPENDENT DEVELOPPEUR FROM ANTANANARIVO</span>
            <span className='text-[12px] text-center'>CITY, MADAGASCAR</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img src={lotties} alt="GIF Animation" className="w-48 h-48 mx-4" />
          <span className='text-[10px]'>Just an ordinary developer. From Madagascar with love</span>
        </div>
        {/* coin droite */}
        <div className='flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mb-5'>
            <path d="M14.8382 9.13358L12.2744 0L9.70836 9.13358L0 12L9.70836 14.5087L12.2744 24L14.6552 14.5087L24 12L14.8382 9.13358Z" fill="#1C1C1C"/>
          </svg>
          <div className="flex flex-col items-center">
            <span className='text-[12px] text-center'>PASSIONATE ABOUT CREATING WEB AND</span>
            <span className='text-[12px] text-center'>MOBILE APPLICATION, BUT I LIKE</span>
            <span className='text-[12px] text-center'>MORE MOBILE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
