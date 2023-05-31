import React from 'react';

const ImageDetails = ({ image, onNameChange }) => {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="flex mt-4">
      <div className="w-3/5 pr-4">
        <img src={image.src} alt={image.name} className="w-full" />
      </div>
      <div className="w-2/5">
        <input
          type="text"
          value={image.name}
          onChange={handleNameChange}
          className="border p-2 mb-2"
        />
        <p>Last modified: {image.date}</p>
      </div>
    </div>
  );
};

export default ImageDetails;
