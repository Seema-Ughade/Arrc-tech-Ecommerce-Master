import React from 'react';
import { Trash2 } from 'lucide-react';

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      </div>

      {cart.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {cart.map((product) => (
            <div key={product._id} className="p-6 flex items-center gap-4">
              <div className="flex-shrink-0 w-24 h-24 border rounded-lg overflow-hidden">
                <img
                  src={product.featureImage}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 truncate">
                  {product.productName}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Size: {product.size} • Color: {product.color}
                </p>
                <div className="mt-1 flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromCart(product._id)}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
                <span className="sr-only">Remove item</span>
              </button>
            </div>
          ))}

          <div className="p-6 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">Total</p>
              <p className="text-xl font-semibold text-gray-900">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 text-center text-gray-500">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default Cart;

