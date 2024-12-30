import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Home/products/Sidebar'; 
import ProductCard from '../Products/ProductCard';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryId);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchCategoryAndProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchCategoryAndProducts = async (categoryId) => {
    try {
      setLoading(true);
      const [categoryResponse, productsResponse] = await Promise.all([
        axios.get(`https://ecommerce-panel-backend.onrender.com/api/categories/${categoryId}`),
        axios.get(`https://ecommerce-panel-backend.onrender.com/api/products?category=${categoryId}`)
      ]);

      setCategory(categoryResponse.data);
      setProducts(productsResponse.data);
    } catch (error) {
      console.error('Error fetching category and products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="flex">
      <Sidebar onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">
          {category ? `${category.name} (${products.length})` : 'Products'}
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 h-48 rounded-lg mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

