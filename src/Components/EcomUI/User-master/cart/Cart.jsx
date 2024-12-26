import { useState } from "react";
import { Trash2 } from "lucide-react";
import cart1 from "../Assets/cart1.jpg";
import cart2 from "../Assets/cart2.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../redux/cartSlice";

export default function ShoppingCart() {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Exquisite Emerald Pendant Necklace",
  //     price: 948.95,
  //     quantity: 1,
  //     image: cart1,
  //   },
  //   {
  //     id: 2,
  //     name: "Chic Off-Shoulder Ruffle Dress",
  //     price: 318.95,
  //     quantity: 1,
  //     image: cart2,
  //   },
  // ]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleCheckout = () => {
    navigate("/Checkout"); // Redirect to /Checkout
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-semibold">
              <div className="col-span-6">Product Name</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Subtotal</div>
            </div>

            {/* Cart Items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="md:hidden font-medium mb-1">Price:</div>₹
                      {item.price && item.price.toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="md:hidden font-medium mb-1">
                        Quantity:
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="md:hidden font-medium mb-1">
                        Subtotal:
                      </div>
                      ₹{(item.price && item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove Button */}
                    <div className="col-span-1 md:text-right">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span> ₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span>₹{discount.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-red-500">₹{total && total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
