// import React, { useEffect, useState } from "react";
// import Blogdetails1 from "../Assets/blogdetails1.jpg";
// import blog1 from "../Assets/blog1.png";
// import blog2 from "../Assets/blog2.png";
// import blog3 from "../Assets/blog3.png";
// import blog4 from "../Assets/blog4.png";
// import blog5 from "../Assets/blog5.png";
// import blog6 from "../Assets/blog6.png";
// import blog7 from "../Assets/blog7.png";
// import blog8 from "../Assets/blog8.png";
// import blog9 from "../Assets/blog9.png";
// import blog10 from "../Assets/blog10.png";
// import blog11 from "../Assets/blog11.png";
// import blog12 from "../Assets/blog12.png";
// import { useParams } from "react-router-dom";
// import { SlCalender } from "react-icons/sl";
// import { RiAdminLine } from "react-icons/ri";

// const Sidebar = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
//       {/* Search Section */}
//       <div className="mb-6">
//         <h2 className="text-lg font-bold mb-4">Search</h2>
//         <form className="flex">
//           <input
//             type="text"
//             placeholder="Find anything..."
//             className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
//           >
//             🔍
//           </button>
//         </form>
//       </div>

//       {/* Categories Section */}
//       <div className="mb-6">
//         <h2 className="text-lg font-bold mb-4">Categories</h2>
//         <ul className="space-y-4">
//           {[
//             { name: "Web Services", count: 5 },
//             { name: "Business Philosophy", count: 3 },
//             { name: "Business Help", count: 1 },
//             { name: "Random Thoughts", count: 0 },
//             { name: "Mechanical", count: 1 },
//             { name: "Entrepreneurs", count: 1 },
//             { name: "Technology", count: 1 },
//           ].map((category, index) => (
//             <li key={index} className="flex items-center">
//               <div className="w-4 h-4 bg-black rounded-sm mr-2"></div>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-blue-500 transition"
//               >
//                 {category.name} ({category.count})
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Recent Posts */}
//       <div>
//         <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
//         <div className="space-y-4">
//           {[blog1, blog2, blog3, blog5].map((img, index) => (
//             <div key={index} className="flex gap-4 items-center">
//               <img
//                 src={img}
//                 width={100}
//                 height={100}
//                 alt="Recent post"
//                 className="rounded-md"
//               />
//               <div>
//                 <p className="font-semibold">
//                   10 Must-Have Fashion Staples for Every Woman
//                 </p>
//                 <p className="text-gray-500">Jan 15 2024</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Popular Tags */}
//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2 className="font-bold mb-4">Popular Tags</h2>
//         <div className="flex flex-wrap gap-4">
//           {[
//             "Business",
//             "Fashion",
//             "Technology",
//             "E-Commerce",
//             "Entrepreneurship",
//           ].map((tag, index) => (
//             <button
//               key={index}
//               className="px-4 py-2 bg-gray-100 rounded-md shadow-md"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Blogdetails = () => {
//   const { id } = useParams();
//   console.log(id);

//   const [blog, setBlog] = useState(null);

