import React from 'react';

function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Box avec le coin en bas à droite visible */}
      <div className="box-corner-br"></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Home Page</h1>
        <p className="text-lg text-gray-700 mb-4">This is the home page of our amazing portfolio website. Explore the different sections to know more.</p>
      </div>
    </div>
  );
}

export default Home;
