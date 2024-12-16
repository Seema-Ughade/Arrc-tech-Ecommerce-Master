import React, { useState } from "react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <p className="text-red-500 text-xl font-bold">
                ${product.price}
              </p>
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

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div className="w-full sm:w-1/4 border-r p-4">
        <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <span
                className={`cursor-pointer text-lg ${
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
                      className={`cursor-pointer text-sm sm:text-base ${
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
      <div className="w-full sm:w-3/4 p-4">
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
          <select className="border rounded px-3 py-1 text-sm sm:text-base">
            <option>Latest Product</option>
            <option>Top Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="mt-4">
          {selectedCategory
            ? renderProducts(
                categories
                  .flatMap((cat) => cat.subcategories)
                  .find((subcat) => subcat.name === selectedCategory)?.products
              )
            : <p></p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;