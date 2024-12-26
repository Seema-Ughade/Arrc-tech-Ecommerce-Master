import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
import { Link } from "react-router-dom";
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);

  const slides = [
    {
      img: books,
      title: "Books & Office",
      count: "(3)",
      link: "/products/books-office/books",
    },
    {
      img: Electronics,
      title: "Electronic",
      count: "(3)",
      link: "/products/electronic/television",
    },
    {
      img: toys,
      title: "Toys & Hobbies",
      count: "(2)",
      link:"/products/toys-hobbies/toys",
    },
    {
      img: jwellery,
      title: "Jewellery & Watches",
      count: "(3)",
      link: "/products/jewelry-watches/fashionjewelry",
    },
    {
      img: automobiles,
      title: "Automobiles",
      count: "(0)",
      link: "/products/automobiles/new-cars" ,
    },
    {
      img: fashion,
      title: "Fashion & Beauty",
      count: "(8)",
      link: "/products/fashion-beauty/clothings",
    },
    {
      img: sport,
      title: "Sport & Outdoor",
      count: "(2)",
      link: "/products/sport-outdoor/sports-equipment",
    },
    {
      img: camera,
      title: "Camera & Photo",
      count: "(4)",
      link: "/products/camera-photo/dslr",
    },
    {
      img: Health,
      title: "Health & Beauty",
      count: "(3)",
      link: "/products/health-beauty/hair-care",
    },
    {
      img: phone,
      title: "Smartphone & Tablet",
      count: "(4)",
      link: "/products/smart-phone-table/apple",
    },
  ];

  // Detect screen size and update visible slides
  const updateVisibleSlides = () => {
    if (window.innerWidth < 640) {
      setVisibleSlides(1); // Show 1 slide on mobile
    } else {
      setVisibleSlides(5); // Show 5 slides on larger screens
    }
  };

  useEffect(() => {
    updateVisibleSlides(); // Set initial value
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Calculate the indices for visible slides
  const activeSlides = [];
  for (let i = 0; i < visibleSlides; i++) {
    activeSlides.push(slides[(activeIndex + i) % slides.length]);
  }

  return (
    <div className="home2">
      <div className="products px-4 py-6 flex gap-4 justify-center">
        {activeSlides.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="relative transition-transform duration-700 ease-in-out"
          >
            <div className="product text-center p-4 rounded-lg bg-white  transition-shadow duration-300">
              <img
                src={product.img}
                alt={product.title}
                className="w-25 h-25 mx-auto mb-4 border-2 border-gray-500 object-cover transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="font-bold">{product.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;
