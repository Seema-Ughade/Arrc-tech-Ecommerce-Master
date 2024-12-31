import React from 'react';
import { Plus } from 'lucide-react';

const ProductList = ({ products, onAddProduct }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-semibold">Products</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {products.map((product) => (
          <div key={product._id} className="p-6 flex items-center gap-4">
            <div className="flex-shrink-0 w-24 h-24 border rounded-lg overflow-hidden">
              <img
                src={product.featureImage}
                alt={product.productName}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {product.productName}
              </h3>
              <p className="mt-1 text-xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => onAddProduct(product)}
              className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span className="sr-only">Add product</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

