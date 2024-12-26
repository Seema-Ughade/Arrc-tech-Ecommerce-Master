import React, { useState } from "react";
import { Link } from "react-router-dom";
//import data from "./data.json";

const allimg =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

const Blog = () => {
  //const [blogs, setBlogs] = useState(data);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog Post 1",
      excerpt: "This is the excerpt for blog post 1.",
      image: "https://via.placeholder.com/350x150",
      date: "2023-10-26",
    },
    {
      id: 2,
      title: "Blog Post 2",
      excerpt: "This is the excerpt for blog post 2.",
      image: "https://via.placeholder.com/350x150",
      date: "2023-10-27",
    },
    {
      id: 3,
      title: "Blog Post 3",
      excerpt: "This is the excerpt for blog post 3.",
      image: "https://via.placeholder.com/350x150",
      date: "2023-10-28",
    },
    {
      id: 4,
      title: "Blog Post 4",
      excerpt: "This is the excerpt for blog post 4.",
      image: "https://via.placeholder.com/350x150",
      date: "2023-10-29",
    },
    {
      id: 5,
      title: "Blog Post 5",
      excerpt: "This is the excerpt for blog post 5.",
      image: "https://via.placeholder.com/350x150",
      date: "2023-10-30",
    },
    {
      id: 6,
      title: "Blog Post 6",
      excerpt: "This is the excerpt for blog post 6.",
      image: "https://via.placeholder.com/350x150",
      date: "2023-10-31",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3);
  const [categories] = useState([
    { name: "Category 1", count: 10 },
    { name: "Category 2", count: 5 },
    { name: "Category 3", count: 12 },
  ]);
  
  const [tags] = useState([
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
  ]);

  const [recentPosts] = useState([
    {
      id: 1,
      title: "Recent Post 1",
      image: "https://via.placeholder.com/80x80",
      date: "2023-10-26",
    },
    {
      id: 2,
      title: "Recent Post 2",
      image: "https://via.placeholder.com/80x80",
      date: "2023-10-27",
    },
  ]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative">
        <img
          src={allimg}
          alt="Header"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Blog
          </h1>
          <h3 className="mt-2 sm:mt-4 bg-white px-2 py-1 rounded text-sm sm:text-base">
            Home // Blog
          </h3>
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8 bg-white shadow-md">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 space-y-6 lg:space-y-8">
            <div className="bg-white p-3 sm:p-4 rounded-md shadow-md">
              <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                Search
              </h2>
              <div className="flex items-center border rounded-md">
                <input
                  type="text"
                  placeholder="Find anything..."
                  className="w-full p-2 text-sm sm:text-base focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-3 sm:px-4 bg-gray-200 hover:bg-gray-300 transition">
                  🔍
                </button>
              </div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-md shadow-md">
              <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                Categories
              </h2>
              <ul className="space-y-1 sm:space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm sm:text-base"
                  >
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full inline-block mr-2"></span>
                    <span className="flex-grow">{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
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
          <div className="w-full lg:w-3/4 space-y-6 lg:space-y-8">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-md shadow-md flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 sm:h-full w-full sm:w-[30%] object-cover rounded-t-md sm:rounded-l-md sm:rounded-t-none"
                />
                <div className="flex-grow p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black-500 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-4">
                    <span>📅</span>
                    <span className="ml-2">{blog.date}</span>
                  </div>
                  <Link to={`/blogdetails/${blog.id}`}>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 border border-red-500 text-red-500 text-sm sm:text-base rounded-md hover:bg-red-500 hover:text-white transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-1 sm:gap-2 mt-4">
          {Array.from(
            { length: Math.ceil(filteredBlogs.length / blogsPerPage) },
            (_, index) => (
              <button
                key={index}
                className={`px-2 py-1 sm:px-3 sm:py-1 border rounded-md text-sm ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
