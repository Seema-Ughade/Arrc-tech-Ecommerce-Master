import React, { useState } from "react";

const ErrorPageBanner = () => {
  const [banner404, setBanner404] = useState(null);
  const [banner500, setBanner500] = useState(null);

  const handleFileUpload = (event, setBanner) => {
    const file = event.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Error Page Banner</h1>
        <div className="space-y-6">
          {/* Banner 404 */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Banner Image 404 *
            </label>
            <p className="text-sm text-gray-500 mb-4">
              (Preferred Size: 600 X 600 Pixel)
            </p>
            <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center bg-gray-50">
              {banner404 ? (
                <img
                  src={banner404}
                  alt="Banner 404"
                  className="w-40 h-40 object-cover rounded-md"
                />
              ) : (
                <span className="text-gray-500">No Image Uploaded</span>
              )}
            </div>
            <label
              className="mt-4 inline-block bg-teal-400 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, setBanner404)}
              />
            </label>
          </div>

          {/* Banner 500 */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Banner Image 500 *
            </label>
            <p className="text-sm text-gray-500 mb-4">
              (Preferred Size: 600 X 600 Pixel)
            </p>
            <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center bg-gray-50">
              {banner500 ? (
                <img
                  src={banner500}
                  alt="Banner 500"
                  className="w-40 h-40 object-cover rounded-md"
                />
              ) : (
                <span className="text-gray-500">No Image Uploaded</span>
              )}
            </div>
            <label
              className="mt-4 inline-block bg-teal-400 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, setBanner500)}
              />
            </label>
          </div>
        </div>
        <button className="mt-6 w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-400">
          Save
        </button>
      </div>
    </div>
  );
};

export default ErrorPageBanner;
