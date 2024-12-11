import React from "react";
import "./Footer.css";
import "remixicon/fonts/remixicon.css";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import footer1 from "../../../../assets/Assets/footer1jpg.jpg";
import footer2 from "../../../../assets/Assets/footer2.jpg";
import footer3 from "../../../../assets/Assets/footer3.jpg";

const Footer = () => {
  return (
    <>
      <div className="home11">
        <div className="signup">
          <h1>SIGN UP TO NEWSLATTER</h1>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Send
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section">
            <h4>Genius Shop</h4>
            <div className="flex gap-10">
              {/* <i className="ri-shopping-cart-line color:{'#00bcd4'}" ></i> */}
              <IoCallOutline fontSize={"25px"} />
              00 000 000 000
            </div>

            <div className="flex gap-10">
              <IoMdMail fontSize={"25px"} />
              admin@geniusocean.com
            </div>

            <div className="flex gap-10">
              <IoLocationSharp fontSize={"25px"} />
              3584 Hickory Heights Drive,USA
            </div>
          </div>

          <div className="footer-section">
            <h4>Product Category</h4>
            <div>Electronics</div>
            <div>Fashion & Beauty</div>
            <div>Camera & Photo</div>
            <div>Smart phone & Table</div>
            <div>Spport & Outdoor</div>
            <div>jwellery & watches</div>
          </div>

          <div className="footer-section">
            <h4>Home</h4>
            <div>Blog</div>
            <div>Faq</div>
            <div>About Us</div>
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
            <div>Contact Us</div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4>Recent Post</h4>
            <div className="footer-img">
              <div className="image-1">
                <img src={footer1} width={"100px"} height={"100px"} alt="" />
                <div>
                  <p className="recentPostTitle">
                    10 Must-Have Fashion Staples for Every Woman'
                  </p>
                  <p className="recentPostTitle">Jan 15 2024</p>
                </div>
              </div>

              <div className="image-1">
                <img src={footer2} width={"100px"} height={"100px"} alt="" />
                <div>
                  <p className="recentPostTitle">
                    10 Must-Have Fashion Staples for Every Woman'
                  </p>
                  <p className="recentPostTitle">Jan 15 2024</p>
                </div>
              </div>

              <div className="image-1">
                <img src={footer3} width={"100px"} height={"100px"} alt="" />
                <div>
                  <p>10 Must-Have Fashion Staples for Every Woman'</p>
                  <p>Jan 15 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} COPYRIGHT 2024. All Rights
            Reserved By Arrc Technology
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
