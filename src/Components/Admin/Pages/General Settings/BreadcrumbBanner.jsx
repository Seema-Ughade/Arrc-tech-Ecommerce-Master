import React from 'react';

const BreadcrumbBanner = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md">
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-semibold text-gray-700">Breadcrumb Banner</h1>
          <p className="text-sm text-gray-500 mt-1">Dashboard &gt; General Settings &gt; Breadcrumb Banner</p>
        </div>
        <div className="px-6 py-8">
          <p className="text-gray-700 mb-4">Banner Image 404 *</p>
          <p className="text-sm text-gray-500 mb-4">(Preferred Size: 600 X 600 Pixel)</p>
          <div className="w-60 h-60 border border-gray-200 rounded-md overflow-hidden relative bg-gray-300">
            {/* Replace placeholder background with actual image URL */}
            <button className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 text-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V8m0 0H8m4 0h4m-6 8h6" />
              </svg>
              <span className="ml-2 text-sm">Upload Image</span>
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

export default BreadcrumbBanner;
