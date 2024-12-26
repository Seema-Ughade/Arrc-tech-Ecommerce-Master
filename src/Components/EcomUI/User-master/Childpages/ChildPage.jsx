import React, { useState } from "react";
import Sidebar from "../Home/products/Sidebar";
import buddh from "../Assets/buddh.png";
import { FaInfinity, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart, addToCompare, addToWishlist } from "../../../../redux/cartSlice";
import { message } from "antd";

const categories = [
  {
    name: "Electronic",
    subcategories: [],
  },
  {
    name: "Fashion & Beauty",
    subcategories: [
      {
        name: "ACCESSORIES",
        products: [
          {
            name: "White Heels",
            price: 110,
            originalPrice: 530,
            discount: 77,
            rating: 0,
            image: "https://via.placeholder.com/150", // Replace with actual image URL
          },
        ],
      },
      { name: "BAGS", products: [] },
      { name: "CLOTHINGS", products: [] },
      { name: "SHOES", products: [] },
    ],
  },
  { name: "Camera & Photo", subcategories: [] },
  { name: "Smart Phone & Tablet", subcategories: [] },
  { name: "Sport & Outdoor", subcategories: [] },
  { name: "Jewelry & Watches", subcategories: [] },
  { name: "Health & Beauty", subcategories: [] },
  { name: "Books & Office", subcategories: [] },
];

const ChildPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpanded(expanded === category ? null : category);
  };

  const renderProducts = (products) => {
    if (products.length === 0) {
      return <p className="text-gray-500">No Product Found</p>;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                -{product.discount}%
              </span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                ❤
              </button>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center mt-2">
              <p className="text-red-500 text-xl font-bold">₹{product.price}</p>
              <p className="text-gray-500 text-sm line-through ml-2">
                ₹{product.originalPrice}
              </p>
            </div>
            <p className="text-yellow-500 mt-2 text-sm">
              ⭐ {product.rating} (0)
            </p>
          </div>
        ))}
      </div>
    );
  };

  const [products] = useState([
    {
      id: 1,
      title: "Buddha Statue",
      category: "Home Decoration",
      discount: 20,
      image: buddh,
      price: 318.95,
      oldPrice: 423.95,
      rating: 0,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const itemsPerPage = 12; // Number of items per page

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    message.success(`${product.title} added to cart!`);
  };
  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
    message.success(`${product.title} added to compare!`);
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    message.success(`${product.title} added to wishlist!`);
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Product Display */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            Total Products Found:{" "}
            {selectedCategory
              ? categories
                  .flatMap((cat) => cat.subcategories)
                  .find((subcat) => subcat.name === selectedCategory)?.products
                  .length || 0
              : 0}
          </h3>
          <select className="border rounded px-3 py-1">
            <option>Latest Product</option>
            <option>Top Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="mt-4">
          {selectedCategory ? (
            renderProducts(
              categories
                .flatMap((cat) => cat.subcategories)
                .find((subcat) => subcat.name === selectedCategory)?.products
            )
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-12">
              {currentItems.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg p-4 text-center overflow-hidden relative group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-4 rounded-md"
                  />

                  <div className="heartIcon absolute top-2 right-2 ">
                    <FaRegHeart
                      onClick={() => handleAddToWishlist(product)}
                      className="text-red-500 text-xl"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      onClick={() => handleAddToCompare(product)}
                      className="mx-2 text-gray-700 bg-white p-1 rounded-full"
                    >
                      <FaInfinity size={15} />
                    </div>

                    <div className="">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-red-500 p-1 rounded-md text-white pointer"
                      >
                        Add To Cart
                      </button>
                    </div>

                    <div className="mx-2 right-2 text-gray-700 bg-white p-1 rounded-full">
                      <IoEyeOutline size={15} />
                    </div>
                  </div>

                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                  <h4 className="text-md font-semibold text-gray-800 truncate">
                    {product.title}
                  </h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChildPage;
