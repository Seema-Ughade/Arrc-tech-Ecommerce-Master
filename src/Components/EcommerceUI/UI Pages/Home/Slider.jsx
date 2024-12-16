import React from 'react';
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
const Home2 = () => {
  const products = [
    { img: books, title: "Books & Office", count: "(3)" },
    { img: Electronics, title: "Electronic", count: "(3)" },
    { img: toys, title: "Toys & Hobbies", count: "(2)" },
    { img: jwellery, title: "Jewellery & Watches", count: "(3)" },
    { img: automobiles, title: "Automobiles", count: "(0)" },
    { img: fashion, title: "Fashion & Beauty", count: "(8)" },
    { img: sport, title: "Sport & Outdoor", count: "(2)" },
    { img: camera, title: "Camera & Photo", count: "(4)" },
    { img: Health, title: "Health & Beauty", count: "(3)" },
    { img: phone, title: "Smartphone & Tablet", count: "(4)" },
  ];
  return (
    <div className="home2">
      <div className="products px-4 py-6">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 10 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="products-slider w-[90%]"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product text-center p-4 rounded-lg bg-white  transition-shadow duration-300">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-25 h-25 mx-auto mb-4 border-2 border-gray-500 object-cover transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-lg font-bold">
                  {product.title}
                </h3>
                <p className="font-bold">{product.count}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Home2