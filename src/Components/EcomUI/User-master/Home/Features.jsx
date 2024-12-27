// // import React from "react";
// // import { FaRegHeart } from "react-icons/fa";
// // import { FaInfinity } from "react-icons/fa6";
// // import { IoEyeOutline } from "react-icons/io5";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import feature1 from "../Assets/Featur1.jpg";
// // import feature2 from "../Assets/Featur2.jpg";
// // import feature3 from "../Assets/Featur3.jpg";
// // import feature4 from "../Assets/Featur4.jpg";
// // import feature5 from "../Assets/Feature5.jpg";
// // import feature6 from "../Assets/Feature6.jpg";
// // import feature7 from "../Assets/Feature7.jpg";
// // import feature8 from "../Assets/Feature8.jpg";
// // import feature9 from "../Assets/Feature9.jpg";
// // import feature10 from "../Assets/Feature10.jpg";
// // import feature11 from "../Assets/Feature11.jpg";
// // import feature12 from "../Assets/Feature12.jpg";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import { Navigation, Pagination } from "swiper/modules";
// // import { GoStarFill } from "react-icons/go";

// // const Features = () => {
// //   const featured = [
// //     {
// //       img: feature1,
// //       title: "Luxurious Rose Gold Bracelet with Customizable charms,₹2948.95",
// //       price: 948.95,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature2,
// //       title:
// //         "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,₹2423.95",
// //       price: 423.95,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature3,
// //       title:
// //         "5G Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,₹2450",
// //       price: 310.95,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature5,
// //       title:
// //         "Professional USB Condenser Microphone with Noise Reduction-Perfect for ",
// //       price: 220.65,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature6,
// //       title:
// //         "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect ",
// //       price: 350.2,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature7,
// //       title:
// //         "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,₹2320",
// //       price: 650.23,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature8,
// //       title:
// //         "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹280",
// //       price: 320.2,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature9,
// //       title:
// //         "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹280",
// //       price: 80,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature10,
// //       title:
// //         "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,₹2280",
// //       price: 280,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature11,
// //       title:
// //         "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,₹2480",
// //       price: 480.5,
// //       rating: 0.0,
// //     },
// //     {
// //       img: feature12,
// //       title:
// //         "Elegant Velvent Wrap Dress with Belt-Evening Glamour,₹2155 4000mAh fast Charging,₹2480",
// //       price: 155,
// //       rating: 0.0,
// //     },
// //   ];

// //   return (
// //     <div className="max-w-[80rem] m-auto">
// //       <div className="head text-center my-6">
// //         <h2 class="text-3xl font-bold inline-block whitespace-nowrap">
// //           Our Featured Products
// //         </h2>
// //       </div>

// //       <div className="flex justify-center gap-5">
// //         <Swiper
// //           modules={[Navigation, Pagination]}
// //           spaceBetween={20}
// //           slidesPerView={1}
// //           pagination={{ clickable: true }}
// //           breakpoints={{
// //             640: { slidesPerView: 2, spaceBetween: 20 },
// //             768: { slidesPerView: 3, spaceBetween: 20 },
// //             1024: { slidesPerView: 4, spaceBetween: 20 },
// //           }}
// //           className="products-slider"
// //         >
// //           {featured.map((product, index) => (
// //             <SwiperSlide key={index}>
// //               <div className="relative overflow-hidden group">
// //                 <div className="relative overflow-hidden">
// //                   <img
// //                     src={product.img}
// //                     alt="Product"
// //                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
// //                   />

// //                   <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
// //                     <FaRegHeart />
// //                   </div>
// //                 </div>

// //                 <div className="p-4">
// //                   <h3 className="text-sm font-semibold text-gray-800 mb-2">
// //                     {product.title}
// //                   </h3>
// //                   <h3 className="text-sm font-semibold text-gray-800 mb-2">
// //                     {product.price}
// //                   </h3>

// //                   <div className="flex items-center gap-2">
// //                     <GoStarFill color="yellow" />
// //                     <h4>{product.rating} (0)</h4>
// //                   </div>

// //                   <div className="flex justify-between items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                     <button className="absolute bottom-[12rem] right-[6rem] bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition">
// //                       Add To Cart
// //                     </button>
// //                     <div className="flex gap-2">
// //                       <div className="absolute bottom-[12rem] left-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md !rounded-md  mx-2">
// //                         <FaInfinity />
// //                       </div>
// //                       <div className="absolute bottom-[12rem] right-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md !rounded-md mx-2">
// //                         <IoEyeOutline />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Features;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaRegHeart, FaInfinity } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { GoStarFill } from "react-icons/go";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { useDispatch } from "react-redux";
// import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isActive, setIsActive] = useState(false);

//   const calculateDiscount = (price, discountPrice) => {
//     if (!discountPrice) return null;
//     const discount = ((price - discountPrice) / price) * 100;
//     return Math.round(discount);
//   };

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     message.success(`${product.productName} added to cart!`);
//   };

