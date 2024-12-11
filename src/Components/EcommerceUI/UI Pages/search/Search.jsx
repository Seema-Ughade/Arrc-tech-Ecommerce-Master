import React, { useState } from "react";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex justify-center items-center w-full p-6">
      <div className="flex items-center border border-gray-300 rounded-lg shadow-md w-4/5 bg-white relative">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Any Product Here"
          className="flex-grow h-16 px-6 text-lg text-gray-700 focus:outline-none rounded-l-lg"
        />

        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="border-l border-gray-300 text-lg text-gray-700 bg-white px-6 py-4 flex items-center focus:outline-none"
          >
            All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto max-h-60">
              <ul>
                {[
                  "Electronic",
                  "Fashion & Beauty",
                  "Camera & Photo",
                  "Smartphone & Tablet",
                  "Sports & Outdoor",
                  "Jewelry & Watches",
                  "Health & Beauty",
                  "Books & Office",
                  "Toys & Hobbies",
                  "Automobiles",
                  "Home Decoration",
                  "Portable & Personal",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-3 text-sm text-gray-700 hover:bg-red-500 hover:text-white cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="bg-red-500 text-white px-6 py-4 rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
