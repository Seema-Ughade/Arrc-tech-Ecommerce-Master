import React from 'react';

const PopupBanner = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-700">Popup Banner</h1>
          <button className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">
            Activated
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 mb-4">Current Background Image *</p>
          <div className="border border-gray-200 rounded-md overflow-hidden w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/300')` }}>
            {/* Replace the placeholder URL with the actual image URL */}
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600">
              Upload Image
            </button>
          </div>
        </div>
        <div className="flex justify-end px-6 py-4 border-t">
          <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
