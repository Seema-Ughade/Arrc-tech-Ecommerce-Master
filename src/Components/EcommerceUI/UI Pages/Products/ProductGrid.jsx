import React, { useState } from "react";
import buddh from "../Assets/buddh.png";
import phone from "../Assets/phn.png";
import jwellery from "../Assets/jw.png";
import smartphone from "../Assets/smrtp.png";
import camera from "../Assets/camera png.png";
import girl1 from "../Assets/g.png";
import girl2 from "../Assets/g2.png";
import girl3 from "../Assets/g3.png";
import headphone from "../Assets/headp.png";
import headphones from "../Assets/headphone.png";
import iphone from "../Assets/iphone.png";
import head from "../Assets/headphone l.png";
import pag13 from "../Assets/pag13.png";
import pag14 from "../Assets/pag14.png";
import pag15 from "../Assets/pag15.png";
import pag16 from "../Assets/pag16.png";
import pag17 from "../Assets/pag17.png";
import pag18 from "../Assets/pag18.png";
import pag19 from "../Assets/pag19.png";
import pag20 from "../Assets/pag20.png";
import pag21 from "../Assets/pag21.png";
import pag22 from "../Assets/pag22.png";
import pag23 from "../Assets/pag23.png";
import pag24 from "../Assets/pag24.png";
import pag25 from "../Assets/pag25.png";
import pag26 from "../Assets/pag26.png";
import pag27 from "../Assets/pag27.png";
import pag28 from "../Assets/pag28.png";
import pag29 from "../Assets/pag29.png";
import pag30 from "../Assets/pag30.png";
import pag31 from "../Assets/pag31.png";
import pag32 from "../Assets/pag32.png";
import pag33 from "../Assets/pag33.png";
import pag34 from "../Assets/pag34.png";
import pag35 from "../Assets/pag35.png";
import pag36 from "../Assets/pag36.png";
import pag37 from "../Assets/pag37.png";
import pag38 from "../Assets/pag38.png";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const categories = [
    "Electronic",
    "Fashion & Beauty",
    "Camera & Photo",
    "Smart Phone & Table",
    "Sport & Outdoor",
    "Jewelry & Watches",
    "Health & Beauty",
    "Books & Office",
    "Toys & Hobbies",
    "Automobiles",
    "Home Decoration",
  ];

  const [products] = useState([
    {
      id: 1,
      name: "Buddha Statue",
      category: "Home Decoration",
      discount: null,
      image: buddh,
    },
    {
      id: 2,
      name: "Luxurious Rose Gold Bracelet",
      category: "Jewelry & Watches",
      discount: 24,
      image: phone,
    },
    {
      id: 3,
      name: "Flagship 5G Smartphone",
      category: "Smart Phone & Table",
      discount: 21,
      image: jwellery,
    },
    {
      id: 4,
      name: "5G Smartphone with 128GB Storage, 48MP Triple Camera",
      category: "Smart Phone & Table",
      discount: 53,
      image: smartphone,
    },
    {
      id: 5,
      name: "54K Ultra HD Mirrorless Camera with Interchangeable Lens",
      category: "Camera & Photo",
      discount: 27,
      image: camera,
    },
    {
      id: 6,
      name: "Chic Off-Shoulder Ruffle Dress with Floral Print",
      category: "Fashion & Beauty",
      discount: 20,
      image: girl1,
    },
    {
      id: 7,
      name: "High-Waisted Skinny Jeans with Distressed Details",
      category: "Fashion & Beauty",
      discount: 33,
      image: girl3,
    },
    {
      id: 8,
      name: "Gaming Headset with Surround Sound, LED Lighting",
      category: "Electronic",
      discount: 38,
      image: headphone,
    },
    {
      id: 9,
      name: "Chic Off-Shoulder Ruffle Dress with Floral Print",
      category: "Fashion & Beauty",
      discount: 20,
      image: girl1,
    },
    {
      id: 10,
      name: "Over-Ear DJ Headphones with Swivel Design",
      category: "Electronic",
      discount: 36,
      image: headphones,
    },
    {
      id: 11,
      name: "Luxury Noise-Cancelling Headphones with Adaptive Sound",
      category: "Electronic",
      discount: 29,
      image: iphone,
    },
    {
      id: 12,
      name: "Professional DSLR Camera Kit with 18-135mm Lens and 4K Video Capability",
      category: "Electronic",
      image: head,
    },
    {
      id: 13,
      name: "Compact Point-and-Shoot Camera with 30x Optical Zoom and Wi-Fi Connectivity",
      category: "Electronic",
      image: pag13,
    },
    {
      id: 14,
      name: "4K UHD Mirrorless Camera with 24MP Sensor and Interchangeable Lenses",
      category: "Electronic",
      image: pag14,
    },
    {
      id: 15,
      name: "Classic Science Fiction Novel with Dystopian Themes – A Must-Read for Genre Fans",
      category: "Electronic",
      image: pag15,
    },
    {
      id: 16,
      name: "Luxury Smartwatch with Stainless Steel Case, Sapphire Crystal, and Advanced Health Features",
      category: "Electronic",
      image: pag16,
    },
    {
      id: 17,
      name: "Hydrating Facial Serum with Vitamin C and Hyaluronic Acid – 30ml",
      category: "Electronic",
      image: pag17,
    },
    {
      id: 18,
      name: "Stacking Rings Toy with Bright Colors and Easy-Grip Handles for Early Learning",
      category: "Electronic",
      image: pag18,
    },
    {
      id: 19,
      name: "Professional Baseball Glove with Premium Leather and Adjustable Wrist Strap",
      category: "Electronic",
      image: pag19,
    },
    {
      id: 20,
      name: "Classic Leather Ankle Boots with Block Heel and Zip Closure – Versatile for Any Occasion",
      category: "Electronic",
      image: pag20,
    },
    {
      id: 21,
      name: "Professional USB Condenser Microphone with Noise Reduction – Perfect for Podcasts and Streaming",
      category: "Electronic",
      image: pag21,
    },
    {
      id: 22,
      name: "Educational Learning Toy with Lights, Sounds, and Interactive Buttons",
      category: "Electronic",
      image: pag22,
    },
    {
      id: 23,
      name: "Elegant Evening Clutch with Metallic Finish and Detachable Chain Strap – Perfect for Events ",
      category: "Electronic",
      image: pag23,
    },
    {
      id: 24,
      name: "Classic Leather Loafers with Memory Foam Insoles – Perfect for Everyday Wear",
      category: "Electronic",
      image: pag24,
    },
    {
      id: 25,
      name: "Organic Cleansing Balm with Aloe Vera and Green Tea Extract – 100ml",
      category: "Electronic",
      image: pag25,
    },
    {
      id: 26,
      name: "Musical Stuffed Animal with Gentle Lullabies and Soft Glow – Perfect for Infants",
      category: "Electronic",
      image: pag26,
    },
    {
      id: 27,
      name: "High-Performance BB Cream with SPF 30 and Skin-Tone Adapting Formula",
      category: "Electronic",
      image: pag27,
    },
    {
      id: 28,
      name: "Mid-Range Mobile with 48MP AI Camera, 6GB RAM, and 4000mAh Fast Charging",
      category: "Electronic",
      image: pag28,
    },
    {
      id: 29,
      name: "Boho Floral Maxi Dress – Summer Breeze",
      category: "Electronic",
      image: pag29,
    },
    {
      id: 30,
      name: "Elegant Velvet Wrap Dress with Belt – Evening Glamour",
      category: "Electronic",
      image: pag30,
    },
    {
      id: 31,
      name: "testt",
      category: "Electronic",
      image: pag31,
    },
    {
      id: 32,
      name: "Test CSV Product",
      category: "Electronic",
      image: pag32,
    },
    {
      id: 33,
      name: "Top Rated product title will be here according to your wish 123",
      category: "Electronic",
      image: pag33,
    },
    {
      id: 34,
      name: "Zain - Digital Agency and Startup HTML Template",
      category: "Electronic",
      image: pag34,
    },
    {
      id: 35,
      name: "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 121",
      category: "Electronic",
      image: pag35,
    },
    {
      id: 36,
      name: "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 1",
      category: "Electronic",
      image: pag36,
    },
    {
      id: 37,
      name: "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 118",
      category: "Electronic",
      image: pag37,
    },
    {
      id: 38,
      name: "Affiliate Product Title will Be Here. Affiliate Product Title will Be Here 117",
      category: "Electronic",
      image: pag38,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const itemsPerPage = 12; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [sort, setSort] = useState("Latest Product");

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 font-sans">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 border-r border-gray-300 pr-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <Link to={"/products"}>
                <li
                  key={index}
                  className="text-sm text-gray-700 cursor-pointer hover:text-red-500 mb-2"
                >
                  {category} +
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
          <div className="text-gray-600">
            Total Products Found: {products.length}
          </div>
          <div>
            <label htmlFor="sort" className="mr-2 text-sm text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Latest Product">Latest Product</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-12">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="relative border border-gray-200 rounded-lg p-4 text-center overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4 rounded-md"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              )}
              <h4 className="text-md font-semibold text-gray-800 truncate">
                {product.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={index + 1 === currentPage}
              className={`px-4 py-2 rounded-md text-sm ${currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductGrid;
