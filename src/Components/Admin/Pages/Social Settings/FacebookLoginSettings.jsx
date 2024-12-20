import React, { useState } from "react";

function FacebookLoginSettings() {
  const [status, setStatus] = useState("Activated");

  const handleStatusChange = () => {
    setStatus(status === "Activated" ? "Deactivated" : "Activated");
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Facebook Login</h1>
      <div className="bg-white p-6 rounded shadow">
        <div className="flex items-center mb-6">
          <span className="text-lg font-medium mr-2">Facebook Login:</span>
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
              htmlFor="appId"
              className="block text-gray-700 font-medium mb-2"
            >
              App ID *
            </label>
            <input
              id="appId"
              type="text"
              placeholder="Get Your App ID from developers.facebook.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="503140663460329"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="appSecret"
              className="block text-gray-700 font-medium mb-2"
            >
              App Secret *
            </label>
            <input
              id="appSecret"
              type="text"
              placeholder="Get Your App Secret from developers.facebook.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="f66cd670ec43d14209a2728af26dcc43"
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
              Valid OAuth Redirect URI *
            </label>
            <input
              id="redirectUri"
              type="text"
              placeholder="Copy this URL and paste it to your Valid OAuth Redirect URI"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              defaultValue="https://demo.geniusocean.com/ecommerce-king1/auth/facebook/callba"
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

export default FacebookLoginSettings;
