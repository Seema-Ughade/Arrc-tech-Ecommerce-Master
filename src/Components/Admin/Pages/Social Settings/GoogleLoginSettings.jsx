import React, { useState } from "react";

function GoogleLoginSettings() {
  const [status, setStatus] = useState("Activated");

  const handleStatusChange = () => {
    setStatus(status === "Activated" ? "Deactivated" : "Activated");
  };

  const handleSave = () => {
    alert("Google login settings saved successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Google Login</h1>
      <div className="bg-white p-6 rounded shadow">
        <div className="flex items-center mb-6">
          <span className="text-lg font-medium mr-2">Google Login:</span>
          <div className="relative">
            <button
              onClick={handleStatusChange}
              className={`${
                status === "Activated"
                  ? "bg-green-600"
                  : "bg-red-600"
              } text-white px-4 py-1 rounded shadow`}
            >
              {status}
            </button>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="clientId"
              className="block text-gray-700 font-medium mb-2"
            >
              Client ID *
            </label>
            <input
              id="clientId"
              type="text"
              placeholder="Get Your Client ID from console.cloud.google.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="904681031719-sh1aolu42k7l93ik0bkiddcboghbpcfi.apps.googleusercontent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="clientSecret"
              className="block text-gray-700 font-medium mb-2"
            >
              Client Secret *
            </label>
            <input
              id="clientSecret"
              type="text"
              placeholder="Get Your Client Secret from console.cloud.google.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="yGBWmUpPtn5yWhDAsXnswEX3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="websiteUrl"
              className="block text-gray-700 font-medium mb-2"
            >
              Website URL *
            </label>
            <input
              id="websiteUrl"
              type="text"
              placeholder="Enter your website URL"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="https://demo.geniusocean.com/ecommerce-king1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="redirectUri"
              className="block text-gray-700 font-medium mb-2"
            >
              Redirect URI *
            </label>
            <input
              id="redirectUri"
              type="text"
              placeholder="Copy this URL and paste it to your Redirect URI"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="https://demo.geniusocean.com/ecommerce-king1/auth/google/callback"
            />
          </div>
          <div className="text-right">
            <button
              onClick={handleSave}
              type="button"
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GoogleLoginSettings;
