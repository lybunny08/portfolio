import React from 'react';
import flutter from '../assets/logo_flutter.png';
import react from '../assets/logo_react.png';
import nodejs from '../assets/logo_nodejs.png';
import tailwindcss from '../assets/logo_tailwind_css.png';
import firebase from '../assets/logo_firebase.png';
import python from '../assets/logo_python.png';
import figma from '../assets/logo_figma.png';

function About() {
    return (
        <div className="relative min-h-screen bg-[#1C1C1C] flex flex-col px-10 pt-[80px] text-white">
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <span className='text-[70px] font-semibold font-sec mb-2'>Enthusiastic,</span>
                    <span className='text-[70px] font-semibold mb-2'>about crafting ideas and </span>
                    <span className='text-[70px] font-semibold'>turning them into reality</span>
                    <div className='flex flex-row font-semibold pt-10'>
                        <div className='flex flex-col mr-8'>
                            <span>Mobile Front-end</span>
                            <img src={flutter} alt="Flutter logo" className='w-[50px] h-[50px]' />
                        </div>
                        <div className='flex flex-col mr-8'>
                            <span>Web Site Front-end</span>
                            <div className='flex flex-row space-x-2 pt-2'>
                                <img src={react} alt="React logo" className='w-[50px] h-[50px]' />
                                <img src={tailwindcss} alt="Tailwind CSS logo" className='w-[50px] h-[50px]' />
                            </div>
                        </div>
                        <div className='flex flex-col mr-8'>
                            <span>Back-end</span>
                            <div className='flex flex-row space-x-2 pt-2'>
                                <img src={nodejs} alt="Node.js logo" className='w-[50px] h-[50px]' />
                                <img src={python} alt="Python logo" className='w-[50px] h-[50px]' />
                            </div>
                        </div>
                        <div className='flex flex-col mr-8'>
                            <span>Tools</span>
                            <div className='flex flex-row space-x-2 pt-2'>
                                <img src={firebase} alt="Firebase logo" className='w-[50px] h-[50px]' />
                                <img src={figma} alt="Figma logo" className='w-[50px] h-[50px]' />
                            </div>
                        </div>
                    </div>
                    <div className='skills-container flex flex-col text-[30px] font-semibold'>
                        <span>I HAVE SOME SKILLS</span>
                        <div className='flex flex-row'>
                            <span>ABOUT</span>
                            <span className='font-sec pl-4'>UI/UX Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
