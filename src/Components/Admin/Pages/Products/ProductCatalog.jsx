import { useState } from 'react'

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesCount, setEntriesCount] = useState(10)
  const [products] = useState([
    {
      id: '00000429',
      name: 'Budha Statue',
      sku: 'qZc3994t8R',
      vendor: 'Test Stores',
      type: 'Physical',
      stock: 'Out Of Stock',
      price: '0',
      status: 'activated'
    },
    {
      id: '00000401',
      name: 'Classic Leather Loafers with Memory Foam Insoles',
      sku: 'hKk7682vVx',
      type: 'Physical',
      stock: '520',
      price: '650',
      status: 'activated'
    },
    {
      id: '00000165',
      name: 'Zain - Digital Agency and Startup HTML Template',
      sku: 'RXp8737Le1',
      vendor: 'Akeem Frederick',
      type: 'Physical',
      stock: '4584',
      price: '300',
      status: 'activated'
    }
  ])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Products</h1>
        <div className="flex items-center text-gray-600">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Products</span>
          <span className="mx-2">{'>'}</span>
          <span>Catalog Products</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span>Show</span>
            <select
              className="mx-2 border rounded px-2 py-1"
              value={entriesCount}
              onChange={(e) => setEntriesCount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Search:</span>
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Stock</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.slice(0, entriesCount).map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2">
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">
                      ID: {product.id} SKU: {product.sku}
                      {product.vendor && <span> VENDOR: {product.vendor}</span>}
                    </div>
                  </div>
                </td>
                <td className="py-2">{product.type}</td>
                <td className="py-2">{product.stock}</td>
                <td className="py-2">₹{product.price}</td>
                <td className="py-2">
                  <button className="bg-green-600 text-white px-4 py-1 rounded">
                    Activated
                  </button>
                </td>
                <td className="py-2">
                  <button className="bg-indigo-700 text-white px-4 py-1 rounded">
                    Actions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <div>Showing 1 to 3 of 3 entries</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-gray-600">Previous</button>
            <button className="px-3 py-1 bg-indigo-700 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

