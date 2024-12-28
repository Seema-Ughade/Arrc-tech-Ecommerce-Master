import React from 'react';
import allimg from "../Assets/allpage.png"
import Comparep from "./Comparep.jsx";

const NothingToCompare = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 relative">
      {/* Image */}
      {/* <img src={allimg} alt="Banner" className="w-full h-[300px] object-cover mb-6" /> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mb-20">
          <h1 className="text-white text-4xl font-bold">Compare</h1>
          <h3 className="mt-4 bg-white px-2 py-1 rounded">Home // Compare</h3>
        </div>

      <Comparep />
    </div>
  );
};

export default NothingToCompare;
