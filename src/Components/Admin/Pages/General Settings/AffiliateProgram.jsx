import React, { useState } from "react";

const AffiliateProgram = () => {
  const [status, setStatus] = useState("Activated");
  const [affiliateBonus, setAffiliateBonus] = useState(10);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFeaturedImage(URL.createObjectURL(file));
  };

  const handleSave = () => {
    console.log("Affiliate Program Saved");
    console.log("Status:", status);
    console.log("Affiliate Bonus:", affiliateBonus);
    console.log("Featured Image:", featuredImage);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800">
          Affiliate Program
        </h1>
        <div className="text-sm text-gray-500 mt-2">
          Dashboard &gt; General Settings &gt; Affiliate Program
        </div>
        <div className="mt-6 space-y-6">
          {/* Web Based Affiliate */}
          <div className="flex items-center">
            <label
              htmlFor="status"
              className="w-1/3 text-gray-700 font-medium"
            >
              Web Based Affiliate
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-2/3 p-2 border rounded bg-green-50 text-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>

          {/* Affiliate Bonus */}
          <div className="flex items-center">
            <label
              htmlFor="affiliateBonus"
              className="w-1/3 text-gray-700 font-medium"
            >
              Affiliate Bonus(%)
            </label>
            <input
              type="number"
              id="affiliateBonus"
              value={affiliateBonus}
              onChange={(e) => setAffiliateBonus(e.target.value)}
              className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="text-gray-700 font-medium">
              Current Featured Image *
            </label>
            <div className="mt-3">
              {featuredImage ? (
                <div className="relative">
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="rounded-md shadow-md w-full h-48 object-cover"
                  />
                  <label className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black text-white text-sm font-medium rounded-md cursor-pointer hover:bg-opacity-70">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    Upload Image
                  </label>
                </div>
              ) : (
                <label className="flex items-center justify-center w-full h-48 border-2 border-dashed rounded-md cursor-pointer text-blue-500 hover:border-blue-500 hover:text-blue-700">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  Upload Image
                </label>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              onClick={handleSave}
              className="bg-blue-800 text-white py-2 px-6 rounded hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram;
