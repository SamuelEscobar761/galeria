import React from 'react';

const Gallery = ({ images, onImageClick }) => {
  return (
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
  );
};

export default Gallery;
