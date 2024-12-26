import React from "react";
import { Checkbox } from "./Checkbox";

export function FilterSection({
  title,
  options,
  selectedFilters,
  onFilterChange,
}) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selectedFilters.has(option.id)}
            onChange={() => onFilterChange(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
