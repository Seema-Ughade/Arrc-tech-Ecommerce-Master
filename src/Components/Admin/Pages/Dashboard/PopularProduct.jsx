function PopularProduct() {
    const products = [
      {
        id: 1,
        image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/products/1724470967EBxw5rOk.png",
        name: "Cozy Knit Sweater with Turtleneck and Cable Knit P...",
        category: "Fashion & Beauty CLOTHINGS",
        type: "Physical",
        price: "267.50"
      },
      {
        id: 2,
        image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/products/1724470141AJMw9CT3.png",
        name: "Chic Off-Shoulder Ruffle Dress with Floral Print -...",
        category: "Fashion & Beauty CLOTHINGS",
        type: "Physical",
        price: "318.95"
      },
      {
        id: 3,
        image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/products/1724470967EBxw5rOk.png",
        name: "High-Waisted Skinny Jeans with Distressed Details ...",
        category: "Fashion & Beauty CLOTHINGS",
        type: "Physical",
        price: "146.75"
      },
      {
        id: 4,
        image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/products/1724497056aUjkT7cx.png",
        name: "All-Natural Organic Face Oil with Jojoba and Roseh...",
        category: "Fashion & Beauty ACCESSORIES",
        type: "Physical",
        price: "178.25"
      },
      {
        id: 5,
        image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/products/1724228373zw83XbKc.png",
        name: "Luxury Smartwatch with Stainless Steel Case, Sapph...",
        category: "Electronic",
        type: "Physical",
        price: "250"
      }
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold  text-gray-800 mb-6">Popular Product(s)</h2>
        <div className="overflow-x-auto table-responsive">
          <table className="w-full ">
            <thead>
              <tr className="border-b   border-gray-200 text-white bg-teal-400">
                <th className="text-left py-3 px-4 font-semibold ">Featured Image</th>
                <th className="text-left py-3 px-4 font-semibold ">Name</th>
                <th className="text-left py-3 px-4 font-semibold ">Category</th>
                <th className="text-left py-3 px-4 font-semibold ">Type</th>
                <th className="text-left py-3 px-4 font-semibold ">Price</th>
                <th className="text-right py-3 px-4 font-semibold ">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-4 max-w-xs">
                    <p className="text-gray-800 truncate">{product.name}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{product.category}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{product.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-800">{product.price}$</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="inline-flex items-center px-4 py-2 bg-indigo-900 text-white text-sm font-medium rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default PopularProduct;
  
  