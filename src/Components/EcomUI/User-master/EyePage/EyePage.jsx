// import { useState } from "react";
// import { Link } from "react-router-dom";

// import cart1 from "../Assets/cart1.jpg";
// import cart2 from "../Assets/cart2.jpg";
// import cart3 from "../Assets/cart3.jpg";
// import cart4 from "../Assets/cart4.jpg";
// import cart5 from "../Assets/cart5.jpg";
// import cart6 from "../Assets/cart6.jpg";

// import Eyeproducts from "../EyePage/Eyeproducts";
// import Sellerproducsts from "../EyePage/Sellerproducsts";

// export default function ProductDetail() {
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [warrantyType, setWarrantyType] = useState("no-warranty");

//   const images = [cart1, cart3, cart4, cart5, cart6];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Breadcrumb */}
//       <nav className="flex mb-8 text-sm">
//         <Link href="/" className="hover:text-gray-600">
//           Home
//         </Link>
//         <span className="mx-2">/</span>
//         <Link href="/fashion-beauty" className="hover:text-gray-600">
//           Fashion & Beauty
//         </Link>
//         <span className="mx-2">/</span>
//         <span>CLOTHINGS</span>
//       </nav>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div className="space-y-4">
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <img
//               src={cart2}
//               alt="Product"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="grid grid-cols-5 gap-2">
//             {images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`aspect-square relative overflow-hidden rounded-md ${
//                   selectedImage === index ? "ring-2 ring-black" : ""
//                 }`}
//               >
//                 <img
//                   src={image}
//                   alt={`Product thumbnail ${index + 1}`}
//                   className="object-cover w-full h-full"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold">
//               Cozy Knit Sweater with Turtleneck and Cable Knit Pattern – A
//               Winter Essential
//             </h1>
//             <div className="flex items-center gap-4 mt-4">
//               <span className="text-2xl font-bold">₹2967.50</span>
//               <span className="text-lg text-gray-500 line-through">₹8404</span>
//               <span className="px-2 py-1 text-sm text-white bg-black rounded">
//                 -34%
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <svg
//                 key={star}
//                 className="w-5 h-5 text-gray-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//                 />
//               </svg>
//             ))}
//             <span className="text-sm text-gray-500">(0 Reviews)</span>
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span>Availability:</span>
//               <span className="font-medium">848 In Stock</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Product SKU:</span>
//               <span className="font-medium">Masud158751</span>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className="font-medium">warranty type:</h3>
//             <div className="space-y-2">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="warranty"
//                   value="no-warranty"
//                   checked={warrantyType === "no-warranty"}
//                   onChange={(e) => setWarrantyType(e.target.value)}
//                   className="w-4 h-4"
//                 />
//                 <span>No Warranty</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="warranty"
//                   value="local-warranty"
//                   checked={warrantyType === "local-warranty"}
//                   onChange={(e) => setWarrantyType(e.target.value)}
//                   className="w-4 h-4"
//                 />
//                 <span>Non local warranty</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="warranty"
//                   value="international-warranty"
//                   checked={warrantyType === "international-warranty"}
//                   onChange={(e) => setWarrantyType(e.target.value)}
//                   className="w-4 h-4"
//                 />
//                 <span>International Manufacturer Warranty</span>
//               </label>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h3 className="font-medium">Quantity:</h3>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
//               >
//                 -
//               </button>
//               <span className="w-12 text-center">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-black/90">
//               Add To Cart
//             </button>
//             <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//               Buy Now
//             </button>
//           </div>

//           <div className="flex items-center gap-4 pt-4 border-t">
//             <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//               Add to Wishlist
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                 />
//               </svg>
//               Share
//             </button>
//           </div>

