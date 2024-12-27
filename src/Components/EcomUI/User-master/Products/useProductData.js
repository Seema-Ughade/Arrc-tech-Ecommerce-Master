import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsRes, categoriesRes, subCategoriesRes, childCategoriesRes] = await Promise.all([
          axios.get('https://ecommerce-panel-backend.onrender.com/api/products/'),
          axios.get('https://ecommerce-panel-backend.onrender.com/api/categories'),
          axios.get('https://ecommerce-panel-backend.onrender.com/api/subcategories'),
          axios.get('https://ecommerce-panel-backend.onrender.com/api/childcategories')
        ]);

        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
        setSubCategories(subCategoriesRes.data);
        setChildCategories(childCategoriesRes.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, categories, subCategories, childCategories, loading, error };
};

export default useProductData;
