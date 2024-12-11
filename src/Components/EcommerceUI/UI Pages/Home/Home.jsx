import React from "react";
import "./Home.css";
import Shopping from "../../../../assets/Assets/shopping.png";
import books from "../../../../assets/Assets/booksjpg.jpg";
import Electronics from "../../../../assets/Assets/electronicpng.png";
import toys from "../../../../assets/Assets/jwellerypng.png";
import jwellery from "../../../../assets/Assets/toysjpg.jpg";
import automobiles from "../../../../assets/Assets/automobilesjpg.jpg";
import fashion from "../../../../assets/Assets/fashion jpg.jpg";
import sport from "../../../../assets/Assets/sportpng.png";
import camera from "../../../../assets/Assets/camera png.png";
import phone from "../../../../assets/Assets/phonepng.png";
import Health from "../../../../assets/Assets/health jpg.jpg";
import cosmetic from "../../../../assets/Assets/cosmeticpng.png";
import perfume from "../../../../assets/Assets/perfumepng.png";
import shoes from "../../../../assets/Assets/shoespng.png";
import cart1 from "../../../../assets/Assets/cart1.jpg";
import cart2 from "../../../../assets/Assets/cart2.jpg";
import cart3 from "../../../../assets/Assets/cart3.jpg";
import cart4 from "../../../../assets/Assets/cart4.jpg";
import cart5 from "../../../../assets/Assets/cart5.jpg";
import cart6 from "../../../../assets/Assets/cart6.jpg";
import cart7 from "../../../../assets/Assets/cart7.jpg";
import cart8 from "../../../../assets/Assets/cart8.jpg";
import cart9 from "../../../../assets/Assets/cart9.jpg";
import cart10 from "../../../../assets/Assets/cart10.jpg";
import cart11 from "../../../../assets/Assets/cart11.jpg";
import cart12 from "../../../../assets/Assets/cart12.jpg";
import feature1 from "../../../../assets/Assets/Featur1.jpg";
import feature2 from "../../../../assets/Assets/Featur2.jpg";
import feature3 from "../../../../assets/Assets/Featur3.jpg";
import feature4 from "../../../../assets/Assets/Featur4.jpg";
import feature5 from "../../../../assets/Assets/Feature5.jpg";
import feature6 from "../../../../assets/Assets/Feature6.jpg";
import feature7 from "../../../../assets/Assets/Feature7.jpg";
import feature8 from "../../../../assets/Assets/Feature8.jpg";
import feature9 from "../../../../assets/Assets/Feature9.jpg";
import feature10 from "../../../../assets/Assets/Feature10.jpg";
import feature11 from "../../../../assets/Assets/Feature11.jpg";
import feature12 from "../../../../assets/Assets/Feature12.jpg";
import logo1 from "../../../../assets/Assets/logo1.jpg";
import logo2 from "../../../../assets/Assets/logo2.jpg";
import logo3 from "../../../../assets/Assets/logo3.jpg";
import logo4 from "../../../../assets/Assets/logo4.jpg";
import logo5 from "../../../../assets/Assets/logo5.jpg";
import logo6 from "../../../../assets/Assets/logo6.jpg";
import logo7 from "../../../../assets/Assets/logo7.jpg";
import logo8 from "../../../../assets/Assets/logo8.jpg";
import logo9 from "../../../../assets/Assets/logo9.jpg";
import logo10 from "../../../../assets/Assets/logo10.jpg";
import logo11 from "../../../../assets/Assets/logo11.jpg";
import logo12 from "../../../../assets/Assets/logo12.jpg";
import dealimg from "../../../../assets/Assets/deal imgpng.png";
import qualitylogo1 from "../../../../assets/Assets/qulitylogo1.png";
import qualitylogo2 from "../../../../assets/Assets/qualitylogo2.png";
import qualitylogo3 from "../../../../assets/Assets/qualitylogo3.png";
import qualitylogo4 from "../../../../assets/Assets/qualitylogo4.png";
import sellingproduct1 from "../../../../assets/Assets/sellingproduct1.png";
import sellingproduct2 from "../../../../assets/Assets/sellingproduct2.png";
import sellingproduct3 from "../../../../assets/Assets/sellingproduct3.png";
import sellingproduct4 from "../../../../assets/Assets/sellingproduct4.png";
import sellingproduct5 from "../../../../assets/Assets/sellingproduct5.png";
import sellingproduct6 from "../../../../assets/Assets/sellingproduct6.png";
import sellingproduct7 from "../../../../assets/Assets/sellingproduct7.png";
import sellingproduct8 from "../../../../assets/Assets/sellingproduct8.png";
import sellingproduct9 from "../../../../assets/Assets/sellingproduct9.png";
import sellingproduct10 from "../../../../assets/Assets/sellingproduct10.png";
import postimg1 from "../../../../assets/Assets/postimg1.png";
import postimg2 from "../../../../assets/Assets/postimg2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import UINavbar from '../Home/Home.jsx'

