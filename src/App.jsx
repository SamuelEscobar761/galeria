import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm';
import ImageDetails from './components/ImageDetails';

function App() {
  const [images, setImages] = useState(() => {
    const storedImages = JSON.parse(localStorage.getItem('images'));
    return storedImages || [];
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState("");

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

  const handleDeleteImage = (selectedImage) => {
    setImages(prevImages => prevImages.filter(img => img !== selectedImage));
    setSelectedImage(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageName(image.name.split('.')[0])
  };

  const handleNameChange = (newName) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.map((img) => {
        if (img === selectedImage) {
          return {
            ...img,
            name: newName,
            date: new Date().toLocaleDateString(),
          };
        }
        return img;
      });
      return updatedImages;
    });
    setSelectedImage(null);
  };
  

  return (
    <div className="mx-auto p-4">
      {!selectedImage ? (
        <>
          <UploadForm onImageUpload={handleImageUpload} />
          <Gallery images={images} onImageClick={handleImageClick} />
        </>
      ):(
        <ImageDetails
          image={selectedImage}
          onNameChange={handleNameChange}
          handleDeleteImage={() => {handleDeleteImage(selectedImage)}}
          setSelectedImage={setSelectedImage}
          imageName={imageName}
          setImageName={setImageName}
        />
      )}
    </div>
  );
}

export default App;