//   const handleAddToCompare = () => {
//     dispatch(addToCompare(product));
//     message.success(`${product.productName} added to compare!`);
//   };

//   const handleAddToWishlist = () => {
//     dispatch(addToWishlist(product));
//     message.success(`${product.productName} added to wishlist!`);
//   };

//   return (
//     <div 
//       className="relative bg-white rounded-lg overflow-hidden group"
//       onMouseEnter={() => setIsActive(true)}
//       onMouseLeave={() => setIsActive(false)}
//       onTouchStart={() => setIsActive(true)}
//       onTouchEnd={() => setIsActive(false)}
//     >
//       <div className="relative">
//         {/* Discount Badge */}
//         {calculateDiscount(product.price, product.discountPrice) && (
//           <div className="absolute top-2 left-2 z-10 bg-black text-white px-2 py-1 text-sm">
//             -{calculateDiscount(product.price, product.discountPrice)}%
//           </div>
//         )}
        
//         {/* Wishlist Button */}
//         <button
//           onClick={handleAddToWishlist}
//           className="absolute top-2 right-2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all duration-300"
//         >
//           <FaRegHeart className="text-gray-600 text-xl hover:text-red-500" />
//         </button>

//         {/* Product Image */}
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={product.featureImage}
//             alt={product.productName}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
          
//           {/* Action Buttons */}
//           <div 
//             className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-4 transition-all duration-300 ${
//               isActive ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <button
//               onClick={handleAddToCompare}
//               className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300"
//             >
//               <FaInfinity size={20} />
//             </button>
            
//             <button
//               onClick={handleAddToCart}
//               className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
//             >
//               Add To Cart
//             </button>
            
//             <button
//               onClick={() => navigate("/infopage")}
//               className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300"
//             >
//               <IoEyeOutline size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4 bg-gray-100">
//         <h3 className="text-base  font-medium text-gray-900 hover:text-red-500 cursor-pointer truncate">
//           {product.productName}
//         </h3>
//         <div className="mt-2 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="text-xl font-bold">
//               ${product.discountPrice || product.price}
//             </span>
//             {product.discountPrice && (
//               <span className="text-gray-500 line-through text-sm">
//                 ${product.price}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center gap-1">
//             <GoStarFill className="text-yellow-400" />
//             <span className="text-sm text-gray-600">
//               {product.rating || "0.0"} ({product.reviews?.length || 0})
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Features = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/products/');
//         // Get the last 4 products
//         const lastFourProducts = response.data.slice(-4);
//         setProducts(lastFourProducts);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch products');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[400px]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-8 text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-8xl  px-4 py-12">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Our Featured Products
//         </h2>
//       </div>

//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={24}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 2, spaceBetween: 24 },
//           768: { slidesPerView: 3, spaceBetween: 24 },
//           1024: { slidesPerView: 4, spaceBetween: 24 },
//         }}
//         className="featured-products-slider !pb-12"
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product._id}>
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx>{`
//         .featured-products-slider .swiper-pagination-bullet-active {
//           background-color: #ef4444;
//         }
//         .featured-products-slider .swiper-button-next,
//         .featured-products-slider .swiper-button-prev {
//           color: #ef4444;
//         }
//         .featured-products-slider .swiper-button-disabled {
//           opacity: 0.35;
//           pointer-events: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Features;
































import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart, FaInfinity } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const calculateDiscount = (price, oldPrice) => {
    if (!oldPrice || !price) return null;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
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
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Discount Badge */}
        {calculateDiscount(product.price, product.oldPrice) && (
          <div className="absolute top-3 left-3 z-10 bg-black text-white px-2 py-1 text-sm font-medium rounded">
            -{calculateDiscount(product.price, product.oldPrice)}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
        >
          <FaRegHeart className="text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.featureImage || product.image}
            alt={product.productName || product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Hover Actions */}
          <div 
            className={`absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 transition-all duration-300 transform
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            <button
              onClick={handleAddToCompare}
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <FaInfinity size={18} />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-white rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
            >
              Add To Cart
            </button>
            
            <button
              onClick={handleViewDetails} // Navigate to product detail page
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <IoEyeOutline size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-800 hover:text-red-500 cursor-pointer truncate transition-colors duration-300">
          {product.productName || product.title}
        </h3>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price?.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.oldPrice?.toFixed(2)}
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

const Features = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-2">
          Our Featured Products
          <span className="absolute bottom-0 left-1/2 w-24 h-1  transform -translate-x-1/2"></span>
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="featured-products-slider !pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .featured-products-slider .swiper-pagination-bullet-active {
          background-color: #ef4444;
        }
        .featured-products-slider .swiper-button-next,
        .featured-products-slider .swiper-button-prev {
          color: transparent;
        }
        .featured-products-slider .swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Features;