const Home = () => {

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
      title: "Luxurious Rose Gold Bracelet with Customizable charms,948.95$",
    },
    {
      img: feature2,
      title:
        "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108 MP Quad Camera,423.95$",
    },
    {
      img: feature3,
      title:
        "5G Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,450$",
    },
    {
      img: feature4,
      title:
        "Education Learning Toy with Light, Sounds,and Interactive Buttons,220$",
    },
    {
      img: feature5,
      title:
        "Professional USB Condenser Microphone with Noise Reduction-Perfect for Podcast and Streaming,310$",
    },
    {
      img: feature6,
      title:
        "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect for Event,350$",
    },
    {
      img: feature7,
      title:
        "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,320$",
    },
    {
      img: feature8,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80$",
    },
    {
      img: feature9,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80$",
    },
    {
      img: feature10,
      title:
        "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,280$",
    },
    {
      img: feature11,
      title:
        "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,480$",
    },
    {
      img: feature12,
      title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,155$",
    },
  ];

  const sellingp = [
    {
      img: sellingproduct1,
      title:
        " Smartphone with 128GB storage,48MP Triple Camera,and AMOLED Display,450$",
    },
    {
      img: sellingproduct2,
      title:
        "Education Learning Toy with Light, Sounds,and Interactive Buttons,220$",
    },
    {
      img: sellingproduct3,
      title:
        "Professional USB Condenser Microphone with Noise Reduction-Perfect for Podcast and Streaming,310$",
    },
    {
      img: sellingproduct4,
      title:
        "Elegant Evening Clutch with Metallic Finish and Detachable chain Strap-Perfect for Event,350$",
    },
    {
      img: sellingproduct5,
      title:
        "Organic Cleansing Balm with Aloe Vera and Green Tea Extract-100ml,320$",
    },
    {
      img: sellingproduct6,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80$",
    },
    {
      img: sellingproduct7,
      title:
        "Musical Stuffed Animal with Gentle Lullabies and Soft Glow-Perfact for Infants,80$",
    },
    {
      img: sellingproduct8,
      title:
        "High-Performance BB cream with SPF 30 and Skin-Tone Adapting Formula,280$",
    },
    {
      img: sellingproduct9,
      title:
        "Mid-Range Mobile With with 48MP AI Camera,6GB RAM,and 4000mAh fast Charging,480$",
    },
    {
      img: sellingproduct10,
      title: "Elegant Velvent Wrap Dress with Belt-Evening Glamour,155$",
    },
  ];

  return (

    <div className="container1 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1245px] xl-max:max-w-[1440px] 2xl:max-w-[1536px]">
          <UINavbar/>

      <div className="home1">
        {/* left box */}
        <div className="leftBox">
          <p className="leftBoxHeading">Fresh Foods</p>
          <h1>Get upto 40% off </h1>
          <p>Buy the best organic food for your healthy future and family.</p>
        </div>

        {/* right box */}
        <div id="shopping">
          <img src={Shopping} alt="" />
        </div>
      </div>

      <div className="home2">
        <div className="products">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            className="products-slider"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product text-center p-4 rounded-lg ">
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
      </div>

      <div className="Home3">
        <div className="text">
          <strong>Best Month offer</strong>
          <p>
            Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus
            fermentum tristique lobortis lectus{" "}
          </p>
          <p>magnis. Consequat porta turpis maecenas</p>
        </div>

        <div className="flex justify-center">
          <div className="sale1">
            <img src={cosmetic} alt="" />
          </div>

          <div>
            <div className="sale2">
              <img src={perfume} alt="" />
            </div>

            <div className="sale3">
              <img src={shoes} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home4">
        <div className="head">
          <strong>Explore Our Products</strong>
        </div>

        <nav>
          <div>
            <div className="nav">
              <a href="/">NEW ARRIVAL</a>
              <a href="/">TRENDING</a>
              <a href="/">BEST SELLING</a>
              <a href="/">POPULAR</a>
            </div>
          </div>
        </nav>

        <div className="cart">
          <div className="cart1">
            <div className="imgBox">
              <img src={cart1} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>

            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>

              <div className="infinity">
                <FaInfinity />
              </div>

              <div className="eye">
                <IoEyeOutline />
              </div>
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Chic Off-Shoulder Ruffle Dress with Floral Print
              </div>
              <div className="flex">
                <h3>318.95$</h3>
                <h3>423.95$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart2} alt="" />
            </div>
            <div className="heartIcon">
              <FaRegHeart />
            </div>

            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>

            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Cozy Knit Sweater with Turtleneck and Cable Knit P...
              </div>
              <div className="flex">
                <h3>267.50$</h3>
                <h3>404$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart3} alt="" />
            </div>
            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                High-Waisted Skinny Jeans with Distressed Details ...
              </div>
              <div className="flex">
                <h3>146.75$</h3>
                <h3>236$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart4} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart5} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart6} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>

            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>

              <div className="infinity">
                <FaInfinity />
              </div>

              <div className="eye">
                <IoEyeOutline />
              </div>
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
                <div className="flex"></div>
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart7} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart8} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart9} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart10} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>

            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>

            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart11} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>
            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>
            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>

          <div className="cart1">
            <div className="imgBox">
              <img src={cart12} alt="" />
            </div>

            <div className="heartIcon">
              <FaRegHeart />
            </div>

            <div className="box1">
              <div className="buttons">
                <button class="cart-btn">Add To Cart</button>
              </div>
            </div>

            <div className="infinity">
              <FaInfinity />
            </div>

            <div className="eye">
              <IoEyeOutline />
            </div>

            <div className="cartContent">
              <div className="contentHead">
                Gaming Headset with Surround Sound, LED Lighting,{" "}
              </div>
              <div className="flex">
                <h3>215$</h3>
                <h3>372.50$</h3>
                <h4>0.0 (0)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home5">
        <div className="head">
          <strong>Our Featured Products</strong>
        </div>

        <div className="home5Main flex justify-center gap-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="products-slider "
          >
            {featured.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="features">
                  <div className="featuresimg">
                    <div className="imgBoxf">
                      <img src={product.img} alt="" />
                    </div>

                    <div className="heartIcon1">
                      <FaRegHeart />
                    </div>

                    <div className="imgBoxf">
                      <div className="buttons2">
                        <button class="cart-btn">Add To Cart</button>
                      </div>

                      <div className="infinity1">
                        <FaInfinity />
                      </div>

                      <div className="eye1">
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="home6">
        <div className="Deal">
          <strong>
            DEAL<br></br>
            OF THE DAY
          </strong>
          <h3>CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT</h3>
          <p>
            Donec condimentum Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <p>
            Cras cursus pretium sapien, in pulvinar ipsum molestie id. Aliquam
            erat volutpat.
          </p>
          <p> Duis quam tellus, ullamcorper.....</p>

          <div className="DD">
            <div className="dd">
              <p>203</p>
              <p>DAY</p>
            </div>
            <div className="dd">
              <p>15</p>
              <p>HOUR</p>
            </div>
            <div className="dd">
              <p>49</p>
              <p>MIN</p>
            </div>
            <div className="dd">
              <p>35</p>
              <p>SEC</p>
            </div>
          </div>

          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="Dealimg">
          <img src={dealimg} alt="" className="dealingimg" />
        </div>
      </div>

      <div className="home7">
        <div className="logos">
          <strong>OUR PARTNERS</strong>
          <p>
            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
            excepteur voluptate velit ipsum esse
          </p>
          <p>enim Cillum eu id enim aliquip aute ullamco.</p>
        </div>

        <div className="logoimg">
          <div>
            <img src={logo1} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo2} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo3} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo4} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo5} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo6} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo7} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo8} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo9} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo10} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo11} alt="" className="logoimage" />
          </div>
          <div>
            <img src={logo12} alt="" className="logoimage" />
          </div>
        </div>
      </div>

      <div className="home8">
        <div className="head">
          <strong>Best Selling Products</strong>
        </div>

        <div className="home5Main flex justify-center gap-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="products-slider "
          >
            {sellingp.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="features">
                  <div className="featuresimg">
                    <div className="imgBoxf">
                      <img src={product.img} alt="" />
                    </div>

                    <div className="heartIcon1">
                      <FaRegHeart />
                    </div>

                    <div className="imgBoxf">
                      <div className="buttons2">
                        <button class="cart-btn">Add To Cart</button>
                      </div>

                      <div className="infinity1">
                        <FaInfinity />
                      </div>

                      <div className="eye1">
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="home9">
        <div className="qualitylogo">
          <div className="qualitycontainer">
            <img src={qualitylogo1} alt="" className="qimg" />
            <div>
              <h3>Manage Quality </h3>
              <p> Best Quality Gaurentee </p>
            </div>
          </div>

          <div className="qualitycontainer">
            <img src={qualitylogo2} alt="" className="qimg" />
            <div>
              <h3>Win $100 To Shop</h3>
              <p> Enter Now </p>
            </div>
          </div>

          <div className="qualitycontainer">
            <img src={qualitylogo3} alt="" className="qimg" />
            <div>
              <h3>Best Online Support </h3>
              <p> Hour: 10:00AM - 5:00PM </p>
            </div>
          </div>

          <div className="qualitycontainer">
            <img src={qualitylogo4} alt="" className="qimg" />
            <div>
              <h3>Money Gurantee </h3>
              <p>With A 30 Days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Home10">
        <div className="post">
          <strong>Latest Post</strong>
          <p>
            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
            excepteur voluptate
          </p>
          <p>velit ipsum esse enim.</p>

          <div className="posti">
            <div className="posti1">
              <img src={postimg1} alt="" />
              <div className="All">
                <strong>
                  Fashion on a Budget: How to Look Chic Without Breaking the
                  B...
                </strong>
                <h2>02 Jan, 2019</h2>
                <p>
                  Looking chic and stylish doesn’t have to come with a hefty
                  price tag. With the right strategies, you can build a
                  fashionable wardrobe that reflects yo...
                </p>
                <h4>READ MORE</h4>
              </div>
            </div>

            <div className="posti2">
              <img src={postimg2} alt="" />
              <div className="All">
                <strong>
                  10 Must-Have Fashion Staples for Every Woman's Wardrobe
                </strong>
                <h2>02 Jan, 2019</h2>
                <p>
                  In the ever-evolving world of fashion, trends may come and go,
                  but some pieces remain timeless. These wardrobe essentials are
                  the foundation of ...
                </p>
                <h4>READ MORE</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
