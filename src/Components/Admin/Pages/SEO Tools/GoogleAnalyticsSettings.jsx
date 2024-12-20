import React, { useState } from "react";

function GoogleAnalyticsSettings() {
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState("UA-137437974-1");
  const [facebookPixelId, setFacebookPixelId] = useState("UA-137437974-1");

  const handleSave = () => {
    console.log("Google Analytics ID:", googleAnalyticsId);
    console.log("Facebook Pixel ID:", facebookPixelId);
    alert("Settings Saved!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Google Analytics</h1>
      <div className="mb-4">
        <p className="text-gray-500">
          Dashboard &gt; SEO Tools &gt; Google Analytics
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label
            htmlFor="googleAnalyticsId"
            className="block text-gray-700 font-medium mb-2"
          >
            Google Analytics ID *
          </label>
          <input
            id="googleAnalyticsId"
            type="text"
            value={googleAnalyticsId}
            onChange={(e) => setGoogleAnalyticsId(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Google Analytics ID"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="facebookPixelId"
            className="block text-gray-700 font-medium mb-2"
          >
            Facebook Pixel ID *
          </label>
          <input
            id="facebookPixelId"
            type="text"
            value={facebookPixelId}
            onChange={(e) => setFacebookPixelId(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Facebook Pixel ID"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default GoogleAnalyticsSettings;
