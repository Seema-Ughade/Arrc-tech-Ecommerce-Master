import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaDollarSign, FaLanguage, FaUser } from "react-icons/fa";

const UINavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPages, setDropdownPages] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownPages = () => {
    setDropdownPages(!dropdownPages);
  };

  return (
    <div>
      <header>
        <div className="header h-20">
          <div>
            <h4 className="text-white ">Contact & Support: 00 000 000 000</h4>
          </div>

          <div className=" flex gap-2 text-center">
            <button className=" border  text-center">vender login</button>
            <button className="border  ">Rider login</button>
          </div>

          <div>
            <FaLanguage />
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>
          <div>
            <FaDollarSign/>
            <select>
           <option>USD</option>
           <option>BDT</option>
           <option>EUR</option>
           <option>INR</option>
           <option>NGN</option>
           <option>BRL</option>
            </select>
              
          </div>

          <div className="flex">
          <FaUser color="white"/>
            <button className="vender-btn">  My Account</button>
          </div>
        </div>

        <nav>
          <div className="main font-semibold">
           
            <a href="/" className="font-bold text-2xl">GENIUS SHOP</a>
          

            <div className="navigations">
              <a href="/" className="font-semibold">HOME</a>

              <Link to={"/products"}>
                <li
                  className="navbar-item dropdown"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  PRODUCTS
                  <span className="dropdown-arrow">▼</span>
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <div className="flex">
                        <div className="dropdown-column">
                          <h3>ELECTRONIC</h3>
                          <ul>
                            <li>TELEVISION</li>
                            <li>REFRIGERATOR</li>
                            <li>WASHING MACHINE</li>
                            <li>AIR CONDITIONERS</li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h3>FASHION & BEAUTY</h3>
                          <ul>
                            <li>ACCESSORIES</li>
                            <li>BAGS</li>
                            <li>CLOTHINGS</li>
                            <li>SHOES</li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h3>CAMERA & PHOTO</h3>
                          <ul>
                            <li>DSLR</li>
                            <li>CAMERA PHONE</li>
                            <li>ACTION CAMERA</li>
                            <li>DIGITAL CAMERA</li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h3>SMART PHONE & TABLE</h3>
                          <ul>
                            <li>APPLE</li>
                            <li>SAMSUNG</li>
                            <li>LG</li>
                            <li>SONY</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="dropdown-column">
                          <h3> SPORT & OUTDOOR</h3>
                          <ul>
                            <li>SPORTS EQUIPMENT</li>
                            <li>OUTDOOR APAREL</li>
                            <li>CAMPING & HIKING</li>
                            <li>WATER SPORTS</li>
                          </ul>
                        </div>

                        <div className="dropdown-column">
                          <h3> JEWELLERY & WATCHES</h3>
                          <ul>
                            <li>FINE JWELLERY</li>
                            <li>FASHION JWELLERY</li>
                            <li>MEN'S JWELLERY</li>
                            <li>WOMEN'S JWELLERY</li>
                          </ul>
                        </div>

                        <div className="dropdown-column">
                          <h3> HEALTH & BEAUTY</h3>
                          <ul>
                            <li>SKINCARE</li>
                            <li>HAIR COLOR</li>
                            <li>MAKEUP</li>
                            <li>PERSONAL CARE</li>
                          </ul>
                        </div>

                        <div className="dropdown-column">
                          <h3> BOOKS & OFFICE</h3>
                          <ul>
                            <li>BOOKS</li>
                            <li>OFFICE SUPPLIES</li>
                            <li>OFFICE FURNITURE</li>
                            <li>COMPUTER & ELECTRONICS</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="dropdown-column">
                          <h3> TOYS & HOBBIES</h3>
                          <ul>
                            <li>TOYS</li>
                            <li>ARTS & CRAFTS</li>
                          </ul>
                        </div>

                        <div className="dropdown-column">
                          <h3> AUTOMOBILES</h3>
                          <ul>
                            <li>NEW CARS</li>
                            <li>USED CAR</li>
                          </ul>
                        </div>

                        <div className="dropdown-column">
                          <h3> HOME DECORATION</h3>
                          <ul>
                            <li>WALL ART</li>
                            <li>LIGHTNING</li>
                          </ul>
                        </div>
                        <div className="dropdown-column">
                          <h3>PORTABLE & PERSONAL</h3>
                          <ul>
                            <li>PORTABLE ELECTRONICS</li>
                            <li>PERSONAL CARE DEVICES</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              </Link>

              <li
                className="navbar-item dropdown font-semibold"
                onMouseEnter={toggleDropdownPages}
                onMouseLeave={toggleDropdownPages}
              >
                PAGES
                <span className="dropdown-arrow">▼</span>
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
            </div>
            <Link to={"/Faq"}>FAQ</Link>
            <Link to={"/contact"}>CONTACT US</Link>
            <Link to={"/Blog"}>BLOG</Link>
            <div className="gap-5">
            <div className="flex gap-5 ">
              <Link to={"/search"}>
                <i className="ri-search-line p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
              <Link to={"/compare"}>
              <i className="ri-infinity-fill p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
        
              <Link to={"/login"}>
              <i className="ri-heart-line p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
              <Link to={"/cart"}>
              <i className="ri-shopping-cart-line p-4 bg-transperent rounded-full shadow-md"></i>
              </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default UINavbar;
