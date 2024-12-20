import React, { useState } from "react";

function PaymentInformation() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Informations</h2>
        <nav className="flex border-b mb-6">
          <button
            className={`py-2 px-4 ${
              activeTab === "basic"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Informations
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "vendor"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("vendor")}
          >
            Vendor Informations
          </button>
        </nav>

        {activeTab === "basic" && (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Guest Checkout
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Activated</option>
                <option>Deactivated</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Currency Format
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>After Price</option>
                <option>Before Price</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Decimal Separator
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Dot(.)</option>
                <option>Comma(,)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Thousand Separator
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Comma(,)</option>
                <option>Dot(.)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Withdraw Fee
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                placeholder="10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Withdraw Charge(%)
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                placeholder="5"
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </form>
        )}

        {activeTab === "vendor" && (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Fixed Commission *
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                placeholder="5"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Percentage Commission(%)
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                placeholder="5"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Multiple Shipping
              </label>
              <input type="checkbox" className="mr-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Shipping Information For Vendor
              </label>
              <input type="checkbox" className="mr-2" />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default PaymentInformation;
