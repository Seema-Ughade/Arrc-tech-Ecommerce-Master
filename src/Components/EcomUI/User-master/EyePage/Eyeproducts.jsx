import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import feature1 from "../Assets/Featur1.jpg";
import feature2 from "../Assets/Featur2.jpg";
import feature3 from "../Assets/Featur3.jpg";
// import feature4 from "../Assets/Featur4.jpg";
import feature5 from "../Assets/Feature5.jpg";
import feature6 from "../Assets/Feature6.jpg";
import feature7 from "../Assets/Feature7.jpg";
import feature8 from "../Assets/Feature8.jpg";
import feature9 from "../Assets/Feature9.jpg";
import feature10 from "../Assets/Feature10.jpg";
import feature11 from "../Assets/Feature11.jpg";
import feature12 from "../Assets/Feature12.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { GoStarFill } from "react-icons/go";

const Features = () => {
  const featured = [
    {
      img: feature1,
      title: "Luxurious Rose Gold Bracelet with Customizable charms,₹948.95",
      price: 948.95,
      rating: 0.0,
    },
    {
      img: feature2,
      title:
        "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,₹423.95",
      price: 423.95,
      rating: 0.0,
    },
    {
      img: feature3,
      title:
        "5G Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,₹2450",
      price: 310.95,
      rating: 0.0,
    },
    {
      img: feature5,
      title:
        "Professional USB Condenser Microphone with Noise Reduction-Perfect for ",
      price: 220.65,
      rating: 0.0,
    },
    {
      img: feature6,
      title:
        "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect ",
      price: 350.2,
      rating: 0.0,
    },
    {
      img: feature7,
      title:
        "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,₹2320",
      price: 650.23,
      rating: 0.0,
    },
    {
      img: feature8,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,₹280",
      price: 320.2,
      rating: 0.0,
    },
    {
      img: feature9,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80",
      price: 80,
      rating: 0.0,
    },
    {
      img: feature10,
      title:
        "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,₹2280",
      price: 280,
      rating: 0.0,
    },
    {
      img: feature11,
      title:
        "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,₹2480",
      price: 480.5,
      rating: 0.0,
    },
    {
      img: feature12,
      title:
        "Elegant Velvent Wrap Dress with Belt-Evening Glamour,₹2155 4000mAh fast Charging,₹2480",
      price: 155,
      rating: 0.0,
    },
  ];

  return (
    <div className="max-w-[80rem] m-auto">
      <div className="head text-center my-6">
        <h2 class="text-3xl font-bold inline-block whitespace-nowrap">
          Our Featured Products
        </h2>
      </div>

      <div className="flex justify-center gap-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="products-slider"
        >
          {featured.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.img}
                    alt="Product"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md">
                    <FaRegHeart />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {product.price}
                  </h3>

                  <div className="flex items-center gap-2">
                    <GoStarFill color="yellow" />
                    <h4>{product.rating} (0)</h4>
                  </div>

                  <div className="flex justify-between items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="absolute bottom-[12rem] right-[4rem] bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                      Add To Cart
                    </button>
                    <div className="flex gap-2">
                      <div className="absolute bottom-[12rem] left-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md !rounded-md  mx-2">
                        <FaInfinity />
                      </div>
                      <div className="absolute bottom-[12rem] right-1 bg-white p-2 rounded-full text-xl cursor-pointer shadow-sm hover:shadow-md !rounded-md mx-2">
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

export default Features;
