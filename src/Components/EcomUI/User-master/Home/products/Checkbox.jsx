import React from "react";

export function Checkbox({ id, label, checked, onChange }) {
  return (
    <label htmlFor={id} className="flex items-center group cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
      />
      <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
        {label}
      </span>
    </label>
  );
}
