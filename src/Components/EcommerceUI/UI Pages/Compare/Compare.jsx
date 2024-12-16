import React from 'react';
import allimg from "../Assets/allpage.png"

const NothingToCompare = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 relative">
      {/* Image */}
      <img src={allimg} alt="Banner" className="w-full h-[300px] object-cover mb-6" />

      {/* Banner Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">CART</h1>
        <h3 className="mt-4 bg-white text-sm sm:text-lg">Home // CART</h3>
      </div>

      {/* Main Message */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-16">Nothing to Compare</h1>

      {/* Button */}
      <button className="mt-6 px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300 w-3/4 sm:w-1/2 md:w-1/4">
        Continue Shopping
      </button>
    </div>
  );
};

export default NothingToCompare;
