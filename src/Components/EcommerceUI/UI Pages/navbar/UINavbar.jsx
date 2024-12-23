import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDollarSign, FaLanguage, FaUser } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
// import Logo from "../../../assets/logo.png";
// import { FaBars, FaCode, FaBriefcase, FaChartLine, FaHeartbeat, FaGraduationCap, FaPalette, FaChevronDown } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const UINavbar = (isAuthenticated) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPages, setDropdownPages] = useState(false);
  const [nav1, setNav1] = useState(true);
  const [nav2, setNav2] = useState(false);

  const toggleNav1 = () => {
    setNav1(!nav1);
    setNav2(false);
  };

  const toggleNav2 = () => {
    setNav2(!nav2);
    setNav1(false);
  };

  const navigate = useNavigate();

  const handleVendorLogin = () => {
    navigate("/user/vendor-register");
  };
  const handleRiderLogin = () => {
    navigate("/user/rider-register");
  };

  const handleLogin = () => {
    navigate("/login");
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

  return (
    <>
    
      <header className="header">
        <div className="gap-20 max-w-7xl h-15 py-2 px-4 flex flex-wrap items-center justify-between md:justify-around">
          {/* Contact Info */}
          <div className="hidden md:flex text-white text-sm md:text-base md:flex-1">
            <h4>Contact & Support: 00 000 000 000</h4>
          </div>

          {/* Login Buttons */}
          <div className="hidden md:flex flex-wrap gap-2 justify-center items-center flex-1 md:flex-none">
            <button       onClick={handleVendorLogin}
 className="px-2 py-1 text-white border border-white hover:bg-white hover:text-gray-800 transition">
              Vendor Login
            </button>

            <button onClick={handleRiderLogin} className="px-2 py-1 text-white border border-white hover:bg-white hover:text-gray-800 transition">
              Rider Login
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 flex-1 md:flex-none justify-center">
            <GrLanguage color="white" fontSize="20px" />
            <select className="bg-transparent  text-white border border-white px-2   rounded focus:outline-none">
              <option className="bg-red-500">English</option>
              <option className="bg-red-500">Hindi</option>
              <option className="bg-red-500">Marathi</option>
            </select>
          </div>

          {/* Currency Selector */}
          <div className="flex items-center gap-2 flex-1 md:flex-none justify-center">
            <FaRupeeSign color="white" fontSize="20px" />
            <select className="bg-transparent text-white border border-white px-2 rounded focus:outline-none">
              <option>USD</option>
              <option>BDT</option>
              <option>EUR</option>
              <option>INR</option>
              <option>NGN</option>
              <option>BRL</option>
            </select>
          </div>

          {/* Account Button */}
          <div className="hidden md:flex items-center gap-2 flex-1 md:flex-none justify-center">
            <FaUser color="white" />
            <button onClick={handleLogin} className="px-2 py-1 text-white border border-white hover:bg-white hover:text-gray-800 transition">
              My Account
            </button>
          </div>
        </div>
      </header>

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
                  <h2 className="font-bold text-5xl">Arrc Technology</h2>
                  <button onClick={toggleDrawer}>X</button>
                </div>

                <div className="flex gap-20">
                  <button onClick={toggleNav1}>
                    MAIN MENU
                  </button>
                  <button onClick={toggleNav2}>
                    CATEGORIES
                  </button>
                </div>

                {
                  nav1 && (
                    <nav className="p-4 space-y-4">
                      <Link to="/" className="block" onClick={toggleDrawer}>
                        HOME
                      </Link>
                      <Link to="/courses" className="block" onClick={toggleDrawer}>
                        PRODUCT
                      </Link>
                      <Link
                        to="/instructors"
                        className="block"
                        onClick={toggleDrawer}
                      >
                        PAGES
                      </Link>
                      <Link to="/products" className="block" onClick={toggleDrawer}>
                        BLOG
                      </Link>
                      <Link to="/forums" className="block" onClick={toggleDrawer}>
                        FAQ
                      </Link>
                      <Link to="/forums" className="block" onClick={toggleDrawer}>
                        CONTACT
                      </Link>

                      <div className="flex flex-col gap-5">
                        <button className="px-2 py-1  border bg-red-500 text-white transition rounded-md">
                          Vendor Login
                        </button>
                        <button className="px-2 py-1  border bg-red-500 text-white transition rounded-md">
                          Rider Login
                        </button>
                        <button className="px-2 py-1  border bg-red-500 text-white transition rounded-md">
                          User Login
                        </button>
                      </div>
                    </nav>
                  )
                }

                {
                  nav2 && (
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
                  )
                }
              </div>
            </div>
          )}

          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* <img src={Logo} alt="Logo" className="w-10 h-10" /> */}
            <h1 className="text-sm md:text-lg font-bold text-gray-800 ml-3">
              <a href="/">Arrc Technology</a>
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
                    {/* <span className="dropdown-arrow">▼</span> */}
                    <span className={`fa ${dropdownOpen ? 'fa-times' : 'fa-plus'} ml-2  text-md font-bold text-gray-800 `}></span>

                    {dropdownOpen && (
                      <div className="dropdown-menu">
                        <div className="flex">
                          <div className="dropdown-column">
                            <h3> ELECTRONIC </h3>
                            <ul>
                              <li>
                                <Link to={"/products/electronics/television"}>
                                  TELEVISION
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/electronics/refrigerator"}>
                                  REFRIGERATOR
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/electronics/washingmachine"}
                                >
                                  WASHING MACHINE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/electronics/washingmachine"}
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
                                  to={"/products/fashionbeauty/accessories"}
                                >
                                  ACCESORIES
                                </Link>
                              </li>

                              <li>
                                <Link to={"/products/fashionbeauty/bags"}>
                                  BAGS
                                </Link>
                                <li>
                                  <Link
                                    to={"/products/fashionbeauty/clothings"}
                                  >
                                    CLOTHINGS
                                  </Link>
                                </li>
                                <Link to={"/products/fashionbeauty/shoes"}>
                                  SHOES
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3>CAMERA & PHOTO</h3>
                            <ul>
                              <li>
                                <Link to={"/products/cameraphoto/dslr"}>
                                  DSLR
                                </Link>
                                <li>
                                  <Link
                                    to={"/products/cameraphoto/cameraphone"}
                                  >
                                    CAMERAPHONE
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={"/products/cameraphoto/actioncamera"}
                                  >
                                    {" "}
                                    ACTIONCAMERA
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={"/products/cameraphoto/digitalcamera"}
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
                                <Link to={"/products/samartphonetable/apple"}>
                                  {" "}
                                  APPLE
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/samartphonetable/samsung"}>
                                  SAMSUNG
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/samartphonetable/lg"}>
                                  LG
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/samartphonetable/sony"}>
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
                                  to={"/products/sportoutdoor/sportequipment"}
                                >
                                  {" "}
                                  SPORTSEQUIPMENT
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/sportoutdoor/outdoorapparel"}
                                >
                                  {" "}
                                  OUTDOORAPPERAR
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/sportoutdoor/campinghiking"}
                                >
                                  {" "}
                                  CAMPINGHIKING
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/sportoutdoor/watersports"}>
                                  {" "}
                                  WATERSPORTS
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3>
                              <Link to={"/products/JewelryWatches"}>
                                JWELLERY & WATCHES
                              </Link>
                            </h3>
                            <li>
                              <Link to={"/products/jewelrywatches/finejewelry"}>
                                FINE JWELLERY
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/products/jewelrywatches/meansjewelry"}
                              >
                                MEN'S JWELLERY
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/products/jewelrywatches/womensjewelry"}
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
                              <Link to={"/products/healthbeauty/skincare"}>
                                SKINCARE
                              </Link>
                            </li>
                            <li>
                              <Link to={"/products/healthbeauty/haircare"}>
                                HAIR CARE
                              </Link>
                            </li>

                            <li>
                              <Link to={"/products/healthbeauty/makeup"}>
                                MAKEUP
                              </Link>
                            </li>
                            <li>
                              <Link to={"/products/healthbeauty/personalcare"}>
                                PERSONAL CARE
                              </Link>
                            </li>
                          </div>

                          <div className="dropdown-column">
                            <h3> BOOKS & OFFICE</h3>
                            <ul>
                              <li>
                                <Link to={"/products/booksoffice/books"}>
                                  BOOKS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/booksoffice/officefurniture"}
                                >
                                  OFFICE FURNITURE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products/booksoffice/computerselectronics"
                                  }
                                >
                                  COMPUTER & ELECTRONICS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/booksoffice/officesupplies"}
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
                                <Link to={"/products/toyshobbies/toys"}>
                                  TOYS
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/toyshobbies/artscrafts"}>
                                  ARTS & CRAFTS
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/toyshobbies/gamespuzzles"}>
                                  GAMES & PUZZLES
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/toyshobbies/collectibles"}>
                                  COLLECTIBLES
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="dropdown-column">
                            <h3> AUTOMOBILES</h3>
                            <ul>
                              <li>
                                <Link to={"/products/automobiles/newcars"}>
                                  NEW CARS
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/automobiles/usedcars"}>
                                  USED CAR
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/Automobiles/CarAccessories"}
                                >
                                  CAR ACCESSORIES
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/products/Automobiles/FluidsChemicals"}
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
                                <Link to={"/products/homedecoration/wallart"}>
                                  WALL ART
                                </Link>{" "}
                              </li>
                              <li>
                                <Link to={"/products/homedecoration/lighting"}>
                                  LIGHTNING
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/homedecoration/furniture"}>
                                  FURNITURE
                                </Link>
                              </li>
                              <li>
                                <Link to={"/products/Home Decoration/Textiles"}>
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
                                    "/products/Portable & Personal/HealthFitnessGadgets"
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
                  className="navbar-item dropdown font-semibold list-none
                  "
                  onMouseEnter={toggleDropdownPages}
                  onMouseLeave={toggleDropdownPages}
                >
                  PAGES
                  {/* <span className="dropdown-arrow">▼</span> */}
                  <span className={`fa ${dropdownPages ? 'fa-times' : 'fa-plus'} ml-2  text-md font-bold text-gray-800 `}></span>

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
                <Link to={"/Blog"}>BLOG</Link>

                <Link to={"/Faq"}>FAQ</Link>
                <Link to={"/contact"}>CONTACT US</Link>
              </div>
            </div>
          </nav>

          {/* Start Learning Button */}
          <div className="gap-5">
            <div class="flex gap-5 ">
              <Link to={"/search"}>
                <i class="ri-search-line p-2 md:p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
              <Link to={"/compare"}>
                <i class="ri-infinity-fill p-2 md:p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>

              <Link to={"/login"}>
                <i class="ri-heart-line p-2 md:p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
              <Link to={"/cart"}>
                <i class="ri-shopping-cart-line p-2 md:p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default UINavbar;


// import { useState } from 'react'
// import { Menu, Search, Heart, ShoppingCart, RefreshCw, ChevronDown, Phone } from 'lucide-react'

// export default function UINavbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <div className="w-full">
//       {/* Top Bar */}
//       <div className="bg-[#ff3333] text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-12">
//             {/* Contact Info */}
//             <div className="hidden md:flex items-center space-x-2">
//               <Phone size={16} />
//               <span>Contact & Support: 00 000 000 000</span>
//             </div>

//             {/* Right Side Items */}
//             <div className="flex items-center space-x-4 ml-auto">
//               <button className="px-4 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors">
//                 Vendor Login
//               </button>
//               <button className="px-4 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors">
//                 Rider Login
//               </button>
//               <div className="flex items-center space-x-2">
//                 <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
//                   <span>English</span>
//                   <ChevronDown size={16} />
//                 </button>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
//                   <span>USD</span>
//                   <ChevronDown size={16} />
//                 </button>
//               </div>
//               <button className="hidden md:block hover:opacity-80 transition-opacity">
//                 My Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="bg-white shadow">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               <Menu size={24} />
//             </button>

//             {/* Logo */}
//             <a href="/" className="text-xl font-bold hover:text-[#ff3333] transition-colors">
//               Genius Shop
//             </a>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="/" className="font-medium hover:text-[#ff3333] transition-colors">HOME</a>
//               <div className="relative group">
//                 <button className="flex items-center space-x-1 font-medium group-hover:text-[#ff3333] transition-colors">
//                   <span>PRODUCTS</span>
//                   <ChevronDown size={16} />
//                 </button>
//                 {/* Dropdown menu can be added here */}
//               </div>
//               <div className="relative group">
//                 <button className="flex items-center space-x-1 font-medium group-hover:text-[#ff3333] transition-colors">
//                   <span>PAGES</span>
//                   <ChevronDown size={16} />
//                 </button>
//                 {/* Dropdown menu can be added here */}
//               </div>
//               <a href="/blog" className="font-medium hover:text-[#ff3333] transition-colors">BLOG</a>
//               <a href="/faq" className="font-medium hover:text-[#ff3333] transition-colors">FAQ</a>
//               <a href="/contact" className="font-medium hover:text-[#ff3333] transition-colors">CONTACT US</a>
//             </nav>

//             {/* Icons */}
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
//                 <Search size={20} />
//               </button>
//               <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Compare products">
//                 <RefreshCw size={20} />
//                 <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </button>
//               <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Wishlist">
//                 <Heart size={20} />
//                 <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </button>
//               <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Shopping cart">
//                 <ShoppingCart size={20} />
//                 <span className="absolute -top-2 -right-2 bg-[#ff3333] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   1
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="container mx-auto px-4 py-4">
//             <nav className="flex flex-col space-y-4">
//               <a href="/" className="font-medium hover:text-[#ff3333] transition-colors">HOME</a>
//               <button className="flex items-center justify-between font-medium w-full hover:text-[#ff3333] transition-colors">
//                 <span>PRODUCTS</span>
//                 <ChevronDown size={16} />
//               </button>
//               <button className="flex items-center justify-between font-medium w-full hover:text-[#ff3333] transition-colors">
//                 <span>PAGES</span>
//                 <ChevronDown size={16} />
//               </button>
//               <a href="/blog" className="font-medium hover:text-[#ff3333] transition-colors">BLOG</a>
//               <a href="/faq" className="font-medium hover:text-[#ff3333] transition-colors">FAQ</a>
//               <a href="/contact" className="font-medium hover:text-[#ff3333] transition-colors">CONTACT US</a>
//             </nav>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

