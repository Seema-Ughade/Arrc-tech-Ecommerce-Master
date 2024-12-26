import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const categories = [
    {
      name: "Electronic",
      subcategories: ["Television", "Refrigerator", "Washing Machine", "Air Conditioners"]
    },
    {
      name: "Fashion & Beauty",
      subcategories: ["Accessories", "Bags", "Clothings", "Shoes"]
    },
    {
      name: "Camera & Photo",
      subcategories: ["DSLR", "Camera Phone", "Action Camera", "Digital Camera"]
    },
    {
      name: "Smart Phone & Table",
      subcategories: ["Apple", "Samsung", "LG", "Sony"]
    },
    {
      name: "Sport & Outdoor",
      subcategories: ["Sports Equipment", "Outdoor Apparel", "Camping & Hiking", "Water Sports"]
    },
    {
      name: "Jewelry & Watches",
      subcategories: ["Fine Jewelry", "Men's Jewelry", "Women's Jewelry"]
    },
    {
      name: "Health & Beauty",
      subcategories: ["Skincare", "Hair Care", "Makeup", "Personal Care"]
    },
    {
      name: "Books & Office",
      subcategories: ["Books", "Office Furniture", "Computers & Electronics", "Office Supplies"]
    },
    {
      name: "Toys & Hobbies",
      subcategories: ["Toys", "Arts & Crafts", "Games & Puzzles", "Collectibles"]
    },
    {
      name: "Automobiles",
      subcategories: ["New Cars", "Used Cars", "Car Accessories", "Fluids & Chemicals"]
    },
    {
      name: "Home Decoration",
      subcategories: ["Wall Art", "Lighting", "Furniture", "Textiles"]
    }
  ];

  const [products] = useState([
    // ... your existing products array
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("Latest Product");
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 font-sans">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 border-r border-gray-300 pr-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-4">
                <Link 
                  to={`/products/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="text-sm text-gray-700 hover:text-red-500 font-semibold"
                >
                  {category.name}
                </Link>
                <ul className="ml-4 mt-2">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        to={`/products/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/${subcategory.toLowerCase().replace(/ /g, '-')}`}
                        className="text-sm text-gray-600 hover:text-red-500"
                      >
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-12">
          {currentItems.map((product) => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="relative border border-gray-200 rounded-lg p-4 text-center overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={index + 1 === currentPage}
              className={`px-4 py-2 rounded-md text-sm ${
                currentPage === index + 1
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
}

export default App;
