// import React, { useState } from "react";
// import buddh from "../Assets/buddh.png";
// import phone from "../Assets/phn.png";
// import jwellery from "../Assets/jw.png";
// import smartphone from "../Assets/smrtp.png";
// import camera from "../Assets/camera png.png";
// import girl1 from "../Assets/g.png";
// import girl2 from "../Assets/g2.png";
// import girl3 from "../Assets/g3.png";
// import headphone from "../Assets/headp.png";
// import headphones from "../Assets/headphone.png";
// import iphone from "../Assets/iphone.png";
// import head from "../Assets/headphone l.png";
// import pag13 from "../Assets/pag13.png";
// import pag14 from "../Assets/pag14.png";
// import pag15 from "../Assets/pag15.png";
// import pag16 from "../Assets/pag16.png";
// import pag17 from "../Assets/pag17.png";
// import pag18 from "../Assets/pag18.png";
// import pag19 from "../Assets/pag19.png";
// import pag20 from "../Assets/pag20.png";
// import pag21 from "../Assets/pag21.png";
// import pag22 from "../Assets/pag22.png";
// import pag23 from "../Assets/pag23.png";
// import pag24 from "../Assets/pag24.png";
// import pag25 from "../Assets/pag25.png";
// import pag26 from "../Assets/pag26.png";
// import pag27 from "../Assets/pag27.png";
// import pag28 from "../Assets/pag28.png";
// import pag29 from "../Assets/pag29.png";
// import pag30 from "../Assets/pag30.png";
// import pag31 from "../Assets/pag31.png";
// import pag32 from "../Assets/pag32.png";
// import pag33 from "../Assets/pag33.png";
// import pag34 from "../Assets/pag34.png";
// import pag35 from "../Assets/pag35.png";
// import pag36 from "../Assets/pag36.png";
// import pag37 from "../Assets/pag37.png";
// import pag38 from "../Assets/pag38.png";
// import { Link } from "react-router-dom";
// import Sidebar from "../Home/products/Sidebar";
// import { FaInfinity, FaList, FaRegHeart, FaTh } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { useDispatch } from "react-redux";
// import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
// import { message } from "antd";

// const ProductGrid = () => {
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     message.success(`${product.title} added to cart!`);
//   };
//   const handleAddToCompare = (product) => {
//     dispatch(addToCompare(product));
//     message.success(`${product.title} added to compare!`);
//   };

//   const handleAddToWishlist = (product) => {
//     dispatch(addToWishlist(product));
//     message.success(`${product.title} added to wishlist!`);
//   };

//   const categories = [
//     "Electronic",
//     "Fashion & Beauty",
//     "Camera & Photo",
//     "Smart Phone & Table",
//     "Sport & Outdoor",
//     "Jewelry & Watches",
//     "Health & Beauty",
//     "Books & Office",
//     "Toys & Hobbies",
//     "Automobiles",
//     "Home Decoration",
//   ];

