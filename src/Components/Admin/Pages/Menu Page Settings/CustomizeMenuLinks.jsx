import React, { useState } from "react";

const CustomizeMenuLinks = () => {
  const [menuLinks, setMenuLinks] = useState({
    product: true,
    faq: true,
    blog: true,
    contactUs: true,
  });

  const handleToggle = (key) => {
    setMenuLinks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Menu Links:", menuLinks);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Customize Menu Links</h1>
        {/* <p className="text-sm text-gray-600 mb-6">
          Dashboard &gt; Menu Page Settings &gt; Customize Menu Links
        </p> */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8 mb-6">
            {/* Left Column */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Product *</label>
                <button
                  type="button"
                  onClick={() => handleToggle("product")}
                  className={`w-10 h-6 flex items-center rounded-full ${
                    menuLinks.product ? "bg-blue-700" : "bg-gray-400"
                  } relative`}
                >
                  <span
                    className={`w-4 h-4 bg-white rounded-full transform transition ${
                      menuLinks.product ? "translate-x-5" : ""
                    }`}
                  ></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Faq *</label>
                <button
                  type="button"
                  onClick={() => handleToggle("faq")}
                  className={`w-10 h-6 flex items-center rounded-full ${
                    menuLinks.faq ? "bg-blue-700" : "bg-gray-400"
                  } relative`}
                >
                  <span
                    className={`w-4 h-4 bg-white rounded-full transform transition ${
                      menuLinks.faq ? "translate-x-5" : ""
                    }`}
                  ></span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Blog *</label>
                <button
                  type="button"
                  onClick={() => handleToggle("blog")}
                  className={`w-10 h-6 flex items-center rounded-full ${
                    menuLinks.blog ? "bg-blue-700" : "bg-gray-400"
                  } relative`}
                >
                  <span
                    className={`w-4 h-4 bg-white rounded-full transform transition ${
                      menuLinks.blog ? "translate-x-5" : ""
                    }`}
                  ></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Contact Us *</label>
                <button
                  type="button"
                  onClick={() => handleToggle("contactUs")}
                  className={`w-10 h-6 flex items-center rounded-full ${
                    menuLinks.contactUs ? "bg-blue-700" : "bg-gray-400"
                  } relative`}
                >
                  <span
                    className={`w-4 h-4 bg-white rounded-full transform transition ${
                      menuLinks.contactUs ? "translate-x-5" : ""
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomizeMenuLinks;
