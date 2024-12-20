import React, { useState } from "react";

function PopularProducts() {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("Last 30 Days");

  const data = [
    { name: "Chic Off-Shoulder Ruffle Dress with Floral Print", category: "Fashion & Beauty", type: "Physical", clicks: 36 },
    { name: "Mid-Range Mobile with 48MP AI Camera, 6GB RAM, and 4000mAh", category: "Smart Phone & Table", type: "Physical", clicks: 12 },
    { name: "Hydrating Facial Serum with Vitamin C and Hyaluronic Acid", category: "Health & Beauty", type: "Physical", clicks: 14 },
    { name: "Luxury Smartwatch with Stainless Steel Case, Sapphire Crystal", category: "Electronic", type: "Physical", clicks: 16 },
    { name: "Luxurious Rose Gold Bracelet with Customizable Charms", category: "Jewelry & Watches", type: "Physical", clicks: 6 },
    { name: "Flagship 5G Smartphone with 256GB ROM, 12GB RAM, and 108MP", category: "Smart Phone & Table", type: "Physical", clicks: 19 },
    { name: "5G Smartphone with 128GB Storage, 48MP Triple Camera", category: "Smart Phone & Table", type: "Physical", clicks: 13 },
    { name: "Educational Learning Toy with Lights, Sounds, and Interactive", category: "Toys & Hobbies", type: "Physical", clicks: 11 },
    { name: "Professional USB Condenser Microphone with Noise Reduction", category: "Electronic", type: "Physical", clicks: 8 },
    { name: "Elegant Evening Clutch with Metallic Finish and Detachable Chain", category: "Portable & Personal", type: "Physical", clicks: 13 },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Popular Products</h1>
      <div className="mb-4">
        <p className="text-gray-500">
          Dashboard &gt; SEO Tools &gt; Popular Products
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <label htmlFor="entries" className="mr-2 text-gray-700">
              Show
            </label>
            <select
              id="entries"
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="ml-2 text-gray-700">entries</span>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="ml-4 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
        </div>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, entriesPerPage).map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.clicks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <p>Showing 1 to {entriesPerPage} of 41 entries</p>
          <div className="flex items-center">
            <button className="px-3 py-1 bg-gray-200 rounded mx-1">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded mx-1">
              1
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded mx-1">2</button>
            <button className="px-3 py-1 bg-gray-200 rounded mx-1">3</button>
            <button className="px-3 py-1 bg-gray-200 rounded mx-1">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