//   const [products] = useState([
//     {
//       id: 1,
//       title: "Buddha Statue",
//       category: "Home Decoration",
//       discount: null,
//       image: buddh,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 2,
//       title: "Luxurious Rose Gold Bracelet",
//       category: "Jewelry & Watches",
//       discount: 24,
//       image: phone,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 3,
//       title: "Flagship 5G Smartphone",
//       category: "Smart Phone & Table",
//       discount: 21,
//       image: jwellery,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 4,
//       title: "5G Smartphone with 128GB Storage, 48MP Triple Camera",
//       category: "Smart Phone & Table",
//       discount: 53,
//       image: smartphone,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 5,
//       title: "54K Ultra HD Mirrorless Camera with Interchangeable Lens",
//       category: "Camera & Photo",
//       discount: 27,
//       image: camera,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 6,
//       title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
//       category: "Fashion & Beauty",
//       discount: 20,
//       image: girl1,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 7,
//       title: "High-Waisted Skinny Jeans with Distressed Details",
//       category: "Fashion & Beauty",
//       discount: 33,
//       image: girl3,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 8,
//       title: "Gaming Headset with Surround Sound, LED Lighting",
//       category: "Electronic",
//       discount: 38,
//       image: headphone,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 9,
//       title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
//       category: "Fashion & Beauty",
//       discount: 20,
//       image: girl1,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 10,
//       title: "Over-Ear DJ Headphones with Swivel Design",
//       category: "Electronic",
//       discount: 36,
//       image: headphones,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 11,
//       title: "Luxury Noise-Cancelling Headphones with Adaptive Sound",
//       category: "Electronic",
//       discount: 29,
//       image: iphone,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 12,
//       title:
//         "Professional DSLR Camera Kit with 18-135mm Lens and 4K Video Capability",
//       category: "Electronic",
//       image: head,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 13,
//       title:
//         "Compact Point-and-Shoot Camera with 30x Optical Zoom and Wi-Fi Connectivity",
//       category: "Electronic",
//       image: pag13,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 14,
//       title:
//         "4K UHD Mirrorless Camera with 24MP Sensor and Interchangeable Lenses",
//       category: "Electronic",
//       image: pag14,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 15,
//       title:
//         "Classic Science Fiction Novel with Dystopian Themes – A Must-Read for Genre Fans",
//       category: "Electronic",
//       image: pag15,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 16,
//       title:
//         "Luxury Smartwatch with Stainless Steel Case, Sapphire Crystal, and Advanced Health Features",
//       category: "Electronic",
//       image: pag16,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 17,
//       title: "Hydrating Facial Serum with Vitamin C and Hyaluronic Acid – 30ml",
//       category: "Electronic",
//       image: pag17,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 18,
//       title:
//         "Stacking Rings Toy with Bright Colors and Easy-Grip Handles for Early Learning",
//       category: "Electronic",
//       image: pag18,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 19,
//       title:
//         "Professional Baseball Glove with Premium Leather and Adjustable Wrist Strap",
//       category: "Electronic",
//       image: pag19,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 20,
//       title:
//         "Classic Leather Ankle Boots with Block Heel and Zip Closure – Versatile for Any Occasion",
//       category: "Electronic",
//       image: pag20,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 21,
//       title:
//         "Professional USB Condenser Microphone with Noise Reduction – Perfect for Podcasts and Streaming",
//       category: "Electronic",
//       image: pag21,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 22,
//       title:
//         "Educational Learning Toy with Lights, Sounds, and Interactive Buttons",
//       category: "Electronic",
//       image: pag22,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 23,
//       title:
//         "Elegant Evening Clutch with Metallic Finish and Detachable Chain Strap – Perfect for Events ",
//       category: "Electronic",
//       image: pag23,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 24,
//       title:
//         "Classic Leather Loafers with Memory Foam Insoles – Perfect for Everyday Wear",
//       category: "Electronic",
//       image: pag24,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 25,
//       title:
//         "Organic Cleansing Balm with Aloe Vera and Green Tea Extract – 100ml",
//       category: "Electronic",
//       image: pag25,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 26,
//       title:
//         "Musical Stuffed Animal with Gentle Lullabies and Soft Glow – Perfect for Infants",
//       category: "Electronic",
//       image: pag26,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 27,
//       title:
//         "High-Performance BB Cream with SPF 30 and Skin-Tone Adapting Formula",
//       category: "Electronic",
//       image: pag27,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 28,
//       title:
//         "Mid-Range Mobile with 48MP AI Camera, 6GB RAM, and 4000mAh Fast Charging",
//       category: "Electronic",
//       image: pag28,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 29,
//       title: "Boho Floral Maxi Dress – Summer Breeze",
//       category: "Electronic",
//       image: pag29,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 30,
//       title: "Elegant Velvet Wrap Dress with Belt – Evening Glamour",
//       category: "Electronic",
//       image: pag30,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 31,
//       title: "testt",
//       category: "Electronic",
//       image: pag31,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 32,
//       title: "Test CSV Product",
//       category: "Electronic",
//       image: pag32,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 33,
//       title: "Top Rated product title will be here according to your wish 123",
//       category: "Electronic",
//       image: pag33,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 34,
//       title: "Zain - Digital Agency and Startup HTML Template",
//       category: "Electronic",
//       image: pag34,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 35,
//       title:
//         "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 121",
//       category: "Electronic",
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//       image: pag35,
//     },
//     {
//       id: 36,
//       title:
//         "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 1",
//       category: "Electronic",
//       image: pag36,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 37,
//       title:
//         "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 118",
//       category: "Electronic",
//       image: pag37,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//     {
//       id: 38,
//       title:
//         "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 117",
//       category: "Electronic",
//       image: pag38,
//       price: 318.95,
//       oldPrice: 423.95,
//       rating: 0,
//     },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
//   const itemsPerPage = 12; // Number of items per page

