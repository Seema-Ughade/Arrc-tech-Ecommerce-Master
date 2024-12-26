import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=200",
    name: "Gaming Headset With Surround Sound, LED Lighting, And Noise-Cancelling Mic",
    price: "₹25",
    rating: "2.5 (5 Rev)",
    description: "Product Description:Get a crystal-clear gaming experience with this high-performance gaming headset featuring surround sound, LED lighting, and noise-cancelling mic. Designed for lasting comfort, this headset offers an adjustable headband, soft ear cushions, and premium audio quality that puts you in the heart of the action..."
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=200",
    name: "Classic Science Fiction Novel With Dystopian Themes – A Must-Read For Genre Fans",
    price: "₹15",
    rating: "2.5 (5 Rev)",
    description: "Dive into a world of intrigue, rebellion and dystopian themes with this compelling Science Fiction novel. Our dystopian themes will keep you engaged from start to finish. Perfect for fans of the genre, this book combines rich storytelling with thought-provoking ideas..."
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=200",
    name: "Classic Leather Ankle Boots With Block Heel And Zip Fastening – Perfect For Any Occasion",
    price: "₹25",
    rating: "2.5 (5 Rev)",
    description: "Add style and flair with our Classic Leather Ankle Boots. These versatile boots are designed with a perfect blend of style and comfort, featuring premium leather construction and a comfortable block heel..."
  }
]

export default function ProductComparison() {
  const compareItems = useSelector((state) => state.cart.compareItems);
  console.log(compareItems);
  const dispatch = useDispatch();

  const [addedProducts, setAddedProducts] = useState([])

  const toggleProduct = (productId) => {
    setAddedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {compareItems.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 space-y-4">
            {/* Product Image */}
            <div className="product-image">
              <div className="text-sm text-gray-500 mb-2">product image</div>
              <img
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Product Name */}
            <div className="product-name">
              <div className="text-sm text-gray-500 mb-2">product name</div>
              <h2 className="text-sm font-medium">{product.name}</h2>
            </div>

            {/* Product Price */}
            <div className="product-price">
              <div className="text-sm text-gray-500 mb-2">product price</div>
              <span className="text-sm">{product.price}</span>
            </div>

            {/* Rating */}
            <div className="rating">
              <div className="text-sm text-gray-500 mb-2">Rating</div>
              <span className="text-sm">{product.rating}</span>
            </div>

            {/* Description */}
            <div className="description">
              <div className="text-sm text-gray-500 mb-2">Description</div>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>

            {/* Action */}
            <div className="action space-y-2">
              <div className="text-sm text-gray-500 mb-2">Action</div>
              <button
                onClick={() => toggleProduct(product.id)}
                className="w-full bg-black text-white py-2 px-4 rounded text-sm"
              >
                Add To Cart
              </button>
              <button
                onClick={() => toggleProduct(product.id)}
                className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

