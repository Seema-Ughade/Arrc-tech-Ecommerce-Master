import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Import images
import books from "./assets/books.png";
import Electronics from "./assets/electronics.png";
import toys from "./assets/toys.png";
import jwellery from "./assets/jwellery.png";
import automobiles from "./assets/automobiles.png";
import fashion from "./assets/fashion.png";
import sport from "./assets/sport.png";
import camera from "./assets/camera.png";
import Health from "./assets/health.png";
import phone from "./assets/phone.png";

const Home2 = () => {
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

  return (
    <div className="home2">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="products-slider"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product text-center p-4 border rounded-lg shadow-md">
              <img
                src={product.img}
                alt={product.title}
                className="w-32 h-32 mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.count}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home2;