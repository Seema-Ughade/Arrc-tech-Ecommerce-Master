// import React, { useState } from "react";
// import { FaRegHeart, FaInfinity } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { GoStarFill } from "react-icons/go";
// import { useDispatch } from "react-redux";
// import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
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
//     <div className="cart1 group relative bg-white  shadow-md overflow-hidden">
//       <div className="imgBox overflow-hidden bg-gray-900 size-45">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       {/* <div className="heartIcon absolute top-2 right-2">
//         <FaRegHeart
//           onClick={handleAddToWishlist}
//           className="text-red-500 text-xl cursor-pointer"
//         />
//       </div> */}
//       <div className="absolute top-4 right-4 z-10">
//         <button
//           onClick={handleAddToWishlist}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
//         >
//           <FaRegHeart className="text-gray-600 text-lg" />
//         </button>
//       </div>

//       <div className="box1 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-14">
//         <div className="buttons">
//           <button
//             onClick={handleAddToCart}
//             className="cart-btn text-white bg-red-500 px-4 py-2 rounded hover:bg-red-700"
//           >
//             Add To Cart
//           </button>
//         </div>
//         <div
//           onClick={handleAddToCompare}
//           className="infinity mx-2 cursor-pointer"
//         >
//           <FaInfinity />
//         </div>
//         <div className="eye mx-2 cursor-pointer">
//           <IoEyeOutline onClick={() => navigate("/infopage")} />
//         </div>
//       </div>
//       <div className="cartContent p-4">
//         <div className="contentHead hover:text-red-700 cursor-pointer text-lg font-medium">
//           {product.title}
//         </div>
//         <div className="mt-2">
//           <div className="flex gap-5 items-center">
//             <h3 className="font-bold text-lg">₹{product.price}</h3>
//             <h3 className="line-through text-gray-500">₹{product.oldPrice}</h3>
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <GoStarFill color="yellow" />
//             <h4>{product.rating} (0)</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Categories = ({ products }) => {
//   const [selectedCategory, setSelectedCategory] = useState("NEW ARRIVAL");

//   const filteredProducts = products.filter(
//     (product) => selectedCategory === product.category
//   );

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="home4 bg-gray-100 py-8">
//       <div className="head text-center mb-5">
//         <h2 className="sm:text-3xl lg:text-4xl font-bold inline-block whitespace-nowrap">
//           Explore Our Products
//         </h2>
//       </div>

//       <nav className="flex justify-center items-center mb-5">
//         <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-4 text-center">
//           {["NEW ARRIVAL", "TRENDING", "BEST SELLING", "POPULAR"].map(
//             (category) => (
//               <a
//                 href="#!"
//                 key={category}
//                 className={`relative font-semibold text-2xl hover:text-red-500 hover:underline ${
//                   selectedCategory === category ? "text-red-500 underline" : ""
//                 }`}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </a>
//             )
//           )}
//         </div>
//       </nav>

//       <div className="cart grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
//         {filteredProducts.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart, FaInfinity } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
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
    // Navigate to product detail page using product ID
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
              onClick={handleViewDetails} // Navigate to product detail page
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

const Categories = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabs.indexOf(prevTab);
        return tabs[(currentIndex + 1) % tabs.length];
      });
    }, 4000);

    return () => clearInterval(interval);
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
    <div className="container bg-gray-100 px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Our Products
        </h2>
      </div>

      <div className="flex justify-center mb-12 overflow-x-auto">
        <div className="inline-flex gap-4 md:gap-8 flex-wrap ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative  font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap transition-colors duration-300 ${
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

