import React from 'react';
// import allimg from "../Assets/allpage.png"
import allimg from "../../../../assets/Assets/allpage.png"


const NothingToCompare = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 relative">
      <img src={allimg} alt="" className="w-screen h-[300px] mb-6"  />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">CART</h1>
          <h3 className=" mt-4 bg-white">Home // CART</h3>
        </div>
      <h1 className="text-5xl font-bold text-gray-800">Nothing to Compare</h1>
      <button className="mt-6  h-50% w-50% px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
        Continue Shopping
      </button>
    </div>
  );
};

export default NothingToCompare;