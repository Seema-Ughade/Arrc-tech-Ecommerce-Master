import { useState } from 'react'

export default function ProductSettings() {
  const [settings, setSettings] = useState({
    displayStockNumber: true,
    wholeSaleMaxQuantity: 7,
    displayNewProducts: 12,
    displayBestSeller: 12,
    displayPopularProducts: 12,
    displayTrendingProducts: 12,
    categoryProductsPerPage: 12,
    vendorProductsPerPage: 12,
    displayContactSeller: true,
    displayProductBySeller: 3,
    vendorPhysicalProducts: true,
    vendorDigitalProducts: true,
    vendorLicenseProducts: true,
    vendorListingProducts: true,
    vendorAffiliteProducts: true,
    wishlistProductsPerPage: 12,
    wishlistViewOptions: [12, 24, 36, 48, 60],
    minimumPrice: 0,
    maximumPrice: 1000000,
    viewProductPerPage: 12
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Settings saved:', settings)
  }

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Product Settings</h1>
        <div className="flex items-center text-gray-600">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Products</span>
          <span className="mx-2">{'>'}</span>
          <span>Product Settings</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium">Display Stock Number</label>
            <button
              type="button"
              className={`px-4 py-1 rounded ${
                settings.displayStockNumber ? 'bg-green-600 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleInputChange('displayStockNumber', !settings.displayStockNumber)}
            >
              {settings.displayStockNumber ? 'Activated' : 'Deactivated'}
            </button>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Product Whole Sale Max Quantity *
            </label>
            <input
              type="number"
              value={settings.wholeSaleMaxQuantity}
              onChange={(e) => handleInputChange('wholeSaleMaxQuantity', e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">HOME PAGE SECTION</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Display New Products *</label>
                <input
                  type="number"
                  value={settings.displayNewProducts}
                  onChange={(e) => handleInputChange('displayNewProducts', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Display Best Seller Products *</label>
                <input
                  type="number"
                  value={settings.displayBestSeller}
                  onChange={(e) => handleInputChange('displayBestSeller', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Display Popular Products *</label>
                <input
                  type="number"
                  value={settings.displayPopularProducts}
                  onChange={(e) => handleInputChange('displayPopularProducts', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Display Trending Products *</label>
                <input
                  type="number"
                  value={settings.displayTrendingProducts}
                  onChange={(e) => handleInputChange('displayTrendingProducts', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">CATEGORY PAGE SECTION</h2>
            <div>
              <label className="block mb-2 font-medium">Display Products Per Page *</label>
              <input
                type="number"
                value={settings.categoryProductsPerPage}
                onChange={(e) => handleInputChange('categoryProductsPerPage', e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">VENDOR PAGE SECTION</h2>
            <div>
              <label className="block mb-2 font-medium">Display Products Per Page *</label>
              <input
                type="number"
                value={settings.vendorProductsPerPage}
                onChange={(e) => handleInputChange('vendorProductsPerPage', e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">PRODUCT DETAILS PAGE SECTION</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-medium">Display Contact Seller</label>
                <button
                  type="button"
                  className={`px-4 py-1 rounded ${
                    settings.displayContactSeller ? 'bg-green-600 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => handleInputChange('displayContactSeller', !settings.displayContactSeller)}
                >
                  {settings.displayContactSeller ? 'Activated' : 'Deactivated'}
                </button>
              </div>
              <div>
                <label className="block mb-2 font-medium">Display Product By Seller *</label>
                <input
                  type="number"
                  value={settings.displayProductBySeller}
                  onChange={(e) => handleInputChange('displayProductBySeller', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">VENDOR PRODUCT CREATE ENABLE & DISABLE</h2>
            <div className="space-y-4">
              {[
                ['vendorPhysicalProducts', 'Vendor Physical Products'],
                ['vendorDigitalProducts', 'Vendor Digital Products'],
                ['vendorLicenseProducts', 'Vendor License Products'],
                ['vendorListingProducts', 'Vendor Listing Products'],
                ['vendorAffiliteProducts', 'Vendor Affilate Products']
              ].map(([key, label]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="font-medium">{label}</label>
                  <button
                    type="button"
                    className={`px-4 py-1 rounded ${
                      settings[key] ? 'bg-green-600 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleInputChange(key, !settings[key])}
                  >
                    {settings[key] ? 'Activated' : 'Deactivated'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">WISHLIST PAGE SECTION</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Display Products Per Page *</label>
                <input
                  type="number"
                  value={settings.wishlistProductsPerPage}
                  onChange={(e) => handleInputChange('wishlistProductsPerPage', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">View Wishlist Product Per Page *</label>
                <div className="flex gap-2 flex-wrap">
                  {settings.wishlistViewOptions.map((option) => (
                    <span
                      key={option}
                      className="px-3 py-1 bg-gray-100 rounded flex items-center"
                    >
                      {option}
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => {
                          const newOptions = settings.wishlistViewOptions.filter(
                            (opt) => opt !== option
                          )
                          handleInputChange('wishlistViewOptions', newOptions)
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">CATALOG & FILTER SECTION</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Minimum Price *</label>
                <input
                  type="number"
                  value={settings.minimumPrice}
                  onChange={(e) => handleInputChange('minimumPrice', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Maximum Price *</label>
                <input
                  type="number"
                  value={settings.maximumPrice}
                  onChange={(e) => handleInputChange('maximumPrice', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">View Product Per Page *</label>
                <input
                  type="number"
                  value={settings.viewProductPerPage}
                  onChange={(e) => handleInputChange('viewProductPerPage', e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

