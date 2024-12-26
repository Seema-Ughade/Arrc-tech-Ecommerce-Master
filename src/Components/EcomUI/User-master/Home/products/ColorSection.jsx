import React from "react";
import { FilterSection } from "./FilterSection";

const colorOptions = [
  { id: "black", label: "Black" },
  { id: "white", label: "White" },
  { id: "silver", label: "Silver" },
  { id: "red", label: "Red" },
  { id: "dark-grey", label: "Dark Grey" },
  { id: "dark-blue", label: "Dark Blue" },
  { id: "brown", label: "Brown" },
];

export function ColorSection({ selectedFilters, onFilterChange }) {
  return (
    <FilterSection
      title="Color Family"
      options={colorOptions}
      selectedFilters={selectedFilters}
      onFilterChange={onFilterChange}
    />
  );
}
