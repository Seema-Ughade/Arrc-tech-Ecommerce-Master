import React from 'react';

export default function AddressStep({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className={`mt-1 w-full rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            } p-4 focus:outline-none focus:ring-2 focus:ring-red-500`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className={`mt-1 w-full rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            } p-4 focus:outline-none focus:ring-2 focus:ring-red-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Shipping Address</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="shippingName"
              value={formData.shippingName}
              onChange={handleChange}
              placeholder="Full Name"
              className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Country</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

