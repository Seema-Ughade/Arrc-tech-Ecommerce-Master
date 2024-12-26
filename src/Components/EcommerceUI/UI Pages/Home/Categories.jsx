import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart, FaInfinity } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";

const Home4 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("NEW ARRIVAL");

  const tabs = ["NEW ARRIVAL", "TRENDING", "BEST SELLING", "POPULAR"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  const calculateDiscount = (price, discountPrice) => {
    if (!discountPrice) return null;
    const discount = ((price - discountPrice) / price) * 100;
    return Math.round(discount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Explore Our Products
        </h2>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative font-semibold text-xl md:text-2xl transition-colors duration-300 ${
                activeTab === tab ? 'text-red-500' : 'hover:text-red-500'
              }`}
            >
              {tab}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transition-transform duration-300 ${
                  activeTab === tab ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="group relative bg-white rounded-lg overflow-hidden">
            {/* Discount Badge */}
            {calculateDiscount(product.price, product.discountPrice) && (
              <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-sm font-medium">
                -{calculateDiscount(product.price, product.discountPrice)}%
              </div>
            )}
            
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.featureImage}
                alt={product.productName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
                <FaRegHeart className="text-gray-600 hover:text-red-500" />
              </button>

              {/* Quick Action Buttons */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300">
                  <FaInfinity size={20} />
                </button>
                <button className="px-6 py-2 bg-white rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium">
                  Add To Cart
                </button>
                <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300">
                  <IoEyeOutline size={20} />
                </button>
              </div>
            </div>

            {/* Product Details */}
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
                  <span className="text-sm text-gray-600">0.0 (0)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home4;

