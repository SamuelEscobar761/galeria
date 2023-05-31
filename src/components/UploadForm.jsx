import React, { useRef } from 'react';

const UploadForm = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="border p-2"
      />
    </div>
  );
};

export default UploadForm;
