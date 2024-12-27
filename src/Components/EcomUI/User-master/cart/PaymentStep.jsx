import React, { useState } from 'react';
import { CreditCard, Wallet } from 'lucide-react';

export default function PaymentStep({ formData, setFormData }) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Payment Method</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('card')}
          className={`p-4 border rounded-lg flex items-center gap-3 ${
            paymentMethod === 'card'
              ? 'border-red-500 bg-red-50'
              : 'border-gray-200'
          }`}
        >
          <CreditCard className={paymentMethod === 'card' ? 'text-red-500' : 'text-gray-500'} />
          <span className={paymentMethod === 'card' ? 'text-red-500' : 'text-gray-700'}>
            Credit/Debit Card
          </span>
        </button>

        <button
          type="button"
          onClick={() => handlePaymentMethodChange('wallet')}
          className={`p-4 border rounded-lg flex items-center gap-3 ${
            paymentMethod === 'wallet'
              ? 'border-red-500 bg-red-50'
              : 'border-gray-200'
          }`}
        >
          <Wallet className={paymentMethod === 'wallet' ? 'text-red-500' : 'text-gray-500'} />
          <span className={paymentMethod === 'wallet' ? 'text-red-500' : 'text-gray-700'}>
            Digital Wallet
          </span>
        </button>
      </div>

      {paymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'wallet' && (
        <div className="space-y-4">
          <p className="text-gray-600">
            You will be redirected to your digital wallet provider to complete the payment.
          </p>
        </div>
      )}
    </div>
  );
}

