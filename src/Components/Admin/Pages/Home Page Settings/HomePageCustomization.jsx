import React, { useState } from "react";

const HomePageCustomization = () => {
  const [sections, setSections] = useState({
    slider: true,
    featuredProducts: true,
    topRated: true,
    bestSelling: true,
    newsletter: true,
    arrivalSection: true,
    dealOfTheDay: true,
    partner: true,
    blogs: true,
  });

  const toggleSwitch = (section) => {
    setSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Home Page Customization</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-4">
            {[
              { label: "Slider", key: "slider" },
              { label: "Featured Products", key: "featuredProducts" },
              { label: "Top Rated, Big Save & Trending", key: "topRated" },
              { label: "Best Selling Product", key: "bestSelling" },
              { label: "Newsletter", key: "newsletter" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <span className="font-medium">{item.label} *</span>
                <button
                  onClick={() => toggleSwitch(item.key)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
                    sections[item.key] ? "bg-blue-700" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`transform transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full ${
                      sections[item.key] ? "translate-x-6" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {[
              { label: "Arrival Section", key: "arrivalSection" },
              { label: "Deal Of The Day", key: "dealOfTheDay" },
              { label: "Partner", key: "partner" },
              { label: "Blogs", key: "blogs" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <span className="font-medium">{item.label} *</span>
                <button
                  onClick={() => toggleSwitch(item.key)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
                    sections[item.key] ? "bg-blue-700" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`transform transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full ${
                      sections[item.key] ? "translate-x-6" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-teal-400 text-white font-medium rounded-md hover:bg-teal-400">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageCustomization;
