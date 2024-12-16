import React from "react";
import allimg from "../Assets/allpage.png";

function Cart() {
  return (
    <>
      <div className="relative">
        <img
          src={allimg}
          alt="Cart Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">CART</h1>
          <h3 className="mt-4 bg-white text-sm md:text-lg">Home // CART</h3>
        </div>
      </div>

      <div className="flex justify-center text-2xl md:text-3xl px-4 sm:px-8 md:px-12 py-8 shadow-md bg-gray-200 font-semibold text-center mt-16 md:mt-32 mb-16 md:mb-32 border rounded-lg">
        Cart is Empty! Add some products to your Cart.
      </div>
    </>
  );
}

export default Cart;
