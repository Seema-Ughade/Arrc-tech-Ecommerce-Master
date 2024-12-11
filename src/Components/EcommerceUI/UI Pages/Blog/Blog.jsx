import React from "react";
// import allimg from "../Assets/allpage.png";
import allimg from "../../../../assets/Assets/allpage.png";
import blog1 from "../../../../assets/Assets/blog1.png";
import blog2 from "../../../../assets/Assets/blog2.png";
import blog3 from "../../../../assets/Assets/blog3.png";
import blog4 from "../../../../assets/Assets/blog4.png";
import blog5 from "../../../../assets/Assets/blog5.png";
import blog6 from "../../../../assets/Assets/blog6.png";
import footer1 from "../../../../assets/Assets/footer1jpg.jpg";
import footer2 from "../../../../assets/Assets/footer2.jpg";
import footer3 from "../../../../assets/Assets/footer3.jpg";
const BlogPage = () => {
  return (
    <div className="contact">
      <div className="object-cover relative">
        <img src={allimg} alt="" className="w-screen h-[300px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Blog</h1>
          <h3 className=" mt-4 bg-white">Home // Blog</h3>
        </div>
      </div>

      <div className="p-8 bg-white-100 shadow-md">
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
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
                {[
                  { name: "Web Services", count: 5 },
                  { name: "Business Philosophy", count: 3 },
                  { name: "Business Help", count: 1 },
                  { name: "Random Thoughts", count: 0 },
                  { name: "Mechanical", count: 1 },
                  { name: "Entrepreneurs", count: 1 },
                  { name: "Technology", count: 1 },
                ].map((category, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-4 h-4 bg-black rounded-full inline-block mr-2"></span>
                    <span className="flex-grow">{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Recent Post </h4>
              <div className="footer-img">
                <div className="image-1">
                  <img src={blog1} width={"100px"} height={"100px"} alt="" />
                  <div>
                    <p className="recentPostTitle font-semibold">
                      10 Must-Have Fashion Staples for Every Woman'
                    </p>
                    <span>📅</span>
                    <p className="recentPostTitle">Jan 15 2024</p>
                  </div>
                </div>

                <div className="image-1">
                  <img src={blog3} width={"100px"} height={"100px"} alt="" />
                  <div>
                    <p className="recentPostTitle font-semibold">
                      10 Must-Have Fashion Staples for Every Woman'
                    </p>
                    <span>📅</span>
                    <p className="recentPostTitle">Jan 15 2024</p>
                  </div>
                </div>

                <div className="image-1">
                  <img src={blog2} width={"100px"} height={"100px"} alt="" />
                  <div className="font-semibold">
                    <p>10 Must-Have Fashion Staples for Every Woman'</p>
                    <span>📅</span>
                    <p>Jan 15 2024</p>
                  </div>
                </div>

                <div className="image-1">
                  <img src={blog5} width={"100px"} height={"100px"} alt="" />
                  <div className="font-semibold">
                    <p>10 Must-Have Fashion Staples for Every Woman'</p>
                    <p>Jan 15 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="font-bold">Popular Tags </h2>
                <div className="flex flex-row flex-wrap gap-5">
                  <button className="px-8 py-2 shadow-md bg-gray-100 rounded-md">
                    Business
                  </button>
                  <button className="px-8 py-2 shadow-md bg-gray-100 rounded-md">
                    Business
                  </button>
                  <button className="px-8 py-2 shadow-md bg-gray-100 rounded-md">
                    Business
                  </button>
                  <button className="px-8 py-2 shadow-md bg-gray-100 rounded-md">
                    Business
                  </button>
                  <button className="px-8 py-2 shadow-md bg-gray-100 rounded-md">
                    Business
                  </button>
                  <button className="px-8 py-2 shadow-md bg-gray-100 rounded-md">
                    Business
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-full lg:w-3/4 space-y-8">
            {/* Featured Blog Post */}
            <div className="bg-white h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6">
              <img src={blog1} alt="" className="h-full w-[30%] object-fill" />
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black-500 mb-2  mt-10">
                  The Power of Personalization: Tailoring the Shopping
                  Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  In an age where consumers are bombarded with countless
                  shopping options, personalization has emerged as a key
                  differentiator for e-commerce success...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>📅</span>
                  <span className="ml-2">Jan 02, 2019</span>
                </div>
                <button className="px-4 py-2 border border-black-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* Additional Blog Post */}
            <div className="bg-white  h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6">
              <img src={blog2} alt="" className="h-full w-[30%] object-fill" />
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black-500 mb-2  mt-10">
                  Fashion on a Budget: How to Look Chic Without Breaking the
                  Bank
                </h3>
                <p className="text-gray-600 mb-4">
                  Looking stylish doesn’t always mean spending big bucks. In
                  this article, we share tips and tricks on how to look
                  fashionable on a budget...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>📅</span>
                  <span className="ml-2">Jan 02 - 2019</span>
                </div>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* 3 */}
            <div className="bg-white h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6">
              <img src={blog3} alt="" className="h-full w-[30%] object-fill" />

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black-500 mb-2  mt-10">
                  10 Must-Have Fashion Staples for Every Woman's Wardrobe
                </h3>
                <p className="text-gray-600 mb-4">
                  In the ever-evolving world of fashion, trends may come and go,
                  but some pieces remain timeless. These wardrobe essentials are
                  the foundation of any st...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>📅</span>
                  <span className="ml-2">Jan 02 - 2019</span>
                </div>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-white  h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6">
              <img src={blog4} alt="" className="h-full w-[30%] object-fill" />

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black-500 mb-2  mt-10">
                  Maximizing Your E-Commerce Potential: Tips for Boosting Onli..
                </h3>
                <p className="text-gray-600 mb-4">
                  and driving sales requires more than just having a great
                  product. It involves leveraging effectiv...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>📅</span>
                  <span className="ml-2">Jan 02 - 2019</span>
                </div>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* 5 */}
            <div className="bg-white  h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6">
              <img src={blog5} alt="" className="h-full w-[30%] object-fill" />

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black-500 mb-2  mt-10">
                  Behind the Scenes: How We Curate Our Fashion Collections
                </h3>
                <p className="text-gray-600 mb-4">
                  At Genius Ocean, curating a fashion collection isn’t just
                  about picking out stylish pieces; it’s an intricate process
                  that involves creativity, trend ...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>📅</span>
                  <span className="ml-2">Jan 02 - 2019</span>
                </div>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* 6 */}
            <div className="bg-white  h-[20rem] rounded-md shadow-md flex flex-col lg:flex-row gap-6">
              <img src={blog6} alt="" className="h-full w-[30%] object-fill" />

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-black-500 mb-2 mt-10">
                  The Ultimate Guide to Sustainable Fashion: Look Good, Feel G..
                </h3>
                <p className="text-gray-600 mb-4">
                  As consumers become more conscious of their impact on the
                  environment, the demand for sustainable fashion has grown
                  significantly. Sustainable fashion...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>📅</span>
                  <span className="ml-2">Jan 02 - 2019</span>
                </div>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