//           <div className="p-4 bg-gray-50 rounded-lg space-y-4">
//             <div className="flex items-center gap-2">
//               <span>Sold By: Test Stores</span>
//               <span className="px-2 py-1 text-sm bg-gray-200 rounded">
//                 Verified
//               </span>
//             </div>
//             <div>Total Items: 20</div>
//             <div className="flex gap-4">
//               <button className="px-4 py-2 border rounded hover:bg-gray-50">
//                 Visit Store
//               </button>
//               <button className="px-4 py-2 border rounded hover:bg-gray-50">
//                 Contact Seller
//               </button>
//               <button className="px-4 py-2 border rounded hover:bg-gray-50">
//                 Add To Favorite Seller
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="font-family:Roboto,san-serif">
//         <p>
//           Embrace the cold weather in style with our <strong>Cozy Knit Sweater with
//           Turtleneck and Cable Knit Pattern – A Winter Essential. </strong>This sweater
//           is crafted to provide not just warmth but also a touch of timeless
//           elegance to your winter wardrobe. As the temperatures drop, this
//           sweater becomes your reliable companion, offering a blend of classic
//           design, superior comfort, and the kind of cozy warmth that makes you
//           look forward to those chilly days. The turtleneck is the star of this
//           piece, providing a snug, warm embrace that protects your neck from the
//           biting winter wind. It’s a fold-over turtleneck, meaning it’s high
//           enough to keep you covered but can be adjusted for comfort, making it
//           as stylish as it is functional. The cable knit pattern, meticulously
//           woven into the fabric, adds a layer of texture and visual appeal that
//           elevates the sweater from simple to sophisticated. This traditional
//           pattern is not only aesthetically pleasing but also functional, adding
//           thickness and extra warmth to the garment without making it feel
//           bulky. Made from a luxurious knit blend, this sweater is soft to the
//           touch and gentle on your skin, ensuring you stay comfortable no matter
//           how long you wear it. The fabric’s breathability ensures you won’t
//           overheat, even in a cozy indoor setting, while still offering
//           excellent insulation against the cold when you step outside. The
//           relaxed, slightly oversized fit is designed for ease of movement,
//           making this sweater perfect for layering over your favorite tops or
//           under a winter coat. Ribbed cuffs and hem ensure a snug fit, helping
//           to trap heat and keep the cold out, while also adding a refined finish
//           to the sweater’s overall look.
//         </p>
//         <strong> Key Features:</strong>
//         <br></br>
//         <br></br>
//         <strong>Cozy Fold-Over Turtleneck:</strong> Provides a comfortable and
//         warm fit around the neck, shielding you from cold winds. Adjustable
//         design allows you to wear it high for maximum warmth or folded down for
//         a relaxed look. Enhances the sweater's sophisticated style, making it
//         suitable for both casual and dressier occasions.
//         <br></br>
//         <br></br>
//         <strong> Intricate Cable Knit Pattern:</strong>
//         Classic cable knit design adds texture and depth, giving the sweater a
//         timeless, elegant look. The pattern also contributes to the sweater’s
//         warmth, trapping heat while maintaining a lightweight feel. A versatile
//         design that pairs well with a variety of outfits, from jeans to skirts.
//         <br></br>
//         <br></br>
//         <strong> Premium Soft Knit Fabric:</strong> Crafted from a high-quality
//         blend that feels luxurious against the skin. Offers the perfect balance
//         between warmth and breathability, ensuring comfort in various settings.
//         Durable material that resists pilling and stretching, retaining its
//         shape and softness over time.
//         <br></br>
//         <br></br>
//         <strong>Relaxed and Comfortable Fit:</strong> Designed with a slightly
//         oversized silhouette for a cozy, laid-back feel. Allows for easy
//         layering with other winter essentials, such as thermal tops or
//         undershirts. Ribbed cuffs and hem help keep the sweater in place while
//         adding a polished finish to the look.
//         <br></br>
//         <br></br>
//         <strong> Versatile Styling Options: </strong>Ideal for pairing with
//         everything from jeans and leggings to tailored trousers and skirts.
//         Available in a range of seasonal and neutral colors, making it easy to
//         match with your existing wardrobe. Suitable for both casual daytime
//         outings and more formal evening gatherings, offering endless styling
//         possibilities.
//         <br></br> 
//         <br></br>
//        <strong> Effortless Care and Maintenance: </strong>Machine washable for
//         easy upkeep, allowing you to wear and wash with confidence. Designed to
//         retain its vibrant color and shape even after multiple washes, ensuring
//         long-lasting wear. Lay flat to dry to maintain the integrity of the knit
//         and prevent stretching or shrinking.
//         <br></br>
//         <br></br>
//         <br></br>
//        <strong className="gap-5">  Why You'll Love It:</strong> 
//        <br></br><strong>1.Timeless Design:</strong> The cable knit pattern and turtleneck design are classic
//         elements that never go out of style, ensuring this sweater remains a
//         staple in your wardrobe for years to come.
//         <br></br>
//        <strong>2.Unmatched Comfort:</strong> The soft,
//         breathable fabric and relaxed fit make this sweater ideal for all-day
//         wear, whether you’re staying indoors or braving the cold outside. 
//        <strong> 3.Winter Versatility:</strong> Perfect for layering, this sweater is a versatile piece
//         that can be dressed up or down depending on the occasion. Pair it with
//         your favorite jeans and boots for a casual look, or wear it with a skirt
//         and tights for a more polished outfit.
//         <br></br>
//         <br></br>
//         <strong className="gap-5 mb-5"> Usage Tips: </strong>
//         <br></br>
//         <br></br>
//        <strong> Layer for Warmth:</strong> On particularly cold days, wear this sweater over a thermal shirt or under
//         a wool coat for extra warmth without sacrificing style.
//         <br></br> 
//       <br></br>
//     <strong> Accessorize Smartly:</strong>Complete your winter ensemble with a stylish scarf, gloves, and
//         a beanie that complements the sweater’s color and texture.
//         <br></br>
//          <strpong>Care Instructions: </strpong>To keep your sweater looking its best, wash it in cold
//         water on a gentle cycle and lay flat to dry. Avoid hanging it up, as
//         this can stretch the fabric over time.
//         <br></br>
//         <br></br>
//          The <strong>Cozy Knit Sweater with
//          Turtleneck and Cable Knit Pattern – A Winter Essential </strong>is more than just
//         a piece of clothing—it’s an embodiment of warmth, comfort, and timeless
//         style. Perfect for the coldest days of the year, this sweater wraps you
//         in coziness while ensuring you look effortlessly chic. Whether you’re
//         heading out for a winter walk, enjoying a day at the office, or lounging
//         at home, this sweater is the perfect addition to your winter wardrobe.
//       </div>

