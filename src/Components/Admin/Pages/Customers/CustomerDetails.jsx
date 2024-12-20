import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CustomerDetails = () => {
    const navigate = useNavigate();
  
  const [customer] = useState({
    id: '58',
    name: 'Siva Bharath',
    email: 'sivadsolo007@gmail.com',
    phone: '8760274063',
    address: '23/A1, Poon Nagar, Jayankondam, Ariyalur(DT)',
    joinedDate: '6 days ago',
    avatar: '/placeholder.svg'
  });

  const [orders] = useState([]);

  const handleBack = () => {
    navigate("/admin/users");

    // Implement your navigation logic here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Customer Details</h1>
          <button
            onClick={handleBack}
            className="bg-indigo-700 text-white px-4 py-2 rounded flex items-center"
          >
            <span className="mr-2">←</span> Back
          </button>
        </div>
        <div className="flex items-center text-gray-600 mt-2">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Customers</span>
          <span className="mx-2">{'>'}</span>
          <span>Details</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Profile Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-700">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="w-full bg-indigo-700 text-white px-4 py-2 rounded">
                Send Message
              </button>
            </div>

            {/* Customer Details */}
            <div className="md:col-span-3 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">ID#</label>
                  <span className="text-lg">{customer.id}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Joined</label>
                  <span className="text-lg">{customer.joinedDate}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Name</label>
                  <span className="text-lg">{customer.name}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Email</label>
                  <span className="text-lg">{customer.email}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Phone</label>
                  <span className="text-lg">{customer.phone}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Address</label>
                  <span className="text-lg">{customer.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Ordered Section */}
        <div className="border-t">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Products Ordered</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Order ID</th>
                  <th className="text-left py-2">Purchase Date</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="py-2">{order.id}</td>
                      <td className="py-2">{order.purchaseDate}</td>
                      <td className="py-2">{order.amount}</td>
                      <td className="py-2">{order.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No data available in table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;

