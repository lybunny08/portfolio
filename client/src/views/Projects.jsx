import React from 'react';
import '../App.css';
import car from '../assets/car.png';
import comic from '../assets/comic.png';
import identifier from '../assets/identifier.png'; // Assurez-vous que ce chemin est correct

function Projects() {
  return (
    <div className="min-h-screen bg-[ebebeb] flex flex-col pt-[80px] mb-4 ">
      <span style={{ textAlign: 'center' }} className="items-center justify-center font-semibold">Here are my</span>
      <div className="flex flex-row items-center justify-center">
        <span className="font-sec text-[50px]">Selected </span>
        <span className="pl-4 text-[50px]">Projects</span>
      </div>
      <div className="flex flex-row justify-between px-10 mb-2">
        <div className="flex flex-col">
          <img src={identifier} alt="Identifier" className="float-animation" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-sec text-[25px]">Identifier</span>
              <span>An application that identifies</span>
              <span className="pb-4">dog and cat breeds by taking their photos</span>
              <a href="https://github.com/lybunny08/identifier" target="_blank" rel="noopener noreferrer">
                <button className="view-github-button">View on GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={car} alt="Vehicules" className="float-animation" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-sec text-[25px]">Vehicules</span>
              <span>An application to project </span>
              <span className="pb-4">3d car model to see details for buyers</span>
              <a href="https://github.com/lybunny08/identifier" target="_blank" rel="noopener noreferrer">
                <button className="view-github-button">View on GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={comic} alt="Comic" className="float-animation" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-sec text-[25px]">Comic</span>
              <span>An application for reading comics </span>
              <span className="pb-4">and a design that adapts to the comics being read</span>
              <a href="https://github.com/lybunny08/identifier" target="_blank" rel="noopener noreferrer">
                <button className="view-github-button">View on GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-left font-bold text-[50px] text-[#ebebeb] pr-2">LET'S COLLABORATE LET'S COLLABORATE LET'S COLLABORATE </div>
        <div className="marquee-left font-bold text-[50px] text-[#ebebeb]">LET'S COLLABORATE LET'S COLLABORATE LET'S COLLABORATE</div>
      </div>
      <div className="marquee-container">
        <div className="marquee-right font-bold text-[50px] text-[#ebebeb] pr-2">LET'S COLLABORATE LET'S COLLABORATE LET'S COLLABORATE </div>
        <div className="marquee-right font-bold text-[50px] text-[#ebebeb]">LET'S COLLABORATE LET'S COLLABORATE LET'S COLLABORATE</div>
      </div>
    </div>
  );
}

export default Projects;