//   const blogs = [
//     {
//       id: 1,
//       title: "The Power of Personalization",
//       date: "Jan 02, 2019",
//       excerpt:
//         "In an age where consumers are bombarded with countless options...",
//       category: "Technology",
//       image: blog1,
//     },
//     {
//       id: 2,
//       title: "Fashion on a Budget",
//       date: "Jan 15, 2024",
//       excerpt:
//         "Looking chic and stylish doesn’t have to come with a hefty price tag. With the right strategies, you can build a fashionable wardrobe that reflects your personal style while staying within your budget...",
//       image: blog2,
//       category: "Fashion",
//     },
//     {
//       id: 3,
//       title: "10 Must-Have Fashion Staples",
//       date: "Jan 02, 2019",
//       excerpt: "Fashion staples every woman needs in her wardrobe...",
//       image: blog3,
//       category: "Fashion",
//     },
//     {
//       id: 4,
//       title: "Maximizing Your E-Commerce Potential",
//       date: "Jan 20, 2019",
//       excerpt:
//         "In the competitive world of e-commerce, standing out and driving sales requires more than just having a great product....",
//       image: blog4,
//       category: "Fashion",
//     },
//     {
//       id: 5,
//       title: "Behind the Scenes",
//       date: "Jan 02, 2019",
//       excerpt:
//         "At Genius Ocean, curating a fashion collection isn’t just about picking out stylish pieces; it’s an intricate process that involves creativity, trend analysis, and a keen understanding of our customers' needs...",
//       image: blog5,
//       category: "Fashion",
//     },
//     {
//       id: 6,
//       title: "The Ultimate Guide to Sustainable Fashion",
//       date: "Jan 02, 2019",
//       excerpt:
//         "As consumers become more conscious of their impact on the environment, the demand for sustainable fashion has grown significantly...",
//       image: blog6,
//       category: "Fashion",
//     },
//     {
//       id: 7,
//       title: "Building a Mobile-Friendly E-Commerce Site",
//       date: "Aug 02, 2018",
//       excerpt:
//         "In today’s digital landscape, mobile commerce is no longer a trend—it's a fundamental aspect of online shoppingy...",
//       image: blog7,
//       category: "Fashion",
//     },
//     {
//       id: 8,
//       title: "How to Create an Irresistible E-Commerce Website",
//       date: "Aug 02, 2018",
//       excerpt:
//         "Creating an irresistible e-commerce website is crucial for attracting and retaining customers in today’s competitive online market. ...",
//       image: blog8,
//       category: "Fashion",
//     },
//     {
//       id: 9,
//       title: "Versatile Outfits for the Modern Woman",
//       date: "Aug 02, 2018",
//       excerpt:
//         "in today’s dynamic world, women are constantly juggling multiple roles—professional, personal, and social...",
//       image: blog9,
//       category: "Fashion",
//     },
//     {
//       id: 10,
//       title: "From Click to Cart",
//       date: "Aug 02, 2018",
//       excerpt:
//         "The checkout process is a critical juncture in the e-commerce journey...",
//       matters: "",
//       image: blog10,
//       category: "Fashion",
//     },
//     {
//       id: 11,
//       title: "Creating an Engaging E-Commerce Experience",
//       date: "Aug 02, 2018",
//       excerpt:
//         "In the competitive world of e-commerce, providing a static and unremarkable shopping experience is no longer sufficient....",
//       image: blog11,
//       category: "Fashion",
//     },
//     {
//       id: 12,
//       title: "How to design effective arts?",
//       date: "Apr 06, 2018",
//       excerpt:
//         "The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter...",
//       image: blog12,
//       category: "Fashion",
//     },
//   ];

//   // Fetch blog data based on ID
//   useEffect(() => {
//     const selectedBlog = blogs.find((blog) => blog.id === parseInt(id));
//     setBlog(selectedBlog);
//   }, [id]);

//   if (!blog) {
//     return <p>Loading...</p>; // Show loading state while fetching data
//   }

//   return (
//     <div className="flex">
//       <div class=" bottom-0 left-0  bg-#f6f6f6 p-4 text-sm">
//         <img src={blog.image} alt="" />

//         <div className="flex gap-5">
//         <RiAdminLine />
//           <p>By: Admin |</p>
//           <SlCalender /> 
//           <p>Jan 02, 2019 |</p>
//           <p>Category: Web Services |</p>
//           <a href="https://www.geniusocean.com" class="text-blue-400 underline">
//             Source
//           </a>
//         </div>

