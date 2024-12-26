import React from "react";
import { FaRegHeart, FaInfinity } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
import { message } from "antd";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    message.success(`${product.title} added to cart!`);
  };

  const handleAddToCompare = () => {
    dispatch(addToCompare(product));
    message.success(`${product.title} added to compare!`);
  };
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    message.success(`${product.title} added to wishlist!`);
  };

  return (
    <div className="cart1 group relative">
      <div className="imgBox overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="heartIcon absolute top-2 right-2">
        <FaRegHeart onClick={handleAddToWishlist} />
      </div>
      <div className="box1 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="buttons">
          <button
            onClick={handleAddToCart}
            className="cart-btn text-white pointer"
          >
            Add To Cart
          </button>
        </div>
        <div onClick={handleAddToCompare} className="infinity mx-2">
          <FaInfinity />
        </div>
        <div className="eye mx-2">
          <IoEyeOutline />
        </div>
      </div>
      <div className="cartContent">
        <div className="contentHead hover:text-red-700 cursor-pointer">
          {product.title}
        </div>
        <div>
          <div className="flex gap-5">
            <h3 className="font-bold text-1xl">₹{product.price}</h3>
            <h3 className="line-through">₹{product.oldPrice}</h3>
          </div>
          <div className="flex items-center gap-2">
            <GoStarFill color="yellow" />
            <h4>{product.rating} (0)</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductBanner = ({ products }) => {
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);
  console.log(wishlistItems);
  return (
    <div className="relative">
      {/* Banner Background */}
      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1500x400')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">Product</h1>
          <p className="mt-2 text-lg">
            <span className="text-gray-300">Home</span>{" "}
            <span className="mx-2">//</span> Product
          </p>
        </div>
      </div>

      {/* Product Count Section */}
      <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Products Found: <span className="font-bold">3</span>
          </h2>
        </div>
      </div>

      <div className="cart grid grid-cols-2 md:grid-cols-4 gap-8">
        {wishlistItems.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;
