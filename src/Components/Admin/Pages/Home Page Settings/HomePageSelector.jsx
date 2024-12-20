import React, { useState } from "react";

const HomePageSelector = () => {
  const [activePage, setActivePage] = useState(1);

  const pages = [
    {
      id: 1,
      name: "Home Page 1",
      img: "https://demo.geniusocean.com/ecommerce-king1/assets/admin/theme1.png", // Replace with your actual image URL
    },
    {
      id: 2,
      name: "Home Page 2",
      img: "https://demo.geniusocean.com/ecommerce-king1/assets/admin/theme1.png", // Replace with your actual image URL
    },
    {
      id: 3,
      name: "Home Page 3",
      img: "https://demo.geniusocean.com/ecommerce-king1/assets/admin/theme1.png", // Replace with your actual image URL
    },
  ];

  const handleActivate = (id) => {
    setActivePage(id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Home Page</h1>
        <div className="flex justify-between items-start space-x-4">
          {pages.map((page) => (
            <div
              key={page.id}
              className="flex flex-col items-center bg-white border rounded-md shadow-md p-4 w-1/3"
            >
              <img
                src={page.img}
                alt={page.name}
                className="w-full h-48 object-cover mb-4 border"
              />
              <h2 className="text-lg font-medium text-center mb-4">
                {page.name}
              </h2>
              <button
                onClick={() => handleActivate(page.id)}
                className={`w-full py-2 text-white font-medium rounded-md ${
                  activePage === page.id
                    ? "bg-blue-700 hover:bg-blue-800"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
              >
                {activePage === page.id ? "Active" : `Theme ${page.id}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageSelector;
