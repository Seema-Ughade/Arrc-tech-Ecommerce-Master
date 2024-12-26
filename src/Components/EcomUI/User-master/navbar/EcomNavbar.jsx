import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDollarSign, FaLanguage, FaUser } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
// import Logo from "../../../assets/logo.png";
// import { FaBars, FaCode, FaBriefcase, FaChartLine, FaHeartbeat, FaGraduationCap, FaPalette, FaChevronDown } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import "./navbar.css";
import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  RefreshCw,
  ChevronDown,
  Phone,
} from "lucide-react";
import { useSelector } from "react-redux";

const EcomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPages, setDropdownPages] = useState(false);
  const [nav1, setNav1] = useState(true);
  const [nav2, setNav2] = useState(false);

  const cartItemCount = useSelector((state) => state.cart.cartItems.length);
  const compareItemCount = useSelector(
    (state) => state.cart.compareItems.length
  );
  const wishlistItemCount = useSelector(
    (state) => state.cart.wishlistItems.length
  );

  const toggleNav1 = () => {
    setNav1(!nav1);
    setNav2(false);
  };

  const toggleNav2 = () => {
    setNav2(!nav2);
    setNav1(false);
  };

  const categories = [
    "Electronic",
    "Fashion & Beauty",
    "Camera & Photo",
    "Smart Phone & Table",
    "Sport & Outdoor",
    "Jewelry & Watches",
    "Health & Beauty",
    "Books & Office",
    "Toys & Hobbies",
    "Automobiles",
    "Home Decoration",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownPages = () => {
    setDropdownPages(!dropdownPages);
  };

  const toggleDrawer = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const VendorClickHandler = () => {
    console.log("Vendor button clicked");
    navigate("/venderlogin");
  };
  const RiderClickHandler = () => {
    navigate("/Riderlogin");
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-teal-400 text-white">
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
              <button
                className="px-4 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                onClick={RiderClickHandler}
              >
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

      <div className="bg-white shadow-md sticky top-0 z-50 p-4 md:p-0">
        <div className="max-w-7xl mx-auto py-0 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button className="block md:hidden" onClick={toggleDrawer}>
            <RiMenu5Fill className="text-xl" />
          </button>

          {/* Drawer for Mobile */}

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-25 z-50">
              <div className="w-72 bg-white h-full shadow-lg fixed left-0 top-0 z-50">
                <div className="p-4 flex justify-between items-center border-b bg-red-500 text-white">
                  <h2 className="font-bold text-lg"> Genius shop </h2>
                  <button onClick={toggleDrawer}>X</button>
                </div>

                <div className="flex gap-20">
                  <button onClick={toggleNav1}>MAIN MENU</button>
                  <button onClick={toggleNav2}>CATEGORIES</button>
                </div>

                {nav1 && (
                  <nav className="p-4 space-y-4">
                    <Link to="/" className="block" onClick={toggleDrawer}>
                      HOME
                    </Link>
                    <Link
                      to="/products"
                      className="block"
                      onClick={toggleDrawer}
                    >
                      PRODUCT
                    </Link>
                    <Link
                      to="/aboutus"
                      className="block"
                      onClick={toggleDrawer}
                    >
                      PAGES
                    </Link>
                    <Link to="/Blog" className="block" onClick={toggleDrawer}>
                      BLOG
                    </Link>
                    <Link to="/faq" className="block" onClick={toggleDrawer}>
                      FAQ
                    </Link>
                    <Link
                      to="/contact"
                      className="block"
                      onClick={toggleDrawer}
                    >
                      CONTACT
                    </Link>

                    <div className="flex flex-col gap-5">
                      <button
                        className="px-2 py-1 border bg-red-500 text-white transition rounded-md"
                        onClick={VendorClickHandler}
                      >
                        Vendor Login
                      </button>

                      <button
                        onClick={VendorClickHandler}
                        className="px-2 py-1  border bg-red-500 text-white transition rounded-md"
                      >
                        Rider Login
                      </button>
                      <button className="px-2 py-1  border bg-red-500 text-white transition rounded-md">
                        User Login
                      </button>
                    </div>
                  </nav>
                )}

                {nav2 && (
                  <nav>
                    <ul>
                      {categories.map((category, index) => (
                        <Link to={"/products"}>
                          <li
                            key={index}
                            className="text-sm text-gray-700 cursor-pointer hover:text-red-500 mb-2"
                          >
                            {category} +
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          )}

          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* <img src={Logo} alt="Logo" className="w-10 h-10" /> */}
            <h1 className="text-sm md:text-lg font-bold text-gray-800 ml-3">
              <a href="/">ARRC TECHNOLOGY</a>
            </h1>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <div class="main font-semibold">
              <div className="navigations">
                <a href="/" className="font-semibold">
                  HOME
                </a>

                <Link to={"/products"}>
                  <li
                    className="navbar-item dropdown list-none"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                  >
                    PRODUCTS
                    <span className={`fa ${dropdownOpen ? 'fa-times' : 'fa-plus'} ml-2  text-md font-bold text-gray-800 `}></span>
                    {dropdownOpen && (
                      <div className="dropdown-menu">
                        <div className="flex">
                          <div className="dropdown-column">
                            <h3> ELECTRONIC </h3>
                            <ul>
                              <li>
                                <Link to={"/products/electronic/television"}>
                                  TELEVISION
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/electronic/refrigerator"}>
                                  REFRIGERATOR
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/electronic/washingmachine"}
                                >
                                  WASHING MACHINE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/electronic/airconditionersy"}
                                >
                                  AIR CONDITIONERS
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3>FASHION & BEAUTY</h3>
                            <ul>
                              <li>
                                <Link
                                  to={"/products/fashion-beauty/accessories"}
                                >
                                  ACCESORIES
                                </Link>
                              </li>

                              <li>
                                <Link to={"/products/fashion-beauty/bags"}>
                                  BAGS
                                </Link>
                                <li>
                                  <Link
                                    to={"/products/fashion-beauty/clothings"}
                                  >
                                    CLOTHINGS
                                  </Link>
                                </li>
                                <Link to={"/products/fashion-beauty/shoes"}>
                                  SHOES
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3>CAMERA & PHOTO</h3>
                            <ul>
                              <li>
                                <Link to={"/products/camera-photo/dslr"}>
                                  DSLR
                                </Link>
                                <li>
                                  <Link
                                    to={"/products/camera-photo/cameraphone"}
                                  >
                                    CAMERAPHONE
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={"/products/camera-photo/actioncamera"}
                                  >
                                    {" "}
                                    ACTIONCAMERA
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={"/products/camera-photo/digitalcamera"}
                                  >
                                    DIGITALCAMERA
                                  </Link>
                                </li>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3>SMART PHONE & TABLE</h3>
                            <ul>
                              <li>
                                <Link to={"/products/smart-phone-table/apple"}>
                                  {" "}
                                  APPLE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/smart-phone-table/samsung"}
                                >
                                  SAMSUNG
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/smart-phone-table/lg"}>
                                  LG
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/smart-phone-table/sony"}>
                                  {" "}
                                  SONY
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="dropdown-column">
                            <h3> SPORT & OUTDOOR</h3>
                            <ul>
                              <li>
                                <Link
                                  to={
                                    "/products/sport-outdoor/sports-equipment"
                                  }
                                >
                                  {" "}
                                  SPORTSEQUIPMENT
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/sport-outdoor/outdoor-apparel"}
                                >
                                  {" "}
                                  OUTDOORAPPERAR
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/sport-outdoor/camping-&-hiking"
                                  }
                                >
                                  {" "}
                                  CAMPINGHIKING
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/sport-outdoor/water-sports"}
                                >
                                  {" "}
                                  WATERSPORTS
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3>
                              <Link to={"/products/jewelry-watches"}>
                                JWELLERY & WATCHES
                              </Link>
                            </h3>
                            <li>
                              <Link
                                to={"/products/jewelry-watches/fine-jewelry"}
                              >
                                FINE JWELLERY
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/products/jewelry-watches/men's-jewelry"}
                              >
                                MEN'S JWELLERY
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/products/jewelry-watches/womensjewelry"}
                              >
                                WOMEN'S JWELLERY
                              </Link>
                            </li>
                          </div>

                          <div className="dropdown-column">
                            <h3>
                              <Link to={"/products/Health & Beauty"}>
                                HEALTH & BEAUTY
                              </Link>
                            </h3>
                            <li>
                              <Link to={"/products/health-beauty/skincare"}>
                                SKINCARE
                              </Link>
                            </li>
                            <li>
                              <Link to={"/products/health-beauty/hair-care"}>
                                HAIR CARE
                              </Link>
                            </li>

                            <li>
                              <Link to={"/products/health-beauty/makeup"}>
                                MAKEUP
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/products/health-beauty/personal-care"}
                              >
                                PERSONAL CARE
                              </Link>
                            </li>
                          </div>

                          <div className="dropdown-column">
                            <h3> BOOKS & OFFICE</h3>
                            <ul>
                              <li>
                                <Link to={"/products/books-office/books"}>
                                  BOOKS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/books-office/office-furniture"}
                                >
                                  OFFICE FURNITURE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/books-office/computers-&-electronics"
                                  }
                                >
                                  COMPUTER & ELECTRONICS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/books-officee/office-supplies"}
                                >
                                  OFFICE SUPPLIES
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="dropdown-column">
                            <h3> TOYS & HOBBIES</h3>
                            <ul>
                              <li>
                                <Link to={"/products/toys-hobbies/toys"}>
                                  TOYS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/toys-hobbies/arts-&-crafts"}
                                >
                                  ARTS & CRAFTS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/toys-hobbies/games-&-puzzle"}
                                ></Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/toys-hobbies/collectibles"}
                                >
                                  COLLECTIBLES
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3> AUTOMOBILES</h3>
                            <ul>
                              <li>
                                <Link to={"/products/automobiles/new-cars"}>
                                  NEW CARS
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/automobiles/used-cars"}>
                                  USED CAR
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/Automobiles/car-accessories"}
                                >
                                  CAR ACCESSORIES
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/Automobiles/fluids-&-chemicals"
                                  }
                                >
                                  FLUIDS & CHEMICALS
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3> HOME DECORATION</h3>
                            <ul>
                              <li>
                                <Link to={"/products/home-decoration/wall-art"}>
                                  WALL ART
                                </Link>{" "}
                              </li>
                              <li>
                                <Link to={"/products/home-decoration/lighting"}>
                                  LIGHTNING
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/home-decoration/furniture"}
                                >
                                  FURNITURE
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/home-decoration/textiles"}>
                                  TEXTILES
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-column">
                            <h3>PORTABLE & PERSONAL</h3>
                            <ul>
                              <li>
                                <Link
                                  to={
                                    "/products/portablepersonal/portableelectronics"
                                  }
                                >
                                  PORTABLE ELECTRONICS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/portablepersonal/personalcaredevices"
                                  }
                                >
                                  PERSONAL CARE DEVICES
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/portablepersonal/travelessentials"
                                  }
                                >
                                  TRAVEL ESSENTIALS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/portablepersonal/HealthFitnessGadgets"
                                  }
                                >
                                  HEALTH & FITNESS GADGETS
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                </Link>

                <li
                  className="navbar-item dropdown font-semibold list-none"
                  onMouseEnter={toggleDropdownPages}
                  onMouseLeave={toggleDropdownPages}
                >
                  PAGES
                    <span className={`fa ${dropdownOpen ? 'fa-times' : 'fa-plus'} ml-2  text-md font-bold text-gray-800 `}></span>
                  {dropdownPages && (
                    <div className="dropdown-menu2 w-[170px]">
                      <div className="">
                        <ul className="flex flex-col font-semibold">
                          <li>
                            <Link to={"/aboutus"}>ABOUT US</Link>
                          </li>
                          <li>
                            <Link to={"/Privacy"}>PRIVACY & POLICY</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <Link to={"/Faq"}>FAQ</Link>
                <Link to={"/contact"}>CONTACT US</Link>
                <Link to={"/Blog"}>BLOG</Link>
              </div>
            </div>
          </nav>

          {/* Start Learning Button */}
          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Link to="/Search" aria-label="Search">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} />
              </button>
            </Link>

            {/* Compare Products Icon */}
            <Link to="/compare" aria-label="Compare products">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <RefreshCw size={20} />
                <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {compareItemCount}
                </span>
              </button>
            </Link>

            {/* Wishlist Icon */}
            <Link to="/wishlist" aria-label="Wishlist">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              </button>
            </Link>

            {/* Shopping Cart Icon */}
            <Link to="/cart" aria-label="Shopping cart">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomNavbar;
