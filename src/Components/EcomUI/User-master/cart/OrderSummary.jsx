// import React from "react";
// import { useSelector } from "react-redux";
// import { ArrowLeft } from "lucide-react";

// export default function OrderSummary({ onBack, onContinue, loading }) {
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Helper functions for calculations
//   const calculateSubtotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const calculateTax = (subtotal) => subtotal * 0.1; // GST at 10%
//   const calculateShipping = () => (cartItems.length > 0 ? 5 : 0); // Flat $5 shipping fee

//   // Centralized calculations
//   const subtotal = calculateSubtotal();
//   const tax = calculateTax(subtotal);
//   const shippingCost = calculateShipping();
//   const packagingCost = 0; // Assuming packaging cost is always 0
//   const total = subtotal + tax + shippingCost + packagingCost;

//   return (
//     <div className="bg-gray-50 rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-6">Summary</h2>
//       <div className="space-y-4">
//         <h3 className="font-medium">Price Details</h3>
//         <div className="space-y-2">
//           {/* Total MRP */}
//           <div className="flex justify-between">
//             <span className="text-gray-600">Total MRP</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>

//           {/* GST */}
//           <div className="flex justify-between">
//             <span className="text-gray-600">GST (10%)</span>
//             <span>₹{tax.toFixed(2)}</span>
//           </div>

//           {/* Shipping Cost */}
//           <div className="flex justify-between">
//             <span className="text-gray-600">Shipping Cost</span>
//             <span>₹{shippingCost.toFixed(2)}</span>
//           </div>

//           {/* Packaging Cost */}
//           <div className="flex justify-between">
//             <span className="text-gray-600">Packaging Cost</span>
//             <span>₹{packagingCost.toFixed(2)}</span>
//           </div>
//         </div>

//         {/* Final Total */}
//         <div className="border-t pt-4">
//           <div className="flex justify-between font-medium">
//             <span>Final Price</span>
//             <span className="text-red-500">₹{total.toFixed(2)}</span>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button
//           onClick={onContinue}
//           disabled={loading}
//           className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
//         >
//           {loading ? (
//             "Processing..."
//           ) : (
//             <>
//               Continue
//               <ArrowLeft className="w-4 h-4 rotate-180" />
//             </>
//           )}
//         </button>

//         {/* Back Button */}
//         {onBack && (
//           <button
//             onClick={onBack}
//             className="w-full mt-2 border border-gray-200 bg-white py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back To Previous Step
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useSelector } from "react-redux";
import { ArrowLeft } from 'lucide-react';

export default function OrderSummary({ onBack, onContinue, loading, total }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Helper functions for calculations
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calculateTax = (subtotal) => subtotal * 0.1; // GST at 10%
  const calculateShipping = () => (cartItems.length > 0 ? 5 : 0); // Flat $5 shipping fee

  // Centralized calculations
  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shippingCost = calculateShipping();
  const packagingCost = 0; // Assuming packaging cost is always 0

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Summary</h2>
      <div className="space-y-4">
        <h3 className="font-medium">Price Details</h3>
        <div className="space-y-2">
          {/* Total MRP */}
          <div className="flex justify-between">
            <span className="text-gray-600">Total MRP</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          {/* GST */}
          <div className="flex justify-between">
            <span className="text-gray-600">GST (10%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          {/* Shipping Cost */}
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping Cost</span>
            <span>₹{shippingCost.toFixed(2)}</span>
          </div>

          {/* Packaging Cost */}
          <div className="flex justify-between">
            <span className="text-gray-600">Packaging Cost</span>
            <span>₹{packagingCost.toFixed(2)}</span>
          </div>
        </div>

        {/* Final Total */}
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Final Price</span>
            <span className="text-red-500">₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          disabled={loading}
          className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            "Processing..."
          ) : (
            <>
              Continue
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </>
          )}
        </button>

        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="w-full mt-2 border border-gray-200 bg-white py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back To Previous Step
          </button>
        )}
      </div>
    </div>
  );
}

