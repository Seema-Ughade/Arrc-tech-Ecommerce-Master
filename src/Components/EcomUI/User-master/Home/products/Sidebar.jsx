import React, { useEffect, useState } from "react";
import { categories } from "./CategoriesData";
import CategoryItem from "./CategoriesItem";

import blog1 from "../../Assets/blog1.png";
import blog2 from "../../Assets/blog2.png";
import blog3 from "../../Assets/blog3.png";
import blog4 from "../../Assets/blog4.png";

import { Range } from "react-range";
import { WarrantySection } from "./WarrantySection";
import { BrandSection } from "./BrandSection";
import { RamSection } from "./RamSection";
import { ColorSection } from "./ColorSection";

function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [isDragging, setIsDragging] = useState(false);

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value);
    const isMin = e.target.name === "min";

    setPriceRange((prev) => {
      const [min, max] = prev;
      if (isMin) {
        return [Math.min(value, max), max];
      } else {
        return [min, Math.max(value, min)];
      }
    });
  };

  const handleApplyFilter = () => {
    console.log("Applying filter with range:", priceRange);
    // Add your filter logic here
  };

  const handleClearFilter = () => {
    setPriceRange([0, 1000000]);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Price Range</h2>

      {/* Range Slider Container */}
      <div className="relative mb-6">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-2 bg-red-500 rounded-full"
            style={{
              left: `${(priceRange[0] / 1000000) * 100}%`,
              right: `${100 - (priceRange[1] / 1000000) * 100}%`,
            }}
          />
        </div>

        {/* Min Range Input */}
        <input
          type="range"
          name="min"
          min={0}
          max={1000000}
          value={priceRange[0]}
          onChange={handleRangeChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-500 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-red-500 [&::-moz-range-thumb]:appearance-none"
        />

        {/* Max Range Input */}
        <input
          type="range"
          name="max"
          min={0}
          max={1000000}
          value={priceRange[1]}
          onChange={handleRangeChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-500 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-red-500 [&::-moz-range-thumb]:appearance-none"
        />
      </div>

      {/* Price Range Display */}
      <div className="text-center mb-6">
        <span
          className={`text-lg transition-opacity ${
            isDragging ? "opacity-50" : "opacity-100"
          }`}
        >
          {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
        </span>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleApplyFilter}
          className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Apply Filter
        </button>
        <button
          onClick={handleClearFilter}
          className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}

const Sidebar = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const blogData = [
        {
          id: 1,
          title:
            "Gaming Headset with Surround Sound, LED Lighting, and Noise-Cancelling Mic",
          date: "200",
          excerpt:
            "In an age where consumers are bombarded with countless shopping options...",
          image: blog1,
          category: "Technology",
        },
        {
          id: 2,
          title:
            "High-Waisted Skinny Jeans with Distressed Details – Trendy and Comfortable",
          date: "135",
          excerpt:
            "Looking chic and stylish doesn’t have to come with a hefty price tag. With the right strategies, you can build a fashionable wardrobe that reflects your personal style while staying within your budget...",
          image: blog2,
          category: "Fashion",
        },
        {
          id: 3,
          title:
            "Cozy Knit Sweater with Turtleneck and Cable Knit Pattern – A Winter Essential",
          date: "250",
          excerpt: "Fashion staples every woman needs in her wardrobe...",
          image: blog3,
          category: "Fashion",
        },
        {
          id: 4,
          title:
            "Chic Off-Shoulder Ruffle Dress with Floral Print – Perfect for Summer Events",
          date: "Jan 20, 2019",
          excerpt:
            "In the competitive world of e-commerce, standing out and driving sales requires more than just having a great product....",
          image: blog4,
          category: "Fashion",
        },
      ];

      setBlogs(blogData);
      setRecentPosts(blogData.slice(0, 4)); // Show the first 4 as recent posts
    };

    fetchData();
  }, []);

  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const handleFilterChange = (filterId) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filterId)) {
        next.delete(filterId);
      } else {
        next.add(filterId);
      }
      return next;
    });
  };

  return (
    <div className="w-full lg:w-1/4 border-r border-gray-300 pr-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </ul>
      </div>

      <PriceRangeFilter />

      <div className="w-full max-w-xs bg-white rounded-lg shadow-sm p-4">
        <WarrantySection
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />

        <BrandSection
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />

        <RamSection
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <ColorSection
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-4 items-center">
              <img
                src={post.image}
                width={100}
                height={100}
                alt="Recent post"
                className="rounded-md"
              />
              <div>
                <p className="font-semibold">{post.title}</p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
