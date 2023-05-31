import React from 'react';
import { useState } from 'react';


const ImageDetails = ({ image, onNameChange, handleDeleteImage, setSelectedImage, imageName, setImageName }) => {
  
  return (
    <div className="flex mt-4 relative">
      <div className="w-auto pr-4">
        <img src={image.src} alt={image.name} className="w-full" onClick={() => setSelectedImage(null)} />
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-0 left-0 m-2 p-2 rounded-full text-white hover:bg-gray-800 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/6 flex flex-col bg-gray-200 p-2">
        <div className="mb-2 flex items-center">
        <p>Nombre:</p>
          <input
            type="text"
            id="name"
            value={imageName}
            onChange={(event) => setImageName(event.target.value)}
            className="border p-2 bg-gray-200"
          />

        </div>
        <p className="mb-2">Ultima modificacion: {image.date}</p>
        <button
          onClick={handleDeleteImage}
          className="mb-2 w-52 rounded-md px-3 py-1 bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 transition-colors duration-300"
        >
          Eliminar
        </button>
        <button
          onClick={() => onNameChange(imageName)}
          className="mb-2 w-52 rounded-md px-3 py-1 bg-blue-500 text-white hover:bg-sky-400 focus:bg-blue-700 transition-colors duration-300"
        >
          Guardar Cambios
        </button>

      </div>

    </div>

  );
};

export default ImageDetails;
