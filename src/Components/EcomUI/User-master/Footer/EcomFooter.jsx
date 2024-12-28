import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import blog4 from "../Assets/blog4.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaDribbble } from "react-icons/fa";

export default function EcomFooter() {
  const recentPosts = [
    {
      id: 1,
      title: "The Power of Personalization",
      date: "Jan 02, 2019",
      excerpt:
        "In an age where consumers are bombarded with countless shopping options...",
      image: blog1,
    },
    {
      id: 2,
      title: "Fashion on a Budget",
      date: "Jan 15, 2024",
      excerpt:
        "Looking chic and stylish doesn’t have to come with a hefty price tag...",
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
      excerpt:
        "In the competitive world of e-commerce, standing out requires more than just a great product...",
      image: blog4,
    },
  ];
  
  return (
    <footer className="bg-[#1a0f0f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">ARRC TECHNOLOGY</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>00 000 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>admin@geniusocean.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>3584 Hickory Heights Drive , USA</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
      <a href="#" className="hover:opacity-80">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaFacebookF className="text-black text-xl" />
        </div>
      </a>
      <a href="#" className="hover:opacity-80">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaTwitter className="text-black text-xl" />
        </div>
      </a>
      <a href="#" className="hover:opacity-80">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaLinkedinIn className="text-black text-xl" />
        </div>
      </a>
      <a href="#" className="hover:opacity-80">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaGoogle className="text-black text-xl" />
        </div>
      </a>
      <a href="#" className="hover:opacity-80">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaDribbble className="text-black text-xl" />
        </div>
      </a>
    </div>
          </div>

          {/* Product Category */}
          <div>
            <h3 className="text-xl font-bold mb-6">PRODUCT CATEGORY</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products/electronic/television"
                  className="hover:text-gray-300"
                >
                  Electronic
                </a>
              </li>
              <li>
                <a href="/products/fashion-beauty/bags" className="hover:text-gray-300">
                  Fashion & Beauty
                </a>
              </li>
              <li>
                <a href="/products/camera-photo/actioncamera" className="hover:text-gray-300">
                  Camera & Photo
                </a>
              </li>
              <li>
                <a href="/products/smart-phone-table/apple" className="hover:text-gray-300">
                  Smart Phone & Table
                </a>
              </li>
              <li>
                <a href="/products/sport-outdoor/sports-equipment" className="hover:text-gray-300">
                  Sport & Outdoor
                </a>
              </li>
              <li>
                <a href="/products/jewelry-watches/fine-jewelry" className="hover:text-gray-300">
                  Jewelry & Watches
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xl font-bold mb-6">CUSTOMER CARE</h3>
            <ul className="space-y-3">
              <li>
                <a href="/Home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/Blog" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-300">
                  Faq
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="privacy" className="hover:text-gray-300">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="footer-section">
            <h4>Recent Posts</h4>
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 rounded-md"
                />
                <div>
                  <Link
                    to={`/blogdetails/${post.id}`}
                    className="text-lg font-medium hover:text-red-500"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
