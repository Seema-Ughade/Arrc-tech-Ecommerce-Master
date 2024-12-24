import React from "react";

const CardsRow = () => {
  const stats = [
    {
      color: "yellow-500",
      value: 2,
      title: "New Customers",
      subtitle: "Last 30 Days",
    },
    {
      color: "cyan-500",
      value: 12,
      title: "Total Customers",
      subtitle: "All Time",
    },
    {
      color: "purple-500",
      value: 0,
      title: "Total Sales",
      subtitle: "Last 30 Days",
    },
    {
      color: "green-500",
      value: 4,
      title: "Total Sales",
      subtitle: "All Time",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
        >
          {/* Large Circle with Border */}
          <div
            className={`w-44 h-44 flex items-center justify-center rounded-full border-[15px]  border-${stat.color} text-5xl font-bold text-gray-800`}
          >
            {stat.value}
          </div>
          {/* Title and Subtitle */}
          <p className="text-center font-semibold mt-6 text-lg text-gray-700">
            {stat.title}
          </p>
          <p className="text-center text-sm text-gray-500">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsRow;
