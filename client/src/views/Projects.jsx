import React from 'react';
import '../App.css';
import car from '../assets/car.png'
import comic from '../assets/comic.png'
import identifier from '../assets/identifier.png'

function Projects() {
  return (
    <div className="min-h-screen bg-[ebebeb] flex flex-col px-10 pt-[80px] ">
      <span style={{textAlign:'center'}} className='items-center justify-center font-semibold'>Here are my</span>
      <div className='flex flex-row  items-center justify-center'>
        <span className='font-sec text-[50px]'>Selected </span>
        <span className='pl-4 text-[50px]'>Projects</span>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <img src={identifier} alt="" />
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <span className='font-sec text-[25px]'>Identifier</span>
              <span>An application that identifies</span>dog and cat breeds by taking their photos
            </div>
          </div>

        </div>
        <div className='flex flex-col'>
          <img src={car} alt="" />
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <span className='font-sec text-[25px]'>Vehicules</span>
              <span>An application to project </span>3d car model to see details for buyers
            </div>
          </div>

        </div>
        <div className='flex flex-col'>
          <img src={comic} alt="" />
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <span className='font-sec text-[25px]'>Comic</span>
              <span>An application for reading comics </span>and a design that adapts to the comics being read
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;