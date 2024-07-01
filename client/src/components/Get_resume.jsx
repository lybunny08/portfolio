import React from 'react'
import '../App.css'  // Assurez-vous d'importer le fichier CSS si vous utilisez un fichier CSS personnalisé.

function GetResume() {
  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <span className="text-lg text-gray-700">I convinced you? Here is my resume</span>
      <button className="bg-[#1c1c1c] text-white px-20 py-3 rounded-lg hover:bg-[#8D8D8D] transition duration-300 ease-in-out">
        Download
      </button>
    </div>
  )
}

export default GetResume
