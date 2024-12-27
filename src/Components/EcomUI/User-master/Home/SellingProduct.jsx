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

// // import sellingproduct1 from "../Assets/sellingproduct1.png";
// // import sellingproduct2 from "../Assets/sellingproduct2.png";
// // import sellingproduct3 from "../Assets/sellingproduct3.png";
// // import sellingproduct4 from "../Assets/sellingproduct4.png";
// // import sellingproduct5 from "../Assets/sellingproduct5.png";
// // import sellingproduct6 from "../Assets/sellingproduct6.png";
// // import sellingproduct7 from "../Assets/sellingproduct7.png";
// // import sellingproduct8 from "../Assets/sellingproduct8.png";
// // import sellingproduct9 from "../Assets/sellingproduct9.png";
// // import sellingproduct10 from "../Assets/sellingproduct10.png";

// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import { Navigation, Pagination } from "swiper/modules";
// // import { GoStarFill } from "react-icons/go";

// // const sellingproduct = () => {
// //   const featured = [
// //     {
// //       img: feature1,
// //       title: "Luxurious Rose Gold Bracelet with Customizable charms,948.95",
// //     },
// //     {
// //       img: feature2,
// //       title:
// //         "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,423.95",
// //     },
// //     {
// //       img: feature4,
// //       title:
// //         "Education Learning Toy with Light, Sounds,and Interactive Buttons,220",
// //     },
// //     {
// //       img: feature5,
// //       title:
// //         "Professional USB Condenser Microphone with Noise Reduction-Perfect for ",
// //     },
// //     {
// //       img: feature7,
// //       title:
// //         "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,320",
// //     },
// //     {
// //       img: feature8,
// //       title:
// //         "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
// //     },
// //     {
// //       img: feature9,
// //       title:
// //         "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
// //     },
// //     {
// //       img: feature10,
// //       title:
// //         "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,280",
// //     },
// //     {
// //       img: feature11,
// //       title:
// //         "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,480",
// //     },
// //     {
// //       img: feature12,
// //       title:
// //         "Elegant Velvent Wrap Dress with Belt-Evening Glamour,155 4000mAh fast Charging,480",
// //     },
// //   ];

// //   return (
// //     <div className="max-w-[80rem] m-auto bg-grey-700 p-10">
// //       <div className="head text-center my-8">
// //         <h2 class="text-3xl font-bold inline-block whitespace-nowrap">
// //           Best Selling Products
// //         </h2>
// //       </div>

// //       <div className="flex justify-center gap-5 mt-10">
// //         <Swiper
// //           modules={[Navigation, Pagination]}
// //           spaceBetween={20}
// //           slidesPerView={1}
// //           breakpoints={{
// //             640: { slidesPerView: 2, spaceBetween: 20 },
// //             768: { slidesPerView: 3, spaceBetween: 20 },
// //             1024: { slidesPerView: 4, spaceBetween: 20 },
// //           }}
// //           className="products-slider"
// //         >
// //           {featured.map((product, index) => (
// //             <SwiperSlide key={index}>
// //               <div className="relative overflow-hidden">
// //                 <div className="relative">
// //                   <img
// //                     src={product.img}
// //                     alt="Product"
// //                     className="w-full h-64 object-cover"
// //                   />
// //                   <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
// //                     <FaRegHeart />
// //                   </div>
// //                 </div>
// //                 <div className="p-4">
// //                   <h3 className="text-sm font-semibold text-gray-800 mb-2">
// //                     {product.title}
// //                   </h3>

// //                   <div className="flex items-center gap-2">
// //                     <GoStarFill color="yellow" />
// //                     <h4>{product.rating} (0)</h4>
// //                   </div>

// //                   <div className="flex justify-between items-center mt-4">
// //                     <button className="absolute bottom-[10rem] right-[6rem] bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition">
// //                       Add To Cart
// //                     </button>
// //                     <div className="flex gap-2">
// //                       <div className="absolute bottom-[10rem] left-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
// //                         <FaInfinity />
// //                       </div>
// //                       <div className="absolute bottom-[10rem] right-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
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

// // export default sellingproduct;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegHeart, FaInfinity } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { GoStarFill } from "react-icons/go";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useDispatch } from "react-redux";
// import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

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
//       className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//       onMouseEnter={() => setIsActive(true)}
//       onMouseLeave={() => setIsActive(false)}
//       onTouchStart={() => setIsActive(true)}
//       onTouchEnd={() => setIsActive(false)}
//     >
//       <div className="relative">
//         {calculateDiscount(product.price, product.discountPrice) && (
//           <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-sm font-medium">
//             -{calculateDiscount(product.price, product.discountPrice)}%
//           </div>
//         )}
        
//         <button
//           onClick={handleAddToWishlist}
//           className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110"
//         >
//           <FaRegHeart className="text-gray-600 hover:text-red-500" />
//         </button>

//         <div className="relative aspect-square overflow-hidden bg-gray-100">
//           <img
//             src={product.featureImage}
//             alt={product.productName}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
          
//           <div className={`absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 transition-all duration-300 ${
//             isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
//           }`}>
//             <button
//               onClick={handleAddToCompare}
//               className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300"
//             >
//               <FaInfinity size={20} />
//             </button>
            
//             <button
//               onClick={handleAddToCart}
//               className="px-6 py-2 bg-white rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium"
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

//       <div className="p-4">
//         <h3 className="text-lg font-medium mb-2 hover:text-red-500 cursor-pointer truncate">
//           {product.productName}
//         </h3>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="text-xl font-bold">
//               ₹{product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
//             </span>
//             {product.discountPrice > 0 && (
//               <span className="text-gray-500 line-through text-sm">
//                 ₹{product.price.toFixed(2)}
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

// const ProductSlider = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/products/');
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
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

//   return (
//     <div className="max-w-8xl px-4 py-12 bg-gray-100">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold inline-block relative pb-2">
//           Best Selling Products
//           <span className="absolute bottom-0 left-1/2 w-24 h-1  transform -translate-x-1/2"></span>
//         </h2>
//       </div>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={24}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 }
//         }}
//         className="products-slider"
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product._id}>
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ProductSlider;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const calculateDiscount = (price, discountPrice) => {
    if (!discountPrice || !price) return null;
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
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Discount Badge */}
        {calculateDiscount(product.price, product.discountPrice) && (
          <div className="absolute top-3 left-3 z-10 bg-black text-white px-2 py-1 text-sm font-medium rounded">
            -{calculateDiscount(product.price, product.discountPrice)}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaRegHeart className={`text-xl transition-colors duration-300 ${isHovered ? 'text-red-500' : 'text-gray-600'}`} />
        </button>

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.featureImage}
            alt={product.productName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Action Buttons */}
          <div 
            className={`absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 px-4 transition-all duration-300 transform
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <button
              onClick={handleAddToCompare}
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <FaInfinity size={18} />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="flex-1 py-2 bg-white rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 font-medium text-sm"
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
        <h3 className="text-base font-medium mb-2 hover:text-red-500 cursor-pointer line-clamp-2 min-h-[48px] transition-colors duration-300">
          {product.productName}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
            </span>
            {product.discountPrice > 0 && (
              <span className="text-sm text-gray-500 line-through">
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

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="max-w-[1240px] mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-3">
          Best Selling Products
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-red-500 transform -translate-x-1/2"></span>
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-red-500'
        }}
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
        className="products-slider !pb-14"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="pb-2">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .products-slider .swiper-pagination-bullet-active {
          background-color: #ef4444;
        }
        .products-slider .swiper-button-next,
        .products-slider .swiper-button-prev {
          color: #ef4444;
        }
        .products-slider .swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;

