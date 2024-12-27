// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     image: "/placeholder.svg?height=200&width=200",
//     name: "Gaming Headset With Surround Sound, LED Lighting, And Noise-Cancelling Mic",
//     price: "₹25",
//     rating: "2.5 (5 Rev)",
//     description: "Product Description:Get a crystal-clear gaming experience with this high-performance gaming headset featuring surround sound, LED lighting, and noise-cancelling mic. Designed for lasting comfort, this headset offers an adjustable headband, soft ear cushions, and premium audio quality that puts you in the heart of the action..."
//   },
//   {
//     id: 2,
//     image: "/placeholder.svg?height=200&width=200",
//     name: "Classic Science Fiction Novel With Dystopian Themes – A Must-Read For Genre Fans",
//     price: "₹15",
//     rating: "2.5 (5 Rev)",
//     description: "Dive into a world of intrigue, rebellion and dystopian themes with this compelling Science Fiction novel. Our dystopian themes will keep you engaged from start to finish. Perfect for fans of the genre, this book combines rich storytelling with thought-provoking ideas..."
//   },
//   {
//     id: 3,
//     image: "/placeholder.svg?height=200&width=200",
//     name: "Classic Leather Ankle Boots With Block Heel And Zip Fastening – Perfect For Any Occasion",
//     price: "₹25",
//     rating: "2.5 (5 Rev)",
//     description: "Add style and flair with our Classic Leather Ankle Boots. These versatile boots are designed with a perfect blend of style and comfort, featuring premium leather construction and a comfortable block heel..."
//   }
// ]

// export default function ProductComparison() {
//   const compareItems = useSelector((state) => state.cart.compareItems);
//   console.log(compareItems);
//   const dispatch = useDispatch();

//   const [addedProducts, setAddedProducts] = useState([])

//   const toggleProduct = (productId) => {
//     setAddedProducts(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     )
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {compareItems.map((product) => (
//           <div key={product.id} className="border rounded-lg p-4 space-y-4">
//             {/* Product Image */}
//             <div className="product-image">
//               <div className="text-sm text-gray-500 mb-2">product image</div>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="w-full object-cover rounded-lg"
//               />
//             </div>

//             {/* Product Name */}
//             <div className="product-name">
//               <div className="text-sm text-gray-500 mb-2">product name</div>
//               <h2 className="text-sm font-medium">{product.name}</h2>
//             </div>

//             {/* Product Price */}
//             <div className="product-price">
//               <div className="text-sm text-gray-500 mb-2">product price</div>
//               <span className="text-sm">{product.price}</span>
//             </div>

//             {/* Rating */}
//             <div className="rating">
//               <div className="text-sm text-gray-500 mb-2">Rating</div>
//               <span className="text-sm">{product.rating}</span>
//             </div>

//             {/* Description */}
//             <div className="description">
//               <div className="text-sm text-gray-500 mb-2">Description</div>
//               <p className="text-sm text-gray-600">{product.description}</p>
//             </div>

//             {/* Action */}
//             <div className="action space-y-2">
//               <div className="text-sm text-gray-500 mb-2">Action</div>
//               <button
//                 onClick={() => toggleProduct(product.id)}
//                 className="w-full bg-black text-white py-2 px-4 rounded text-sm"
//               >
//                 Add To Cart
//               </button>
//               <button
//                 onClick={() => toggleProduct(product.id)}
//                 className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegHeart, FaInfinity } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { addToCart, addToCompare, addToWishlist, removeFromCompare } from '../../../../redux/cartSlice';
import { message } from 'antd';
import allimg from "../Assets/allpage.png";

const ProductCard = ({ product, isCompare = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const calculateDiscount = (price, discountPrice) => {
    if (!discountPrice) return null;
    const discount = ((price - discountPrice) / price) * 100;
    return Math.round(discount);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    message.success(`${product.productName} added to cart!`);
  };

  const handleAddToCompare = () => {
    dispatch(addToCompare(product));
    message.success(`${product.productName} added to compare!`);
  };

  const handleRemoveFromCompare = () => {
    dispatch(removeFromCompare(product._id));
    message.success(`${product.productName} removed from compare!`);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    message.success(`${product.productName} added to wishlist!`);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`);
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
          onClick={handleAddToWishlist}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
        >
          <FaRegHeart className="text-gray-600 hover:text-red-500" />
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
            {isCompare ? (
              <button
                onClick={handleRemoveFromCompare}
                className="px-6 py-2 bg-white rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium"
              >
                Remove
              </button>
            ) : (
              <>
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
              </>
            )}
            
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

const ProductComparison = () => {
  const compareItems = useSelector((state) => state.cart.compareItems);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompareItems = async () => {
      try {
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching compare items:", err);
        setError("Failed to load compare items. Please try again later.");
        setLoading(false);
      }
    };

    fetchCompareItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative">
        <img src={allimg} alt="Banner" className="w-full h-[300px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Compare</h1>
          <h3 className="mt-4 bg-white px-2 py-1 rounded">Home // Compare</h3>
        </div>
      </div>

      {/* Compare Items */}
      <div className="container mx-auto p-4">
        {compareItems.length === 0 ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">No items to compare</h2>
            <p className="text-gray-600">Add some items to start comparing!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {compareItems.map((product) => (
              <ProductCard key={product._id} product={product} isCompare={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComparison;

