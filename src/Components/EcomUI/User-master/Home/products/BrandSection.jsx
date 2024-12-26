import React from "react";
import { FilterSection } from "./FilterSection";

const brandOptions = [
  { id: "symphony", label: "Symphony" },
  { id: "oppo", label: "Oppo" },
  { id: "estore", label: "Estore" },
  { id: "infinix", label: "Infinix" },
  { id: "apple", label: "Apple" },
];

export function BrandSection({ selectedFilters, onFilterChange }) {
  return (
    <FilterSection
      title="Brand"
      options={brandOptions}
      selectedFilters={selectedFilters}
      onFilterChange={onFilterChange}
    />
  );
}
