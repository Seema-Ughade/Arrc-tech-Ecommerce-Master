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

import Carousel from "./Carousel";

const Hero = () => {
  // const [currentPage, setCurrentPage] = useState(0);

  // const pages = [];

  // const products = [
  //   {
  //     id: 1,
  //     image: cart1,
  //     title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
  //     price: 318.95,
  //     oldPrice: 423.95,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 2,
  //     image: cart2,
  //     title: "Cozy Knit Sweater with Turtleneck and Cable Knit",
  //     price: 318.95,
  //     oldPrice: 423.95,
  //     rating: 0,
  //     category: "TRENDING",
  //   },
  //   {
  //     id: 2,
  //     image: cart2,
  //     title: "Cozy Knit Sweater with Turtleneck and Cable Knit",
  //     price: 318.95,
  //     oldPrice: 423.95,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 3,
  //     image: cart3,
  //     title: "High-Waisted Skinny Jeans with Distressed Details",
  //     price: 267.5,
  //     oldPrice: 404,
  //     rating: 0,
  //     category: "BEST SELLING",
  //   },
  //   {
  //     id: 3,
  //     image: cart3,
  //     title: "High-Waisted Skinny Jeans with Distressed Details",
  //     price: 267.5,
  //     oldPrice: 404,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 4,
  //     image: cart4,
  //     title: "Gaming Headset with Surround Sound, LED Lighting",
  //     price: 146.75,
  //     oldPrice: 236,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 5,
  //     image: cart5,
  //     title: "Classic Science Fiction Novel with Dystopian Themes",
  //     price: 215,
  //     oldPrice: 372.5,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 6,
  //     image: cart6,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 7,
  //     image: cart7,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 8,
  //     image: cart8,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 9,
  //     image: cart9,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 10,
  //     image: cart10,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 11,
  //     image: cart11,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 8,
  //     image: cart12,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "NEW ARRIVAL",
  //   },
  //   {
  //     id: 8,
  //     image: cart6,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "BEST SELLING",
  //   },
  //   {
  //     id: 8,
  //     image: cart6,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "POPULAR",
  //   },
  //   {
  //     id: 8,
  //     image: cart6,
  //     title: "Luxury Smartwatch with Stainless Steel Case",
  //     price: 99,
  //     oldPrice: 160,
  //     rating: 0,
  //     category: "BEST SELLING",
  //   },


  //   // Add more products with respective categories...
  // ];

  // const featured = [
  //   {
  //     img: feature1,
  //     title: "Luxurious Rose Gold Bracelet with Customizable charms,948.95",
  //   },
  //   {
  //     img: feature2,
  //     title:
  //       "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,423.95",
  //   },
  //   {
  //     img: feature3,
  //     title:
  //       "5G Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,450",
  //   },
  //   {
  //     img: feature4,
  //     title:
  //       "Education Learning Toy with Light, Sounds,and Interactive Buttons,220",
  //   },
  //   {
  //     img: feature5,
  //     title:
  //       "Professional USB Condenser Microphone with Noise Reduction-Perfect for Podcast and Streaming,310",
  //   },
  //   {
  //     img: feature6,
  //     title:
  //       "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect for Event,350",
  //   },
  //   {
  //     img: feature7,
  //     title:
  //       "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,320",
  //   },
  //   {
  //     img: feature8,
  //     title:
  //       "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
  //   },
  //   {
  //     img: feature9,
  //     title:
  //       "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
  //   },
  //   {
  //     img: feature10,
  //     title:
  //       "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,280",
  //   },
  //   {
  //     img: feature11,
  //     title:
  //       "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,480",
  //   },
  //   {
  //     img: feature12,
  //     title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,155",
  //   },
  // ];

  // const sellingp = [
  //   {
  //     img: sellingproduct1,
  //     title:
  //       " Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,450",
  //   },
  //   {
  //     img: sellingproduct2,
  //     title:
  //       "Education Learning Toy with Light, Sounds,and Interactive Buttons,220",
  //   },
  //   {
  //     img: sellingproduct3,
  //     title:
  //       "Professional USB Condenser Microphone with Noise Reduction-Perfect for Podcast and Streaming,310",
  //   },
  //   {
  //     img: sellingproduct4,
  //     title:
  //       "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect for Event,350",
  //   },
  //   {
  //     img: sellingproduct5,
  //     title:
  //       "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,320",
  //   },
  //   {
  //     img: sellingproduct6,
  //     title:
  //       "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
  //   },
  //   {
  //     img: sellingproduct7,
  //     title:
  //       "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
  //   },
  //   {
  //     img: sellingproduct8,
  //     title:
  //       "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,280",
  //   },
  //   {
  //     img: sellingproduct9,
  //     title:
  //       "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,480",
  //   },
  //   {
  //     img: sellingproduct10,
  //     title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,155",
  //   },
  // ];

  return (
    <div className="relative">
      {/* {pages[currentPage]} */}

      {/* <div className="flex justify-center w-full">
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
      </div> */}

      <Carousel />
      <Slider />
      <MonthOffer />
      <Categories />;
      <Features />
      <Deal />
      <OurPartners />
      <SellingProduct />
      <Testimonial />
      <LatestPost />
    </div>
  );
};
export default Hero;
