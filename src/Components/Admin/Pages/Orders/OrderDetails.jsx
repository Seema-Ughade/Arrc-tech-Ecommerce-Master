import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit } from 'lucide-react';
import axios from 'axios';

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/Uiorder/${id}`);
        setOrder(response.data.order);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order details:', error);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading order details...</div>;
  }

  if (!order) {
    return <div className="text-center mt-8 text-red-600">Order not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl font-bold">Order Details</h1>
        </div>
        <div className="text-sm text-gray-600">
          Dashboard &gt; Orders &gt; Order Details
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Details Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Order Details</h2>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                {order.status || 'Unpaid'}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Order ID</p>
                  <p className="font-medium">{order._id}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Product</p>
                  <p className="font-medium">{order.items?.length || 0}</p>
                </div>
                <div>
                  <p className="text-gray-600">Shipping Method</p>
                  <p className="font-medium">{order.shippingMethod || 'Express Shipping'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Shipping Cost</p>
                  <p className="font-medium">₹{order.shippingCost || '15'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Tax</p>
                  <p className="font-medium">₹{order.tax || '2.61'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Packaging Method</p>
                  <p className="font-medium">{order.packagingMethod || 'Gift Packaging'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Packaging Cost</p>
                  <p className="font-medium">₹{order.packagingCost || '15'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Cost</p>
                  <p className="font-medium">₹{order.totalAmount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-600">Ordered Date</p>
                  <p className="font-medium">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Payment Method</p>
                  <p className="font-medium">{order.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-gray-600">Payment Status</p>
                  <p className="font-medium">{order.status}</p>
                </div>
              </div>

              <button className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Invoice
              </button>
            </div>
          </div>
        </div>

        {/* Billing Details Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Billing Details</h2>
              <button className="text-blue-600 hover:text-blue-800">
                <Edit className="w-5 h-5" />
                Edit
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Name</p>
                  <p className="font-medium">{order.name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-medium">{order.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="font-medium">{order.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">Address</p>
                  <p className="font-medium">{order.address}</p>
                </div>
                <div>
                  <p className="text-gray-600">Country</p>
                  <p className="font-medium">{order.country}</p>
                </div>
                <div>
                  <p className="text-gray-600">State</p>
                  <p className="font-medium">{order.state || '14'}</p>
                </div>
                <div>
                  <p className="text-gray-600">City</p>
                  <p className="font-medium">{order.city || 'Mirpur'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Postal Code</p>
                  <p className="font-medium">{order.postalCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-8 bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Products Ordered By - {order.name}</h2>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              + Add Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product ID#
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shop Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendor Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.items?.map((item) => (
                  <tr key={item.productId}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.productId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">Test Stores</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4">{item.productName || 'Product Name'}</td>
                    <td className="px-6 py-4">
                      <div>Price: ₹{item.price}</div>
                      <div>Qty: {item.quantity}</div>
                      <div>Warranty: Local seller Warranty</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <span className="sr-only">Delete</span>
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total Amount: ₹{order.totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Send Email Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Send Email
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;

