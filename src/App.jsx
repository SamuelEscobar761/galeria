import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm';
import ImageDetails from './components/ImageDetails';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images'));
    if (storedImages) {
      setImages(storedImages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images));
  }, [images]);

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const newImage = {
        src: reader.result,
        name: file.name,
        date: new Date().toLocaleDateString(),
      };
      setImages((prevImages) => [newImage, ...prevImages]);
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleNameChange = (newName) => {
    setSelectedImage((prevImage) => ({
      ...prevImage,
      name: newName,
      date: new Date().toLocaleDateString(),
    }));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <UploadForm onImageUpload={handleImageUpload} />
      <Gallery images={images} onImageClick={handleImageClick} />
      {selectedImage && (
        <ImageDetails
          image={selectedImage}
          onNameChange={handleNameChange}
        />
      )}
    </div>
  );
}

export default App;
