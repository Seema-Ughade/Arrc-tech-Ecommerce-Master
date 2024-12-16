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
  // Blog data (can be fetched from an API)
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = () => {
      const blogData = [
        {
          id: 1,
          title: "The Power of Personalization",
          date: "Jan 02, 2019",
          excerpt:
            "In an age where consumers are bombarded with countless shopping options...",
          image: blog1,
          category: "Technology",
        },
        {
          id: 2,
          title: "Fashion on a Budget",
          date: "Jan 15, 2024",
          excerpt: "Looking chic and stylish doesn’t have to come with a hefty price tag. With the right strategies, you can build a fashionable wardrobe that reflects your personal style while staying within your budget...",
          image: blog2,
          category: "Fashion",
        },
        {
          id: 3,
          title: "10 Must-Have Fashion Staples",
          date: "Jan 02, 2019",
          excerpt: "Fashion staples every woman needs in her wardrobe...",
          image: blog3,
          category: "Fashion",
        },
        {
          id: 4,
          title: "Maximizing Your E-Commerce Potential",
          date: "Jan 20, 2019",
          excerpt: "In the competitive world of e-commerce, standing out and driving sales requires more than just having a great product....",
          image: blog4,
          category: "Fashion",
        },
        {
          id: 5,
          title: "Behind the Scenes",
          date: "Jan 02, 2019",
          excerpt: "At Genius Ocean, curating a fashion collection isn’t just about picking out stylish pieces; it’s an intricate process that involves creativity, trend analysis, and a keen understanding of our customers' needs...",
          image: blog5,
          category: "Fashion",
        },
        {
          id: 6,
          title: "The Ultimate Guide to Sustainable Fashion",
          date: "Jan 02, 2019",
          excerpt: "As consumers become more conscious of their impact on the environment, the demand for sustainable fashion has grown significantly...",
          image: blog6,
          category: "Fashion",
        },
        {
          id: 7,
          title: "Building a Mobile-Friendly E-Commerce Site",
          date: "Aug 02, 2018",
          excerpt: "In today’s digital landscape, mobile commerce is no longer a trend—it's a fundamental aspect of online shoppingy...",
          image: blog7,
          category: "Fashion",
        },
        {
          id: 8,
          title: "How to Create an Irresistible E-Commerce Website",
          date: "Aug 02, 2018",
          excerpt: "Creating an irresistible e-commerce website is crucial for attracting and retaining customers in today’s competitive online market. ...",
          image: blog8,
          category: "Fashion",
        },
        {
          id: 9,
          title: "Versatile Outfits for the Modern Woman",
          date: "Aug 02, 2018",
          excerpt: "in today’s dynamic world, women are constantly juggling multiple roles—professional, personal, and social...",
          image: blog9,
          category: "Fashion",
        },
        {
          id: 10,
          title: "From Click to Cart",
          date: "Aug 02, 2018",
          excerpt: "The checkout process is a critical juncture in the e-commerce journey...",
          image: blog10,
          category: "Fashion",
        },
        {
          id: 11,
          title: "Creating an Engaging E-Commerce Experience",
          date: "Aug 02, 2018",
          excerpt: "In the competitive world of e-commerce, providing a static and unremarkable shopping experience is no longer sufficient....",
          image: blog11,
          category: "Fashion",
        },
        {
          id: 12,
          title: "How to design effective arts?",
          date: "Apr 06, 2018",
          excerpt: "The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter...",
          image: blog12,
          category: "Fashion",
        },
      ];

      const categoryData = [
        { name: "Technology", count: 5 },
        { name: "Fashion", count: 3 },
        { name: "Business", count: 2 },
      ];

      const tagData = [
        "Business",
        "Fashion",
        "Technology",
        "E-Commerce",
        "Entrepreneurship",
      ];

      setBlogs(blogData);
      setCategories(categoryData);
      setTags(tagData);
      setRecentPosts(blogData.slice(0, 4)); // Show the first 4 as recent posts
    };

    fetchData();
  }, []);

  // Filter blogs based on the search query
  useEffect(() => {
    if (searchQuery) {
      setFilteredBlogs(
        blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredBlogs(blogs);
    }
  }, [searchQuery, blogs]);

  return (
    <div className="blog-page">
      {/* Header */}
      <div className="relative">
        <img src={allimg} alt="Header" className="w-full h-[300px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Blog</h1>
          <h3 className="mt-4 bg-white px-2 py-1 rounded">Home // Blog</h3>
        </div>
      </div>

      <div className="p-8 bg-white shadow-md">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 space-y-8">
            {/* Search Box */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-4">Search</h2>
              <div className="flex items-center border rounded-md">
                <input
                  type="text"
                  placeholder="Find anything..."
                  className="w-full p-2 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-4 bg-gray-200 hover:bg-gray-300 transition">
                  🔍
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-4 h-4 bg-black rounded-full inline-block mr-2"></span>
                    <span className="flex-grow">{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <img
                      src={post.image}
                      width={100}
                      height={100}
                      alt="Recent post"
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-semibold">{post.title}</p>
                      <p className="text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="font-bold mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-4">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-md shadow-md"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 space-y-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full lg:w-[30%] object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-black-500 mb-2 mt-10">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>📅</span>
                    <span className="ml-2">{blog.date}</span>
                  </div>
                  <Link to={`/blogdetails/${blog.id}`}>
                    <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
