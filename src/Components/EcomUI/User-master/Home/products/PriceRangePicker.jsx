import React, { useState } from 'react';
import { Range } from 'react-range';

const PriceRangePicker = ({ onPriceRangeChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
    onPriceRangeChange(values);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Price Range</h3>
      <Range
        step={1000}
        min={0}
        max={100000}
        values={priceRange}
        onChange={handlePriceRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-1 bg-gray-200 rounded-full"
          >
            <div
              className="absolute h-1 bg-red-500 rounded-full"
              style={{
                width: `${((priceRange[1] - priceRange[0]) / 100000) * 100}%`,
                left: `${(priceRange[0] / 100000) * 100}%`
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-4 h-4 bg-red-500 rounded-full shadow focus:outline-none"
          />
        )}
      />
      <div className="flex justify-between mt-4 text-sm">
        <span>{formatPrice(priceRange[0])}</span>
        <span>{formatPrice(priceRange[1])}</span>
      </div>
    </div>
  );
};

export default PriceRangePicker;

