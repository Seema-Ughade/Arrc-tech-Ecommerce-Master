import React, { useState } from "react";
import buddh from "../../../../assets/Assets/buddh.png";
import phone from "../../../../assets/Assets/phn.png";
import jwellery from "../../../../assets/Assets/jw.png";
import smartphone from "../../../../assets/Assets/smrtp.png";
import camera from "../../../../assets/Assets/camera png.png";
import girl1 from "../../../../assets/Assets/g.png";
import girl2 from "../../../../assets/Assets/g2.png";
import girl3 from "../../../../assets/Assets/g3.png";
import headphone from "../../../../assets/Assets/headp.png";
import headphones from "../../../../assets/Assets/headphone.png";
import iphone from "../../../../assets/Assets/iphone.png";
import head from "../../../../assets/Assets/headphone l.png";

const ProductGrid = () => {
  const categories = [
    "Electronic",
    "Fashion & Beauty",
    "Camera & Photo",

    "Smart Phone & Table",
    "Sport & Outdoor",
    "Jewelry & Watches",
    "Health & Beauty",
    "Books & Office",
    "Toys & Hobbies",
    "Automobiles",
    "Home Decoration",
  ];

  const [products] = useState([
    {
      id: 1,
      name: "Buddha Statue",
      category: "Home Decoration",
      discount: null,
      image: buddh,
    },
    {
      id: 2,
      name: "Luxurious Rose Gold Bracelet",
      category: "Jewelry & Watches",
      discount: 24,
      image: phone,
    },
    {
      id: 3,
      name: "Flagship 5G Smartphone",
      category: "Smart Phone & Table",
      discount: 21,
      image: jwellery,
    },
    {
      id: 4,
      name: "5G Smartphone with 128GB Storage, 48MP Triple Came",
      category: "Smart Phone & Table",
      discount: 53,
      image: smartphone,
    },
    {
      id: 5,
      name: "54K Ultra HD Mirrorless Camera with Interchangeable...",
      category: "camera & photo",
      discount: 27,
      image: camera,
    },
    {
      id: 6,
      name: "Chic Off-Shoulder Ruffle Dress with Floral Print –...",
      category: "Fashion & Beauty",
      discount: 20,
      image: girl1,
    },
    {
      id: 7,
      name: "High-Waisted Skinny Jeans with Distressed Details ...",
      category: "Fashion & Beauty",
      discount: 33,
      image: girl3,
    },
    {
      id: 8,
      name: "Gaming Headset with Surround Sound, LED Lighting, ...",
      category: "Electronic",
      discount: 38,
      image: headphone,
    },
    {
      id: 9,
      name: "Chic Off-Shoulder Ruffle Dress with Floral Print –...",
      category: "Fashion & Beauty",
      discount: 20,
      image: girl1,
    },
    {
      id: 10,
      name: "Over-Ear DJ Headphones with Swivel Design and Enha...",
      category: "Electronic",
      discount: 36,
      image: headphones,
    },
    {
      id: 11,
      name: "Luxury Noise-Cancelling Headphones with Adaptive S...",
      category: "Electronic",
      discount: 29,
      image: iphone,
    },
    {
      id: 12,
      name: "Luxury Noise-Cancelling Headphones with Adaptive S...",
      category: "Electronic",
      image: head,
    },
  ]);

  const [sort, setSort] = useState("Latest Product");

  return (
    <div className="flex gap-6 p-6 font-sans">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-300 pr-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 cursor-pointer hover:text-red-500 mb-2"
              >
                {category} +
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Recent Post </h4>
          <div className="footer-img">
            <div className="image-1 relative">
              <img src={headphone} width={"64px"} height={"64px"} alt="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-bold">PRODUCT</h1>
                <h3 className=" mt-4 bg-white">Home // PRODUCT</h3>
              </div>
              <div>
                <p className="recentPostTitle font-semibold">
                  Gaming Headset with Surround Sound, LED Lighting, and
                  Noise-Cancelling Mic
                </p>
                <p className="recentPostTitle">200 350</p>
                <span>0.00</span>
              </div>
            </div>

            <div className="image-1">
              <img src={girl3} width={"100px"} height={"100px"} alt="" />
              <div>
                <p className="recentPostTitle font-semibold">
                  product img High-Waisted Skinny Jeans with Distressed Details
                  – Trendy and Comfortable
                </p>
                <p className="recentPostTitle">135 220</p>
                <span>0.00</span>
              </div>
            </div>

            <div className="image-1">
              <img src={girl2} width={"100px"} height={"100px"} alt="" />
              <div className="font-semibold">
                <p>
                  0.0 (0) product img Cozy Knit Sweater with Turtleneck and
                  Cable Knit Pattern – A Winter Essential
                </p>
                <p>250 380</p>
                <span>0.00</span>
              </div>
            </div>

            <div className="image-1">
              <img src={girl1} width={"50px"} height={"10px"} alt=""  />
              <div className="font-semibold">
                <p>product img
                Chic Off-Shoulder Ruffle Dress with Floral Print – Perfect for Summer Events</p>
                <p>299 399</p>
                <span>0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Total Products Found: {products.length}
          </div>
          <div>
            <label htmlFor="sort" className="mr-2 text-sm text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Latest Product">Latest Product</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative border border-gray-200 rounded-lg p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4 rounded-md"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              )}
              <h4 className="text-md font-semibold text-gray-800">
                {product.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
