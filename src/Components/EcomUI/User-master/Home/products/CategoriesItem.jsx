import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const CategoryItem = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  if (!category || !category.name) {
    console.error("Invalid category:", category);
    return null;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSubcategoryExpand = (subcategoryIndex) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [subcategoryIndex]: !prev[subcategoryIndex],
    }));
  };

  const categorySlug = category.name
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-");

  return (
    <li className="mb-4">
      <div className="flex items-center justify-between">
        <Link
          to={`/products/${categorySlug}`}
          className="text-sm text-gray-700 hover:text-red-500 font-semibold"
        >
          {category.name}
        </Link>
        {Array.isArray(category.subcategories) &&
          category.subcategories.length > 0 && (
            <button
              onClick={toggleExpand}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={isExpanded ? "Collapse category" : "Expand category"}
            >
              {isExpanded ? (
                <Minus className="w-4 h-4 text-gray-600" />
              ) : (
                <Plus className="w-4 h-4 text-gray-600" />
              )}
            </button>
          )}
      </div>
      {isExpanded && Array.isArray(category.subcategories) && (
        <ul className="ml-4 mt-2 space-y-2">
          {category.subcategories.map((subcategory, index) => {
            const subcategoryName =
              typeof subcategory === "string" ? subcategory : subcategory.name;
            if (!subcategoryName) {
              console.error("Invalid subcategory:", subcategory);
              return null;
            }

            const subcategorySlug = subcategoryName
              .toLowerCase()
              .replace(/ /g, "-");
            const children = subcategory.children || [];

            return (
              <li key={index} className="mb-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/products/${categorySlug}/${subcategorySlug}`}
                    className="text-sm text-gray-600 hover:text-red-500 block py-1"
                  >
                    {subcategoryName}
                  </Link>
                  {children.length > 0 && (
                    <button
                      onClick={() => toggleSubcategoryExpand(index)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label={
                        expandedSubcategories[index]
                          ? "Collapse subcategory"
                          : "Expand subcategory"
                      }
                    >
                      {expandedSubcategories[index] ? (
                        <Minus className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  )}
                </div>
                {expandedSubcategories[index] && children.length > 0 && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {children.map((child, idx) => {
                      if (!child) {
                        console.error("Invalid child category:", child);
                        return null;
                      }

                      const childSlug = child.toLowerCase().replace(/ /g, "-");
                      return (
                        <li key={idx}>
                          <Link
                            to={`/products/childpage`}
                            className="text-sm text-gray-500 hover:text-red-500"
                          >
                            {child}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
