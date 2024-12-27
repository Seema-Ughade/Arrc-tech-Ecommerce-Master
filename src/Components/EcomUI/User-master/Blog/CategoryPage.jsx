import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryBlogs = async () => {
      try {
        const [categoryResponse, blogsResponse] = await Promise.all([
          axios.get(`https://ecommerce-panel-backend.onrender.com/api/categories/${categoryId}`),
          axios.get(`https://ecommerce-panel-backend.onrender.com/api/posts?category=${categoryId}`)
        ]);
        setCategory(categoryResponse.data);
        setBlogs(blogsResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching category blogs:", err);
        setError("Failed to fetch category blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchCategoryBlogs();
  }, [categoryId]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category ? category.name : 'Category'} Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.featureImage} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <SlCalender className="mr-1" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-600 mb-4">{blog.description.slice(0, 100)}...</p>
              <Link to={`/blogdetails/${blog._id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

