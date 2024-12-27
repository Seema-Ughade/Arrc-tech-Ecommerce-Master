import React from "react";
import "./Footer.css";
import { IoCallOutline, IoLocationSharp, IoLogoTwitter, IoLogoGoogleplus } from "react-icons/io5";
import { IoMdMail } from 'react-icons/io';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import blog4 from "../Assets/blog4.png";

const Footer = () => {
  const recentPosts = [
    {
      id: 1,
      title: "The Power of Personalization",
      date: "Jan 02, 2019",
      excerpt: "In an age where consumers are bombarded with countless shopping options...",
      image: blog1,
    },
    {
      id: 2,
      title: "Fashion on a Budget",
      date: "Jan 15, 2024",
      excerpt: "Looking chic and stylish doesn’t have to come with a hefty price tag...",
      image: blog2,
    },
    {
      id: 3,
      title: "10 Must-Have Fashion Staples",
      date: "Jan 02, 2019",
      excerpt: "Fashion staples every woman needs in her wardrobe...",
      image: blog3,
    },
    {
      id: 4,
      title: "Maximizing Your E-Commerce Potential",
      date: "Jan 20, 2019",
      excerpt: "In the competitive world of e-commerce, standing out requires more than just a great product...",
      image: blog4,
    },
  ];

  return (
    <>
      {/* Newsletter Signup */}
      <div className="bg-teal-500 text-white py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Sign Up to Newsletter</h1>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-red-500 font-medium rounded-md hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section">
            <h4>ARRC TECHNOLOGY
            </h4>
            <p className="flex items-center gap-2">
              <IoCallOutline size={20} />
              00 000 000 000
            </p>
            <p className="flex items-center gap-2">
              <IoMdMail size={20} />
              admin@geniusocean.com
            </p>
            <p className="flex items-center gap-2">
              <IoLocationSharp size={20} />
              3584 Hickory Heights Drive, USA
            </p>
          </div>

          {/* Product Categories */}
          <div className="footer-section">
            <h4>Product Category</h4>
            <ul>
              <li><Link to="/products/electronic/television">Electronics</Link></li>
              <li><Link to="/products/fashion-beauty/accessories">Fashion & Beauty</Link></li>
              <li><Link to="/products/camera-photo/dslr">Camera & Photo</Link></li>
              <li><Link to="/products/smart-phone-table/apple">Smart Phone & Table</Link></li>
              <li><Link to="/products/sport-outdoor/sports-equipment">Sports & Equipment</Link></li>
              <li><Link to="/products/jewelry-watches/fine-jewelry">Fine Jewelry</Link></li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div className="footer-section">
            <h4>Customer Care</h4>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="footer-section">
            <h4>Recent Posts</h4>
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 mb-4">
                <img src={post.image} alt={post.title} className="w-20 h-20 rounded-md" />
                <div>
                  <Link to={`/blogdetails/${post.id}`} className="text-lg font-medium hover:text-red-500">
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom text-center mt-8">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved By Arrc Technology</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
