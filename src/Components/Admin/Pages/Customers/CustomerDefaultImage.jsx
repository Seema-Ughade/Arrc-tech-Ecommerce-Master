import React, { useState, useRef } from 'react';

const CustomerDefaultImage = () => {
  const [previewImage, setPreviewImage] = useState('demo.geniusocean.com/ecommerce-king1/assets/images/1567655174profile.jpg)');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = async () => {
    if (!selectedFile) {
      alert('Please select an image first');
      return;
    }

    try {
      // Create form data
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Here you would typically send the formData to your server
      console.log('Saving image:', selectedFile);
      alert('Image saved successfully!');
    } catch (error) {
      console.error('Error saving image:', error);
      alert('Error saving image. Please try again.');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Customer Default Image</h1>
        {/* <div className="flex items-center text-gray-600">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Customers</span>
          <span className="mx-2">{'>'}</span>
          <span>Customer Default Image</span>
        </div> */}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Customer Image <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-1">
              (This image will be displayed if users do not upload profile photo)
            </p>
            <p className="text-sm text-gray-600 mb-4">
              (Preferred Size: 600 X 600 Pixel)
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 mb-4 relative">
              <img
                src={previewImage}
                alt="Customer default"
                className="w-full h-full object-cover rounded-full border-4 border-gray-200"
              />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />

            <button
              onClick={handleUploadClick}
              className="mb-6 bg-white border border-gray-300 rounded px-4 py-2 flex items-center gap-2 hover:bg-gray-50"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Upload Image
            </button>

            <button
              onClick={handleSave}
              className="w-full bg-teal-400 text-white py-2 px-4 rounded hover:bg-teal-800 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDefaultImage;

