import React, { useState } from "react";

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
    { id: 1, name: "Buddha Statue", category: "Home Decoration", discount: null, image: "/buddh.png" },
    { id: 2, name: "Luxurious Rose Gold Bracelet", category: "Jewelry & Watches", discount: 24, image: "/phone.png" },
    // Add your remaining products here...
  ]);

  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const itemsPerPage = 12; // Number of items per page

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const [sort, setSort] = useState("Latest Product");

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 font-sans">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 border-r border-gray-300 pr-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 cursor-pointer hover:text-red-500 mb-2"
              >
                {category} +
              </li>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="relative border border-gray-200 rounded-lg p-4 text-center"
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
              <h4 className="text-md font-semibold text-gray-800">
                {product.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={index + 1 === currentPage}
              className={`p-2 m-1 border rounded-md text-sm ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
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
