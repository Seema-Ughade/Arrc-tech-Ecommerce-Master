import { useState } from "react";
import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  RefreshCw,
  ChevronDown,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UINavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const VendorClickHandler = () => {
    navigate("/venderlogin");
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#ff3333] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-2">
              <Phone size={16} />
              <span>Contact & Support: 00 000 000 000</span>
            </div>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4 ml-auto">
              <button
                className="px-4 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                onClick={VendorClickHandler}
              >
                Vendor Login
              </button>
              <button className="px-4 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors">
                Rider Login
              </button>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
                  <span>English</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
                  <span>USD</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              <button className="hidden md:block hover:opacity-80 transition-opacity">
                My Account
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <a
              href="/"
              className="text-xl font-bold hover:text-[#ff3333] transition-colors"
            >
              Genius Shop
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                HOME
              </a>
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium group-hover:text-[#ff3333] transition-colors">
                  <span>PRODUCTS</span>
                  <ChevronDown size={16} />
                </button>
                {/* Dropdown menu can be added here */}
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium group-hover:text-[#ff3333] transition-colors">
                  <span>PAGES</span>
                  <ChevronDown size={16} />
                </button>
                {/* Dropdown menu can be added here */}
              </div>
              <a
                href="/blog"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                BLOG
              </a>
              <a
                href="/faq"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                CONTACT US
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Compare products"
              >
                <RefreshCw size={20} />
                <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                HOME
              </a>
              <button className="flex items-center justify-between font-medium w-full hover:text-[#ff3333] transition-colors">
                <span>PRODUCTS</span>
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center justify-between font-medium w-full hover:text-[#ff3333] transition-colors">
                <span>PAGES</span>
                <ChevronDown size={16} />
              </button>
              <a
                href="/blog"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                BLOG
              </a>
              <a
                href="/faq"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="font-medium hover:text-[#ff3333] transition-colors"
              >
                CONTACT US
              </a>
            </nav>
          </div>
        </div>
      )}
          
    </div>
  );
}
