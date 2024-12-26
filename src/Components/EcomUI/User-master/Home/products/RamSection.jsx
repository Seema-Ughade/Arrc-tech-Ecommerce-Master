import React from "react";
import { FilterSection } from "./FilterSection";

const ramOptions = [
  { id: "1gb", label: "1 GB" },
  { id: "2gb", label: "2 GB" },
  { id: "3gb", label: "3 GB" },
];

export function RamSection({ selectedFilters, onFilterChange }) {
  return (
    <FilterSection
      title="RAM"
      options={ramOptions}
      selectedFilters={selectedFilters}
      onFilterChange={onFilterChange}
    />
  );
}
