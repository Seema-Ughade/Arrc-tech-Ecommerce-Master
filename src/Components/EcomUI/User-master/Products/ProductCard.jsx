import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegHeart, FaInfinity } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { GoStarFill } from 'react-icons/go';
import { addToCart, addToCompare, addToWishlist } from '../../../../redux/cartSlice';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, viewMode = 'grid' }) => {
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

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    message.success(`${product.productName} added to wishlist!`);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`);
  };

  if (viewMode === 'list') {
    return (
      <div className="flex gap-6 bg-white rounded-lg shadow-sm overflow-hidden p-4">
        <div className="relative w-48 h-48 flex-shrink-0">
          <img
            src={product.featureImage}
            alt={product.productName}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={handleAddToWishlist}
            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <FaRegHeart className="text-gray-600 hover:text-red-500" />
          </button>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2 hover:text-red-500 cursor-pointer">
            {product.productName}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">
              ₹{product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
            </span>
            {product.discountPrice > 0 && (
              <span className="text-gray-500 line-through">
                ₹{product.price.toFixed(2)}
              </span>
            )}
            {calculateDiscount(product.price, product.discountPrice) && (
              <span className="bg-black text-white px-2 py-1 text-sm">
                -{calculateDiscount(product.price, product.discountPrice)}%
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Add To Cart
            </button>
            <button
              onClick={handleAddToCompare}
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
            >
              <FaInfinity />
            </button>
            <button
              onClick={handleViewDetails}
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
            >
              <IoEyeOutline />
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            src={product.featureImage}
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

export default ProductCard;