//         <h1 className="font-semibold text-3xl mb-1rem mt-1rem ">
//           The Power of Personalization: Tailoring the
//           <br></br>
//           Shopping Experience for Your Customers
//         </h1>
//         <p className="mt-5 mb-5 text-base">
//           In an age where consumers are bombarded with countless shopping
//           options, personalization has emerged as a key differentiator for
//           e-commerce success. Tailoring the shopping experience to individual
//           preferences not only enhances customer satisfaction but also drives
//           higher engagement and conversions. This guide explores how
//           personalization can transform your e-commerce strategy and provides
//           actionable tips for creating a more customized shopping experience.
//         </p>
//         <h1 className="font-semibold text-3xl mb-1rem mt-1rem ">
//           Why Personalization Matters
//         </h1>
//         <p className="mt-5 mb-5 text-base">
//           Personalization goes beyond simply addressing customers by their
//           names. It involves curating a shopping experience that feels tailored
//           to each individual’s preferences, behaviors, and needs. Here’s why
//           personalization is crucial for your e-commerce business:
//           <br></br>
//           <strong> Increased Engagement</strong>: Personalized experiences
//           capture customers’ attention and make them feel valued, leading to
//           higher engagement and longer time spent on your site.
//           <br></br>
//           <strong>Higher Conversion Rates:</strong> When customers see products
//           and recommendations that match their interests, they’re more likely to
//           make a purchase.
//           <br></br>
//           <strong>Enhanced Customer Loyalty:</strong> Personalization fosters a
//           sense of connection and loyalty, encouraging repeat business and
//           customer retention.
//           <br></br>
//           <strong>Competitive Advantage:</strong> Offering a personalized
//           shopping experience sets you apart from competitors who may provide a
//           more generic approach
//         </p>
//         <h1 className="font-semibold text-3xl mb-1rem mt-1rem ">
//           Strategies for Personalizing the Shopping Experience
//         </h1>
//         <p className="mt-5 mb-5 text-base">
//           <strong>1.Leverage Customer Data Behavioral Tracking:</strong> Use
//           analytics tools to track customers browsing and purchasing behaviors.
//           This data helps you understand their preferences and tailor product
//           recommendations accordingly. Purchase History: Analyze customer past
//           purchases to suggest relevant products and offer personalized
//           discounts or promotions based on their buying patterns.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>
//             2.Implement Personalized Product Recommendations Dynamic
//             Recommendations:{" "}
//           </strong>
//           Display product recommendations on your website based on customers
//           browsing history, previous purchases, and similar items. This makes it
//           easier for customers to discover products theyre likely to be
//           interested in. Cross-Selling and Upselling: Suggest complementary or
//           higher-end products during the shopping process, such as “Customers
//           who bought this also bought” or “Recommended for you” sections.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>3.Utilize Email Personalization Segmented Campaigns:</strong>
//           Create targeted email campaigns based on customer segments, such as
//           new subscribers, repeat buyers, or cart abandoners. Tailor the content
//           to each segments specific interests and behaviors. Personalized
//           Offers: Send personalized offers, discounts, and product
//           recommendations via email based on customers past interactions and
//           preferences.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>
//             {" "}
//             4.Create a Customized User Experience Dynamic Content:{" "}
//           </strong>
//           Personalize website content based on users location, behavior, or
//           previous interactions. For example, display region-specific promotions
//           or welcome messages based on user activity. Personalized Landing
//           Pages: Design landing pages that cater to different customer segments
//           or interests, ensuring that the content and offers are relevant to
//           each user.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>
//             5.Offer Personalized Customer Service Live Chat and Support:
//           </strong>{" "}
//           Use live chat or virtual assistants to personalized support and
//           recommendations in real-time. Utilize customer data to offer tailored
//           solutions and responses. Proactive Outreach: Reach out to customers
//           with personalized follow-ups based on their shopping history or
//           feedback. This demonstrates that you value their business and are
//           attentive to their needs.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>
//             6.Enhance the Checkout Experience One-Click Reordering:
//           </strong>{" "}
//           Enable one-click reordering for customers who frequently purchase the
//           same items. This simplifies the process and enhances convenience.
//           Customizable Options: Allow customers to personalize products, such as
//           choosing colors, sizes, or adding custom text. This adds a personal
//           touch to their purchases.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>
//             {" "}
//             7.Gather and Act on Customer Feedback Surveys and Reviews:
//           </strong>{" "}
//           Collect feedback through surveys and product reviews to understand
//           customers preferences and experiences. Use this information to refine
//           your personalization strategies and address any issues. Feedback
//           Loops: Implement feedback loops that allow customers to provide input
//           on their personalized experience. This helps you continuously improve
//           and adapt to their needs.
//         </p>
//         <p className="mt-5 mb-5 text-base">
//           <strong>
//             8. Leverage AI and Machine Learning Predictive Analytics:
//           </strong>{" "}
//           Utilize AI and machine learning algorithms to predict customer
//           preferences and behavior. This enables more accurate and effective
//           personalization, such as predicting what products customers are likely
//           to be interested in next. Automated Personalization: Implement
//           AI-driven tools to automate personalization efforts, such as
//           generating personalized product recommendations and dynamic content
//           based on user data.
//         </p>
//         <h1 className="font-semibold text-3xl mb-1rem mt-1rem ">Conclusion</h1>
//         <p className="mt-5 mb-5 text-base">
//           The power of personalization lies in its ability to create a shopping
//           experience that resonates with each individual customer. By leveraging
//           customer data, offering tailored recommendations, and enhancing the
//           overall user experience, you can build stronger connections with your
//           audience, increase engagement, and drive higher conversions. Embrace
//           personalization as a core component of your e-commerce strategy and
//           watch as it transforms the way customers interact with your brand.
//         </p>
//       </div>
//       <Sidebar />
//     </div>
//   );
// };

