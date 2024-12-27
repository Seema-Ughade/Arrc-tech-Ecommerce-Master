// import React from "react";
// import { FaRegHeart, FaInfinity } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { GoStarFill } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
// import { message } from "antd";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     message.success(`${product.title} added to cart!`);
//   };

//   const handleAddToCompare = () => {
//     dispatch(addToCompare(product));
//     message.success(`${product.title} added to compare!`);
//   };
//   const handleAddToWishlist = () => {
//     dispatch(addToWishlist(product));
//     message.success(`${product.title} added to wishlist!`);
//   };

//   return (
//     <div className="cart1 group relative">
//       <div className="imgBox overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <div className="heartIcon absolute top-2 right-2">
//         <FaRegHeart onClick={handleAddToWishlist} />
//       </div>
//       <div className="box1 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <div className="buttons">
//           <button
//             onClick={handleAddToCart}
//             className="cart-btn text-white pointer"
//           >
//             Add To Cart
//           </button>
//         </div>
//         <div onClick={handleAddToCompare} className="infinity mx-2">
//           <FaInfinity />
//         </div>
//         <div className="eye mx-2">
//           <IoEyeOutline />
//         </div>
//       </div>
//       <div className="cartContent">
//         <div className="contentHead hover:text-red-700 cursor-pointer">
//           {product.title}
//         </div>
//         <div>
//           <div className="flex gap-5">
//             <h3 className="font-bold text-1xl">₹{product.price}</h3>
//             <h3 className="line-through">₹{product.oldPrice}</h3>
//           </div>
//           <div className="flex items-center gap-2">
//             <GoStarFill color="yellow" />
//             <h4>{product.rating} (0)</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductBanner = ({ products }) => {
//   const wishlistItems = useSelector((state) => state.cart.wishlistItems);
//   console.log(wishlistItems);
//   return (
//     <div className="relative">
//       {/* Banner Background */}
//       <div
//         className="h-72 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('https://via.placeholder.com/1500x400')", // Replace with actual image URL
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         {/* Banner Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//           <h1 className="text-5xl font-bold">Product</h1>
//           <p className="mt-2 text-lg">
//             <span className="text-gray-300">Home</span>{" "}
//             <span className="mx-2">//</span> Product
//           </p>
//         </div>
//       </div>

//       {/* Product Count Section */}
//       <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-screen-xl mx-auto">
//           <h2 className="text-xl font-semibold text-gray-800">
//             Total Products Found: <span className="font-bold">3</span>
//           </h2>
//         </div>
//       </div>

//       <div className="cart grid grid-cols-2 md:grid-cols-4 gap-8">
//         {wishlistItems.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductBanner;


import React, { useState } from "react";
import { FaRegHeart, FaInfinity } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCompare, addToWishlist, removeFromWishlist } from "../../../../redux/cartSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, isWishlist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    message.success(`${product.productName} added to cart!`);
  };

  const handleAddToCompare = () => {
    dispatch(addToCompare(product));
    message.success(`${product.productName} added to compare!`);
  };

  const handleWishlist = () => {
    if (isWishlist) {
      dispatch(removeFromWishlist(product._id));
      message.success(`${product.productName} removed from wishlist!`);
    } else {
      dispatch(addToWishlist(product));
      message.success(`${product.productName} added to wishlist!`);
    }
  };

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`);
  };

  const calculateDiscount = (price, discountPrice) => {
    if (!discountPrice) return null;
    const discount = ((price - discountPrice) / price) * 100;
    return Math.round(discount);
  };

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <div className="relative">
        {calculateDiscount(product.price, product.discountPrice) && (
          <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-sm font-medium">
            -{calculateDiscount(product.price, product.discountPrice)}%
          </div>
        )}
        
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
        >
          <FaRegHeart className={`${isWishlist ? 'text-red-500' : 'text-gray-600'} hover:text-red-500`} />
        </button>

        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.featureImage || "/placeholder.svg?height=200&width=200"}
            alt={product.productName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className={`absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 transition-all duration-300 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}>
            <button
              onClick={handleAddToCompare}
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              <FaInfinity size={20} />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-white rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium"
            >
              Add To Cart
            </button>
            
            <button
              onClick={handleViewDetails}
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              <IoEyeOutline size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 hover:text-red-500 cursor-pointer truncate">
          {product.productName}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              ₹{product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
            </span>
            {product.discountPrice > 0 && (
              <span className="text-gray-500 line-through text-sm">
                ₹{product.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <GoStarFill className="text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating || "0.0"} ({product.reviews?.length || 0})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductBanner = () => {
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);

  return (
    <div className="relative">
      {/* Banner Background */}
      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1500x400')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 "></div>
        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">Wishlist</h1>
          <p className="mt-2 text-lg">
            <span className="text-gray-300">Home</span>{" "}
            <span className="mx-2">//</span> Wishlist
          </p>
        </div>
      </div>

      {/* Product Count Section */}
      <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Products Found: <span className="font-bold">{wishlistItems.length}</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product._id} product={product} isWishlist={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;

