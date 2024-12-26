import React, { useState } from "react";

export default function CheckoutForm() {
  const [createAccount, setCreateAccount] = useState(false);
  const [differentAddress, setDifferentAddress] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-12 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              1
            </div>
            <span className="ml-2 text-red-500">Address</span>
          </div>
          <div className="h-[2px] w-16 bg-gray-200" />
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              2
            </div>
            <span className="ml-2 text-gray-500">Details</span>
          </div>
          <div className="h-[2px] w-16 bg-gray-200" />
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              3
            </div>
            <span className="ml-2 text-gray-500">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Personal Information
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <input
                id="create-account"
                type="checkbox"
                checked={createAccount}
                onChange={(e) => setCreateAccount(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="create-account" className="text-sm text-gray-700">
                Create an account ?
              </label>
            </div>
          </div>

          {/* Billing Details */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Billing Details</h2>
            <div className="grid gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="shipping"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shipping
                </label>
                <select
                  id="shipping"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-red-500"
                >
                  <option value="">Ship To Address</option>
                  <option value="home">Home Address</option>
                  <option value="office">Office Address</option>
                </select>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="billing-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="billing-email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal Code
                  </label>
                  <input
                    id="postal-code"
                    type="text"
                    placeholder="Postal Code"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Country
                </label>
                <select
                  id="country"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-red-500"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  id="different-address"
                  type="checkbox"
                  checked={differentAddress}
                  onChange={(e) => setDifferentAddress(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label
                  htmlFor="different-address"
                  className="text-sm text-gray-700"
                >
                  Ship to a Different Address?
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Summary</h2>
            <div className="space-y-4">
              <h3 className="font-medium">Price Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total MRP</span>
                  <span>₹3499</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Cost</span>
                  <span>₹0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Packaging Cost</span>
                  <span>₹0</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Final Price</span>
                  <span className="text-red-500">₹3949.00</span>
                </div>
              </div>
              <button className="w-full rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Continue
              </button>
              <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                ← Back To Previous Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