// export default Blogdetails;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";

const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios.get(url);
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
    }
  }
};

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSidebarData = async () => {
    try {
      const [categoriesResponse, postsResponse] = await Promise.all([
        fetchWithRetry('https://ecommerce-panel-backend.onrender.com/api/categories'),
        fetchWithRetry('https://ecommerce-panel-backend.onrender.com/api/posts?limit=5')
      ]);
      setCategories(categoriesResponse.data);
      setRecentPosts(postsResponse.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching sidebar data:", err);
      setError("Failed to load sidebar data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSidebarData();
  }, []);

  if (loading) return <div>Loading sidebar...</div>;
  if (error) return (
    <div>
      <p>{error}</p>
      <button onClick={() => { setLoading(true); setError(null); fetchSidebarData(); }}>
        Retry
      </button>
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
      {/* Search Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Search</h2>
        <form className="flex">
          <input
            type="text"
            placeholder="Find anything..."
            className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            🔍
          </button>
        </form>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category._id} className="flex items-center">
              <div className="w-4 h-4 bg-black rounded-sm mr-2"></div>
              <Link
                to={`/category/${category._id}`}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                {category.name} ({category.count || 0})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post._id} className="flex gap-4 items-center">
              <img
                src={post.featureImage || "/placeholder.svg?height=100&width=100"}
                width={100}
                height={100}
                alt={post.title}
                className="rounded-md object-cover"
              />
              <div>
                <Link to={`/blogdetails/${post._id}`} className="font-semibold hover:text-blue-500 transition">
                  {post.title}
                </Link>
                <p className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-4 rounded-md shadow-md mt-6">
        <h2 className="font-bold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-4">
          {["Business", "Fashion", "Technology", "E-Commerce", "Entrepreneurship"].map((tag, index) => (
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
  );
};

const Blogdetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogDetails = async () => {
    try {
      const response = await fetchWithRetry(`https://ecommerce-panel-backend.onrender.com/api/posts/${id}`);
      setBlog(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching blog details:", err);
      setError("Failed to fetch blog details. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => { setLoading(true); setError(null); fetchBlogDetails(); }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!blog) {
    return <div className="text-center py-8">Blog post not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8">
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0 md:mr-6">
        <img src={blog.featureImage} alt={blog.title} className="w-full h-auto rounded-lg mb-6" />

        <div className="flex flex-wrap gap-5 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <RiAdminLine className="mr-1" />
            <p>By: Admin</p>
          </div>
          <div className="flex items-center">
            <SlCalender className="mr-1" />
            <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
          </div>
          <p>Category: {blog.category?.name || 'Uncategorized'}</p>
          <a href={blog.source} className="text-blue-500 hover:underline">
            Source
          </a>
        </div>

        <h1 className="font-bold text-3xl mb-4">{blog.title}</h1>
        
        <div className="prose max-w-none">
          {blog.description.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default Blogdetails;