//   // Calculate total pages
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   // Determine the items for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

//   // Function to handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const [sort, setSort] = useState("Latest Product");
//   const [view, setView] = useState("grid");

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 font-sans">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Product Grid */}
//       <div className="flex-1">
//         {/* Header */}
//         <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
//           <div className="text-gray-600">
//             Total Products Found: {products.length}
//           </div>

//           <div className="flex justify-center items-center gap-2">
//             <label htmlFor="sort" className="mr-2 text-sm text-gray-700">
//               Sort by:
//             </label>
//             <select
//               id="sort"
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             >
//               <option value="Latest Product">Latest Product</option>
//               <option value="Price: Low to High">Price: Low to High</option>
//               <option value="Price: High to Low">Price: High to Low</option>
//             </select>

//             {/* View toggle buttons */}
//             <button
//               onClick={() => setView("list")}
//               className={`flex items-center justify-center w-12 h-12 rounded-md border ${
//                 view === "list"
//                   ? "bg-red-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               <FaList size={20} />
//             </button>
//             <button
//               onClick={() => setView("grid")}
//               className={`flex items-center justify-center w-12 h-12 rounded-md border ${
//                 view === "grid"
//                   ? "bg-red-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               <FaTh size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Products */}
//         {view === "grid" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-12">
//             {currentItems.map((product) => (
//               <div
//                 key={product.id}
//                 className="border border-gray-200 rounded-lg p-4 text-center overflow-hidden relative group"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-40 object-contain mb-4 rounded-md"
//                 />
//                 <div className="heartIcon absolute top-2 right-2">
//                   <FaRegHeart
//                     onClick={() => handleAddToWishlist(product)}
//                     className="text-red-500 text-xl"
//                   />
//                 </div>
//                 <div className="absolute inset-x-0 bottom-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div
//                     onClick={() => handleAddToCompare(product)}
//                     className="mx-2 text-gray-700 bg-white p-1 rounded-full"
//                   >
//                     <FaInfinity size={15} />
//                   </div>
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="bg-red-500 p-1 rounded-md text-white pointer"
//                   >
//                     Add To Cart
//                   </button>
//                   <div className="mx-2 right-2 text-gray-700 bg-white p-1 rounded-full">
//                     <IoEyeOutline size={15} />
//                   </div>
//                 </div>
//                 {product.discount && (
//                   <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                     -{product.discount}%
//                   </div>
//                 )}
//                 <h4 className="text-md font-semibold text-gray-800 truncate">
//                   {product.title}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {currentItems.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex border border-gray-200 rounded-lg p-4 items-center gap-4"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-20 h-20 object-contain rounded-md"
//                 />
//                 <div className="flex-1">
//                   <h4 className="text-md font-semibold text-gray-800">
//                     {product.title}
//                   </h4>
//                   <div className="text-gray-600 text-sm">
//                   ₹{product.price.toFixed(2)}{" "}
//                     <span className="line-through text-gray-400">
//                     ₹{product.oldPrice.toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className="bg-red-500 p-2 rounded-md text-white"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Pagination Controls */}
//         <div className="mt-6 flex justify-center gap-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index + 1)}
//               disabled={index + 1 === currentPage}
//               className={`px-4 py-2 rounded-md text-sm ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;


import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, viewMode }) => {
  return (
    <div className={
      viewMode === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-6'
    }>
      {products.map((product) => (
        <ProductCard 
          key={product._id}
          product={product}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

