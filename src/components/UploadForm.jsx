import React, { useRef } from 'react';

const UploadForm = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    const files = Array.from(event.dataTransfer.items)
      .filter((item) => item.kind === 'file')
      .map((item) => item.getAsFile());
  
    if (files.length > 0) {
      onImageUpload(files[0]);
    }
  };
  

  return (
    <div className="mb-4 relative">
      <label htmlFor="fileInput" className="cursor-pointer">
        <div
          className="h-96 flex items-center justify-center border-dashed border-2 border-gray-400 rounded-lg p-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <span className="text-gray-600">Arrastra una imagen o haz clic para seleccionar un archivo</span>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default UploadForm;
