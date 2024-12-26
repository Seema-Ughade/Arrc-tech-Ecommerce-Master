import React, { useState } from "react";
import "./Hero.css";
import books from "../Assets/booksjpg.jpg";
import Electronics from "../Assets/electronicpng.png";
import toys from "../Assets/jwellerypng.png";
import jwellery from "../Assets/toysjpg.jpg";
import automobiles from "../Assets/automobilesjpg.jpg";
import fashion from "../Assets/fashion jpg.jpg";
import sport from "../Assets/sportpng.png";
import camera from "../Assets/camera png.png";
import phone from "../Assets/phonepng.png";
import Health from "../Assets/health jpg.jpg";
import cosmetic from "../Assets/cosmeticpng.png";
import perfume from "../Assets/perfumepng.png";
import shoes from "../Assets/shoespng.png";
import cart1 from "../Assets/cart1.jpg";
import cart2 from "../Assets/cart2.jpg";
import cart3 from "../Assets/cart3.jpg";
import cart4 from "../Assets/cart4.jpg";
import cart5 from "../Assets/cart5.jpg";
import cart6 from "../Assets/cart6.jpg";
import cart7 from "../Assets/cart7.jpg";
import cart8 from "../Assets/cart8.jpg";
import cart9 from "../Assets/cart9.jpg";
import cart10 from "../Assets/cart10.jpg";
import cart11 from "../Assets/cart11.jpg";
import cart12 from "../Assets/cart12.jpg";
import feature1 from "../Assets/Featur1.jpg";
import feature2 from "../Assets/Featur2.jpg";
import feature3 from "../Assets/Featur3.jpg";
import feature4 from "../Assets/Featur4.jpg";
import feature5 from "../Assets/Feature5.jpg";
import feature6 from "../Assets/Feature6.jpg";
import feature7 from "../Assets/Feature7.jpg";
import feature8 from "../Assets/Feature8.jpg";
import feature9 from "../Assets/Feature9.jpg";
import feature10 from "../Assets/Feature10.jpg";
import feature11 from "../Assets/Feature11.jpg";
import feature12 from "../Assets/Feature12.jpg";
import logo1 from "../Assets/logo1.jpg";
import logo2 from "../Assets/logo2.jpg";
import logo3 from "../Assets/logo3.jpg";
import logo4 from "../Assets/logo4.jpg";
import logo5 from "../Assets/logo5.jpg";
import logo6 from "../Assets/logo6.jpg";
import logo7 from "../Assets/logo7.jpg";
import logo8 from "../Assets/logo8.jpg";
import logo9 from "../Assets/logo9.jpg";
import logo10 from "../Assets/logo10.jpg";
import logo11 from "../Assets/logo11.jpg";
import logo12 from "../Assets/logo12.jpg";
import dealimg from "../Assets/deal imgpng.png";
import qualitylogo1 from "../Assets/qulitylogo1.png";
import qualitylogo2 from "../Assets/qualitylogo2.png";
import qualitylogo3 from "../Assets/qualitylogo3.png";
import qualitylogo4 from "../Assets/qualitylogo4.png";
import sellingproduct1 from "../Assets/sellingproduct1.png";
import sellingproduct2 from "../Assets/sellingproduct2.png";
import sellingproduct3 from "../Assets/sellingproduct3.png";
import sellingproduct4 from "../Assets/sellingproduct4.png";
import sellingproduct5 from "../Assets/sellingproduct5.png";
import sellingproduct6 from "../Assets/sellingproduct6.png";
import sellingproduct7 from "../Assets/sellingproduct7.png";
import sellingproduct8 from "../Assets/sellingproduct8.png";
import sellingproduct9 from "../Assets/sellingproduct9.png";
import sellingproduct10 from "../Assets/sellingproduct10.png";
import postimg1 from "../Assets/postimg1.png";
import postimg2 from "../Assets/postimg2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import Slider from "./Slider";
import MonthOffer from "./MonthOffer";
import Categories from "./Categories";
import Features from "./Features";
import Deal from "./Deal";
import OurPartners from "./OurPartners";
import SellingProduct from "./SellingProduct";
import Testimonial from "./Testimonial";
import LatestPost from "./LatestPost";

import Carousel from "../Home/Carousel";


  const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const pages = [
  
      
    ];
  const products = [
    { img: books, title: "Books & Office", count: 3 },
    { img: Electronics, title: "Electronic", count: 3 },
    { img: toys, title: "Toys & Hobbies", count: 2 },
    { img: jwellery, title: "Jewellery & Watches", count: 3 },
    { img: automobiles, title: "Automobiles", count: 0 },
    { img: fashion, title: "Fashion & Beauty", count: 8 },
    { img: sport, title: "Sport & Outdoor", count: 2 },
    { img: camera, title: "Camera & Photo", count: 4 },
    { img: Health, title: "Health & Beauty", count: 3 },
    { img: phone, title: "Smartphone & Tablet", count: 4 },
  ];

  const featured = [
    {
      img: feature1,
      title: "Luxurious Rose Gold Bracelet with Customizable charms,₹948.95",
    },
    {
      img: feature2,
      title:
        "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,₹423.95",
    },
    {
      img: feature3,
      title:
        "5G Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,₹8450",
    },
    {
      img: feature4,
      title:
        "Education Learning Toy with Light, Sounds,and Interactive Buttons,₹3220",
    },
    {
      img: feature5,
      title:
        "Professional USB Condenser Microphone with Noise Reduction-Perfect for Podcast and Streaming,₹7310",
    },
    {
      img: feature6,
      title:
        "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect for Event,₹5350",
    },
    {
      img: feature7,
      title:
        "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,₹2320",
    },
    {
      img: feature8,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹280",
    },
    {
      img: feature9,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹5580",
    },
    {
      img: feature10,
      title:
        "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,₹5280",
    },
    {
      img: feature11,
      title:
        "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,₹4580",
    },
    {
      img: feature12,
      title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,7₹155",
    },
  ];

  const sellingp = [
    {
      img: sellingproduct1,
      title:
        " Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,₹5450",
    },
    {
      img: sellingproduct2,
      title:
        "Education Learning Toy with Light, Sounds,and Interactive Buttons,₹2200",
    },
    {
      img: sellingproduct3,
      title:
        "Professional USB Condenser Microphone with Noise Reduction-Perfect for Podcast and Streaming,₹3108",
    },
    {
      img: sellingproduct4,
      title:
        "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect for Event,₹3505",
    },
    {
      img: sellingproduct5,
      title:
        "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,₹3205",
    },
    {
      img: sellingproduct6,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹805",
    },
    {
      img: sellingproduct7,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹852",
    },
    {
      img: sellingproduct8,
      title:
        "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,₹5666",
    },
    {
      img: sellingproduct9,
      title:
        "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,₹8545",
    },
    {
      img: sellingproduct10,
      title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,₹4512",
    },
  ];

  return (
    <div className="relative">
      {pages[currentPage]}
      <div className="flex justify-center w-full">
        <div className="flex space-x-2">
          {pages.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 -mt-28 z-100 rounded-full cursor-pointer ${currentPage === index ? "bg-red-500" : "bg-red-300"
                }`}
              onClick={() => setCurrentPage(index)} 
            ></span>
          ))}
        </div>
      </div>
      
      <Carousel />
      <Slider />

      

      <MonthOffer />

      <Categories />

      <Features />

      <Deal />

      <OurPartners />

      < SellingProduct />

      <Testimonial />

      <LatestPost />
    </div>
  );
};
export default Home;
