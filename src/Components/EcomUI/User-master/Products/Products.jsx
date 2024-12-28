// import React from "react";
// import allimg from "../Assets/allpage.png";
// import "./Product.css";
// import ProductGrid from "./ProductGrid";

// const Products = () => {
//   return (
//     <div className="products">
//       <div className="productHeader">
//         <img src={allimg} alt="" className="pimg lg:h-[50vh] md:h-[30vh] sm:h-[25vh] "/>

//         <ProductGrid />
      
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGrid from '../Products/ProductGrid';
import Sidebar from '../Home/products/Sidebar';
import { Grid, List } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [usedCategories, setUsedCategories] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      filterProducts();
    }
  }, [selectedCategory, products]);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/products');
      setProducts(response.data);
      setTotalProducts(response.data.length);
      extractUsedCategories(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractUsedCategories = (products) => {
    const categoriesSet = new Set();
    const subCategoriesSet = new Set();
    const childCategoriesSet = new Set();

    products.forEach(product => {
      if (product.category) categoriesSet.add(product.category);
      if (product.subCategory) subCategoriesSet.add(product.subCategory);
      if (product.childCategory) childCategoriesSet.add(product.childCategory);
    });

    setUsedCategories({
      categories: Array.from(categoriesSet),
      subCategories: Array.from(subCategoriesSet),
      childCategories: Array.from(childCategoriesSet)
    });
  };

  const filterProducts = () => {
    if (!selectedCategory) {
      setTotalProducts(products.length);
      return;
    }

    const filteredProducts = products.filter(product => 
      product.category === selectedCategory ||
      product.subCategory === selectedCategory ||
      product.childCategory === selectedCategory
    );

    setTotalProducts(filteredProducts.length);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const displayedProducts = selectedCategory
    ? products.filter(product => 
        product.category === selectedCategory ||
        product.subCategory === selectedCategory ||
        product.childCategory === selectedCategory
      )
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar 
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          usedCategories={usedCategories}
        />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Total Products Found: {totalProducts}
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-red-500 text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-red-500 text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select 
                className="bg-white border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-red-500"
                defaultValue="latest"
              >
                <option value="latest">Latest Products</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <ProductGrid products={displayedProducts} viewMode={viewMode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

