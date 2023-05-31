import React from 'react';

const Gallery = ({ images, onImageClick }) => {
  const totalImages = images.reduce((accumulator, image) => {
    return accumulator + 1;
  }, 0);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ultimas 5 imagenes subidas</h1>
      <div className="flex flex-wrap -mx-2">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className="w-1/5 px-2 mb-4"
            onClick={() => onImageClick(image)}
          >
            <img src={image.src} alt={image.name} className="w-full" />
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Galeria</h2>
      <p className='mb-4'>Numero de imagenes: {totalImages}</p>
      <div className="flex flex-wrap -mx-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="px-1 mb-4"
            onClick={() => onImageClick(image)}
          >
            <img src={image.src} alt={image.name} className='w-20 h-20 object-cover'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
