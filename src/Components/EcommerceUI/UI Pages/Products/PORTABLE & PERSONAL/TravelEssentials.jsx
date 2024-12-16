import React, { useState } from "react";
import img1 from "../../Assets/pag23.png";






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
            image: img1
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

const ProductCategories = () => {
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
              <p className="text-red-500 text-xl font-bold">${product.price}</p>
              <p className="text-gray-500 text-sm line-through ml-2">
                ${product.originalPrice}
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
      name: "Elegant Evening Clutch with Metallic Finish and Detachable Chain Strap – Perfect for Events...",
      category: "Portable & Personal",
      discount: -46,
      image: img1,
      
    },
    
    

    
  ]);

  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const itemsPerPage = 12; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4">
        <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <span
                className={`cursor-pointer ${
                  expanded === category.name ? "text-red-500" : "text-black"
                }`}
                onClick={() => toggleCategory(category.name)}
              >
                {category.name}{" "}
                {category.subcategories.length > 0 &&
                  (expanded === category.name ? "-" : "+")}
              </span>
              {expanded === category.name && (
                <ul className="ml-4 space-y-2">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className={`cursor-pointer ${
                        selectedCategory === subcategory.name
                          ? "text-red-500"
                          : "text-black"
                      }`}
                      onClick={() => setSelectedCategory(subcategory.name)}
                    >
                      {subcategory.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Display */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            Total Products Found:{""}
            {selectedCategory
              ? categories
                  .flatMap((cat) => cat.subcategories)
                  .find((subcat) => subcat.name === selectedCategory)?.products
                  .length || 0
              : 1}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