//       <div className="flex flex-col">
//         <Eyeproducts />
//         <Sellerproducsts />
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { addToCart, addToCompare, addToWishlist } from '../../../../redux/cartSlice';
import { useNavigate } from "react-router-dom";

const Eyepage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [warrantyType, setWarrantyType] = useState('no-warranty');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://ecommerce-panel-backend.onrender.com/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountPercentage = Math.round(((product.price - product.discountPrice) / product.price) * 100);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    message.success(`${product.productName} added to cart!`);
  };

  const handleAddToCompare = () => {
    dispatch(addToCompare(product));
    message.success(`${product.productName} added to compare!`);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    message.success(`${product.productName} added to wishlist!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 relative">
            <img
              src={product.featureImage}
              alt={product.productName}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {product.galleryImages && product.galleryImages.length > 0 && (
            <div className="grid grid-cols-5 gap-2">
              {[product.featureImage, ...product.galleryImages].map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.productName}</h1>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">₹{product.discountPrice}</span>
            <span className="text-lg text-gray-500 line-through">₹{product.price}</span>
            <span className="px-2 py-1 text-sm text-white bg-black rounded">-{discountPercentage}%</span>
          </div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500">(0 Reviews)</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Availability:</span>
              <span>{product.stockQuantity} In Stock</span>
            </div>
            <div className="flex justify-between">
              <span>Product SKU:</span>
              <span>{product.sku}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">warranty type:</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="warranty"
                  value="no-warranty"
                  checked={warrantyType === 'no-warranty'}
                  onChange={(e) => setWarrantyType(e.target.value)}
                />
                <span>No Warranty</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="warranty"
                  value="local-warranty"
                  checked={warrantyType === 'local-warranty'}
                  onChange={(e) => setWarrantyType(e.target.value)}
                />
                <span>Non local warranty</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="warranty"
                  value="international-warranty"
                  checked={warrantyType === 'international-warranty'}
                  onChange={(e) => setWarrantyType(e.target.value)}
                />
                <span>International Manufacturer Warranty</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Quantity:</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center border rounded"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border rounded"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center border rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleAddToCart} className="flex-1 bg-black text-white py-3 rounded-md hover:bg-black/90">
              Add To Cart
            </button>
            <button
                          onClick={() => navigate("/cart")}

             className="flex-1 bg-red-500 text-white py-3 rounded-md hover:bg-red-600">
              Buy Now
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleAddToWishlist} className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
              <span>Add to Wishlist</span>
            </button>
            <button onClick={handleAddToCompare} className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
              <span>Add to Compare</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50">
              <span>Report This Item</span>
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-4">
              <span>Share:</span>
              <div className="flex gap-2">
                {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((platform) => (
                  <button
                    key={platform}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <span className="sr-only">{platform}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>Sold By: Test Stores</span>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Verified</span>
              </div>
              <div>Total Items: 20</div>
              <div className="flex gap-4">
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  Visit Store
                </button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  Contact Seller
                </button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  Add To Favorite Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex gap-4 border-b">
          {['Description', 'Buy / Return Policy', 'Reviews', 'Whole sell'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(/ /g, '-'))}
              className={`px-4 py-2 ${
                activeTab === tab.toLowerCase().replace(/ /g, '-')
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              {product.description}
            </div>
          )}
          {activeTab === 'buy-/-return-policy' && (
            <div className="prose max-w-none">
              {product.buyReturnPolicy}
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>No reviews yet</div>
          )}
          {activeTab === 'whole-sell' && (
            <div>Wholesale information</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eyepage;

