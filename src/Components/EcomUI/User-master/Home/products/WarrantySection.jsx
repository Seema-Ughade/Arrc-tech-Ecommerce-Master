import React from "react";
import { FilterSection } from "./FilterSection";

const warrantyOptions = [
  { id: "local-seller", label: "Local seller warranty" },
  { id: "no-warranty", label: "No warranty" },
  { id: "international", label: "International manufacturer warranty" },
  { id: "non-local", label: "Non-local warranty" },
];

export function WarrantySection({ selectedFilters, onFilterChange }) {
  return (
    <FilterSection
      title="Warranty Type"
      options={warrantyOptions}
      selectedFilters={selectedFilters}
      onFilterChange={onFilterChange}
    />
  );
}
