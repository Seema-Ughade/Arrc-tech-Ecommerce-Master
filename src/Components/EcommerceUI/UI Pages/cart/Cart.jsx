import React from "react";
import allimg from "../../../../assets/Assets/allpage.png"

function Cart() {
  return (
    <>
      <div className="object-cover relative">
        <img src={allimg} alt="" className="w-screen h-[300px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">CART</h1>
          <h3 className=" mt-4 bg-white">Home // CART</h3>
        </div>
      </div>
      <div className=" justify-center text-3xl  px-12 py-8 shadow-md bg-gray font-semibold text-center mt-32 mb-32 border">
        Cart is Empty!! Add some products in your Cart
      </div>
    </>
  );
}

export default Cart;
