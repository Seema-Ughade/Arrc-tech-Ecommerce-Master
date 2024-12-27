// import React from 'react';

// function OrderDetails({ cartItems }) {
//   const calculateSubtotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const calculateTax = (subtotal) => subtotal * 0.1; // Assuming a 10% tax rate
//   const calculateShipping = () => (cartItems.length > 0 ? 5 : 0); // Flat $5 shipping fee for simplicity

//   const subtotal = calculateSubtotal();
//   const tax = calculateTax(subtotal);
//   const shipping = calculateShipping();
//   const total = subtotal + tax + shipping;

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Order Details</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id} className="flex justify-between">
//             <span>{item.name} (x{item.quantity})</span>
//             <span>${(item.price * item.quantity).toFixed(2)}</span>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <div className="flex justify-between">
//         <span>Subtotal:</span>
//         <span>${subtotal.toFixed(2)}</span>
//       </div>
//       <div className="flex justify-between">
//         <span>Tax:</span>
//         <span>${tax.toFixed(2)}</span>
//       </div>
//       <div className="flex justify-between">
//         <span>Shipping:</span>
//         <span>${shipping.toFixed(2)}</span>
//       </div>
//       <hr />
//       <div className="flex justify-between font-bold">
//         <span>Total:</span>
//         <span>${total.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;


// import React from "react";
// import { Trash2 } from "lucide-react";

// export default function OrderDetails({ cartItems, onRemove, updateQuantity }) {
//   // Helper functions to calculate order summary details
//   const calculateSubtotal = () =>
//     cartItems.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

//   const calculateTax = (subtotal) => subtotal * 0.1; // Assuming a 10% tax rate
//   const calculateShipping = () => (cartItems.length > 0 ? 5 : 0); // Flat $5 shipping fee for simplicity

//   const subtotal = calculateSubtotal();
//   const tax = calculateTax(subtotal);
//   const shipping = calculateShipping();
//   const total = subtotal + tax + shipping;

//   return (
//     <div className="space-y-6">
//       {/* Order Details Header */}
//       <h2 className="text-xl font-semibold">Order Details</h2>
      
//       {/* Cart Items */}
//       <div className="bg-white rounded-lg shadow">
//         {/* Table Header (Visible only on larger screens) */}
//         <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-semibold">
//           <div className="col-span-5">Product Name</div>
//           <div className="col-span-2">Price</div>
//           <div className="col-span-2">Quantity</div>
//           <div className="col-span-2">Subtotal</div>
//           <div className="col-span-1">Action</div>
//         </div>

//         {/* Cart Items List */}
//         <div className="divide-y">
//           {cartItems.map((item) => (
//             <div key={item._id} className="p-4">
//               <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
//                 {/* Product Info */}
//                 <div className="col-span-1 md:col-span-5">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={item.featureImage || "/placeholder.svg?height=80&width=80"}
//                       alt={item.productName}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <h3 className="font-medium">{item.productName}</h3>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Price */}
//                 <div className="col-span-1 md:col-span-2">
//                   <div className="md:hidden font-medium mb-1">Price:</div>
//                   ₹{item.price ? item.price.toFixed(2) : "N/A"}
//                 </div>

//                 {/* Quantity */}
//                 <div className="col-span-1 md:col-span-2">
//                   <div className="md:hidden font-medium mb-1">Quantity:</div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                       className="w-8 h-8 flex items-center justify-center border rounded"
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </button>
//                     <span className="w-8 text-center">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                       className="w-8 h-8 flex items-center justify-center border rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 {/* Subtotal */}
//                 <div className="col-span-1 md:col-span-2">
//                   <div className="md:hidden font-medium mb-1">Subtotal:</div>
//                   ₹{item.price ? (item.price * item.quantity).toFixed(2) : "N/A"}
//                 </div>

//                 {/* Remove Button */}
//                 <div className="col-span-1 md:col-span-1 flex justify-end md:justify-center">
//                   <button
//                     onClick={() => onRemove(item._id)}
//                     className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors"
//                     aria-label="Remove item"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Order Summary Section */}
//       <div className="bg-white rounded-lg shadow p-6 mt-4">
//         <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//         <div className="space-y-4">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Tax (10%)</span>
//             <span>₹{tax.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>₹{shipping.toFixed(2)}</span>
//           </div>
//           <div className="border-t pt-4">
//             <div className="flex justify-between font-bold">
//               <span>Total</span>
//               <span className="text-red-500">₹{total.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Trash2 } from "lucide-react";

export default function OrderDetails({ cartItems, onRemove, updateQuantity }) {
  // Helper functions to calculate order summary details
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  const calculateTax = (subtotal) => subtotal * 0.1; // Assuming a 10% GST
  const calculateShipping = () => (cartItems.length > 0 ? 5 : 0); // Flat $5 shipping fee

  // Centralized calculation
  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping();
  const total = subtotal + tax + shipping;

  return (
    <div className="space-y-6">
      {/* Order Details Header */}
      <h2 className="text-xl font-semibold">Order Details</h2>

      {/* Cart Items Section */}
      <div className="bg-white rounded-lg shadow">
        {/* Table Header (Visible on larger screens) */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-semibold">
          <div className="col-span-5">Product Name</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Quantity</div>
          <div className="col-span-2">Subtotal</div>
          <div className="col-span-1">Action</div>
        </div>

        {/* Cart Items List */}
        <div className="divide-y">
          {cartItems.map((item) => (
            <div key={item._id} className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Product Info */}
                <div className="col-span-1 md:col-span-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.featureImage || "/placeholder.svg?height=80&width=80"}
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.productName}</h3>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-1 md:col-span-2">
                  <div className="md:hidden font-medium mb-1">Price:</div>
                  ₹{item.price ? item.price.toFixed(2) : "N/A"}
                </div>

                {/* Quantity */}
                <div className="col-span-1 md:col-span-2">
                  <div className="md:hidden font-medium mb-1">Quantity:</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="col-span-1 md:col-span-2">
                  <div className="md:hidden font-medium mb-1">Subtotal:</div>
                  ₹{item.price ? (item.price * item.quantity).toFixed(2) : "N/A"}
                </div>

                {/* Remove Button */}
                <div className="col-span-1 md:col-span-1 flex justify-end md:justify-center">
                  <button
                    onClick={() => onRemove(item._id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {/* Subtotal */}
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          {/* Tax */}
          <div className="flex justify-between">
            <span>GST (10%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping.toFixed(2)}</span>
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-red-500">₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
