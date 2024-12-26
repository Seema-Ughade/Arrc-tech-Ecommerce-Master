import React, { useEffect, useState } from "react";
import allimg from "../Assets/allpage.png";
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import blog4 from "../Assets/blog4.png";
import blog5 from "../Assets/blog5.png";
import blog6 from "../Assets/blog6.png";
import blog7 from "../Assets/blog7.png";
import blog8 from "../Assets/blog8.png";
import blog9 from "../Assets/blog9.png";
import blog10 from "../Assets/blog10.png";
import blog11 from "../Assets/blog11.png";
import blog12 from "../Assets/blog12.png";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    const fetchData = () => {
      const blogData = [
        { id: 1, title: "The Power of Personalization", date: "Jan 02, 2019", excerpt: "In an age where consumers are bombarded with countless shopping options...", image: blog1, category: "Technology" },
        { id: 2, title: "Fashion on a Budget", date: "Jan 15, 2024", excerpt: "Looking chic and stylish doesn’t have to come with a hefty price tag...", image: blog2, category: "Fashion" },
        { id: 3, title: "10 Must-Have Fashion Staples", date: "Jan 02, 2019", excerpt: "Fashion staples every woman needs in her wardrobe...", image: blog3, category: "Fashion" },
        { id: 4, title: "Maximizing Your E-Commerce Potential", date: "Jan 20, 2019", excerpt: "In the competitive world of e-commerce...", image: blog4, category: "Business" },
        { id: 5, title: "Behind the Scenes", date: "Jan 02, 2019", excerpt: "At Genius Ocean, curating a fashion collection isn’t just about picking out stylish pieces...", image: blog5, category: "Fashion" },
        { id: 6, title: "The Ultimate Guide to Sustainable Fashion", date: "Jan 02, 2019", excerpt: "As consumers become more conscious of their impact on the environment...", image: blog6, category: "Fashion" },
      ];

      const categoryData = [
        { name: "All", count: blogData.length },
        { name: "Technology", count: blogData.filter((b) => b.category === "Technology").length },
        { name: "Fashion", count: blogData.filter((b) => b.category === "Fashion").length },
        { name: "Business", count: blogData.filter((b) => b.category === "Business").length },
      ];

      const tagData = ["Business", "Fashion", "Technology", "E-Commerce"];

      setBlogs(blogData);
      setCategories(categoryData);
      setTags(tagData);
      setRecentPosts(blogData.slice(0, 4));
    };

    fetchData();
  }, []);

  // Filter blogs based on search query and selected category
  useEffect(() => {
    let filtered = blogs;

    if (searchQuery) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset pagination on filter change
  }, [searchQuery, selectedCategory, blogs]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative">
        <img src={allimg} alt="Header" className="w-full h-[200px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl font-bold">Blog</h1>
          <h3 className="mt-2 bg-white px-2 py-1 rounded text-sm">Home // Blog</h3>
        </div>
      </div>
      <div className="p-4 bg-white shadow-md">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 space-y-6">
            {/* Search */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-4">Search</h2>
              <div className="flex items-center border rounded-md">
                <input
                  type="text"
                  placeholder="Find anything..."
                  className="w-full p-2 text-base focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-4 bg-gray-200 hover:bg-gray-300">🔍</button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`cursor-pointer text-base ${
                      selectedCategory === category.name ? "text-red-500" : "text-gray-700"
                    }`}
                  >
                    {category.name} ({category.count})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                Recent Posts
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex gap-2 sm:gap-4 items-center"
                  >
                    <img
                      src={post.image}
                      width={80}
                      height={80}
                      alt="Recent post"
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {post.title}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-md shadow-md">
              <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                Popular Tags
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-100 rounded-md shadow-md text-xs sm:text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blogs */}
          <div className="w-full lg:w-3/4 space-y-6">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-md shadow-md flex flex-col sm:flex-row">
                <img src={blog.image} alt={blog.title} className="h-48 w-full sm:w-1/3 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.excerpt}</p>
                  <p className="text-xs text-gray-500 mt-2">📅 {blog.date}</p>
                  <Link to={`/blogdetails/${blog.id}`}>
                    <button className="mt-4 px-4 py-2 border text-red-500 border-red-500 rounded hover:bg-red-500 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from(
                { length: Math.ceil(filteredBlogs.length / blogsPerPage) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === index + 1 ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
