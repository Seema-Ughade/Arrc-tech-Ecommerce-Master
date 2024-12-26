import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Home5 = () => {
  const featured = [
    {
      img: feature1,
      title: "Luxurious Rose Gold Bracelet with Customizable charms,₹948.950",
    },
    {
      img: feature2,
      title:
        "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,₹423.950",
    },
    {
      img: feature4,
      title:
        "Education Learning Toy with Light, Sounds,and Interactive Buttons,₹2200",
    },
    {
      img: feature5,
      title:
        "Professional USB Condenser Microphone with Noise Reduction-Perfect for ",
    },
    {
      img: feature7,
      title:
        "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,₹3205",
    },
    {
      img: feature8,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹805",
    },
    {
      img: feature9,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹805",
    },
    {
      img: feature10,
      title:
        "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,₹2805",
    },
    {
      img: feature11,
      title:
        "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,₹4805",
    },
    {
      img: feature12,
      title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,₹8452 4000mAh fast Charging,₹4805",
    },
  ];

  return (
    <div className="max-w-[80rem] m-auto bg-grey-700 p-10">
      <div className="head text-center my-8">
        <h2 class="text-4xl font-bold inline-block whitespace-nowrap">Best Selling Products</h2>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="products-slider"
        >
          {featured.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden">
                <div className="relative">
                  <img
                    src={product.img}
                    alt="Product"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
                    <FaRegHeart />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <button className="absolute bottom-[8rem] right-[4rem] bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition">
                      Add To Cart
                    </button>
                    <div className="flex gap-2">
                      <div className="absolute bottom-[8rem] left-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
                        <FaInfinity />
                      </div>
                      <div className="absolute bottom-[8rem] right-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home5;
