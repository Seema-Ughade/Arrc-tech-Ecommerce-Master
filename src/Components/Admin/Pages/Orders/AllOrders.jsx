// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { TrashIcon } from "@heroicons/react/24/solid";
// import { EditOutlined } from "@ant-design/icons";
// import { useNavigate } from 'react-router-dom';

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newOrder, setNewOrder] = useState({
//     customerEmail: "",
//     orderNumber: "",
//     totalQty: "",
//     totalCost: "",
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const navigate = useNavigate();

//   const Handleaddorder = () => {
//     navigate('/admin/order/create');
//   };

//   useEffect(() => {
//     // Fetch orders (static data for now)
//     const fetchOrders = async () => {
//       const dummyData = [
//         { customerEmail: "Dfj@jdb.cj", orderNumber: "Yaxp1733298601", totalQty: 1, totalCost: 335.33 },
//         { customerEmail: "user@gmaisl.com", orderNumber: "WEp61732720066", totalQty: 1, totalCost: 219.3 },
//         { customerEmail: "himelh646@gmail.com", orderNumber: "xSzy1732708089", totalQty: 1, totalCost: 967.93 },
//       ];
//       setOrders(dummyData);
//       setFilteredOrders(dummyData);
//     };

//     fetchOrders();
//   }, []);

//   useEffect(() => {
//     // Filter orders based on search term
//     const results = orders.filter(
//       (order) =>
//         order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredOrders(results);
//     setCurrentPage(1); // Reset to first page on search
//   }, [searchTerm, orders]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewOrder({ ...newOrder, [name]: value });
//   };

//   const handleAddOrder = (e) => {
//     e.preventDefault();
//     const updatedOrders = [...orders, newOrder];
//     setOrders(updatedOrders);
//     setFilteredOrders(updatedOrders);
//     setNewOrder({ customerEmail: "", orderNumber: "", totalQty: "", totalCost: "" });
//     setIsModalOpen(false);
//   };

//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
//   const currentOrders = filteredOrders.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="container mx-auto">
//       <div className="content-area">
//       <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">
//             All Orders
//         </h4>

//         <div className="flex justify-between mb-4">
//           <input
//             type="text"
//             placeholder="Search orders..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//         onClick={Handleaddorder}
//         className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700"
//           >
//             + Add Order
//           </button>
//         </div>

//         <table className="min-w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-teal-400 text-white">
//               <th className="border border-gray-300 px-4 py-2">Customer Email</th>
//               <th className="border border-gray-300 px-4 py-2">Order Number</th>
//               <th className="border border-gray-300 px-4 py-2">Total Qty</th>
//               <th className="border border-gray-300 px-4 py-2">Total Cost</th>
//               <th className="border border-gray-300 px-4 py-2">Options</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {currentOrders.map((order, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="border border-gray-300 px-4 py-2">{order.customerEmail}</td>
//                 <td className="border border-gray-300 px-4 py-2">{order.orderNumber}</td>
//                 <td className="border border-gray-300 px-4 py-2">{order.totalQty}</td>
//                 <td className="border border-gray-300 px-4 py-2">₹{order.totalCost.toFixed(2)}</td>
//                 <td className="py-2 flex justify-center px-4 border">
//   <div className="group inline-block">
//     {/* Actions Button */}
//     <button
//                   onClick={() => toggleDropdown(product._id)}
//                   className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
//                 >
//                   Actions <i className="fas fa-chevron-down ml-2"></i>
//                 </button>

//     {/* Dropdown Menu */}
//     <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg mt-2 w-48">
//       {/* View Details */}
//       <button
//         onClick={() => alert('View Details clicked')}
//         className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
//       >
//         <i className="fas fa-eye"></i> View Details
//       </button>

//       {/* Send */}
//       <button
//         onClick={() => alert(`Send email to: ${order.customerEmail}`)}
//         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//         >
//         <i className="fas fa-envelope"></i> Send
//       </button>

//       {/* Track Order */}
//       <button
//         onClick={() => alert('Track Order clicked')}
//         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//         >
//         <i className="fas fa-truck"></i> Track Order
//       </button>

//       {/* Delivery Status */}
//       <button
//         onClick={() => alert('Change delivery status clicked')}
//         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//         >
//         <i className="fas fa-dollar-sign"></i> Delivery Status
//       </button>
//     </div>

//   </div>
// </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex justify-between mt-4">
//           <div>
//             <span>{`Showing ${currentPage * itemsPerPage - itemsPerPage + 1} to ${Math.min(currentPage * itemsPerPage, filteredOrders.length)} of ${filteredOrders.length} entries`}</span>
//           </div>
//           <div>
//             <button
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//               className="btn px-4 py-1  rounded border focus:outline-none disabled:opacity-50"
//             >
//               Previous
//             </button>
//             {/* Page Number Indicators */}
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`btn ml-2 px-4 py-1 ${currentPage === index + 1 ? 'bg-blue-900 text-white' : 'bg-white'} border rounded hover:bg-gray-200 focus:outline-none`}
//               >
//                 {index + 1}
//               </button>
//             ))}

//             <button
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className="btn ml-2 px-4 py-1  rounded hover:bg-gray-200 border focus:outline-none disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AllOrders;














import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  const handleAddOrder = () => {
    navigate('/admin/order/create');
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:5000/api/Uiorder');
        const fetchedOrders = Array.isArray(response.data.orders) ? response.data.orders : [];
        setOrders(fetchedOrders);
        setFilteredOrders(fetchedOrders);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please try again later.");
        setOrders([]);
        setFilteredOrders([]);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const results = orders.filter(
      (order) =>
        order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order._id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(results);
    setCurrentPage(1);
  }, [searchTerm, orders]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  if (loading) {
    return <div className="text-center mt-8">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="content-area">
        <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">
          All Orders
        </h4>

        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddOrder}
            className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700"
          >
            + Add Order
          </button>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="text-center mt-8">No orders found.</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-teal-400 text-white">
                    <th className="border border-gray-300 px-4 py-2">Order ID</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Total Amount</th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Created At</th>
                    <th className="border border-gray-300 px-4 py-2">Options</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentOrders.map((order) => (
                    <tr key={order._id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                      <td className="border border-gray-300 px-4 py-2">{order.email}</td>
                      <td className="border border-gray-300 px-4 py-2">₹{order.totalAmount.toFixed(2)}</td>
                      <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss')}
                      </td>
                      <td className="py-2 flex justify-center px-4 border">
                        <div className="group inline-block">
                          <button
                            onClick={() => {}} // You can add dropdown toggle logic here
                            className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                          >
                            Actions <i className="fas fa-chevron-down ml-2"></i>
                          </button>

                          <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg mt-1 w-48">
                            <button
                              onClick={() => alert('View Details clicked')}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              <i className="fas fa-eye"></i> View Details
                            </button>
                            <button
                              onClick={() => alert(`Send email to: ${order.email}`)}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              <i className="fas fa-envelope"></i> Send
                            </button>
                            <button
                              onClick={() => alert('Track Order clicked')}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              <i className="fas fa-truck"></i> Track Order
                            </button>
                            <button
                              onClick={() => alert('Change delivery status clicked')}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              <i className="fas fa-dollar-sign"></i> Delivery Status
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between mt-4">
              <div>
                <span>{`Showing ${currentPage * itemsPerPage - itemsPerPage + 1} to ${Math.min(currentPage * itemsPerPage, filteredOrders.length)} of ${filteredOrders.length} entries`}</span>
              </div>
              <div>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="btn px-4 py-1 rounded border focus:outline-none disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`btn ml-2 px-4 py-1 ${currentPage === index + 1 ? 'bg-blue-900 text-white' : 'bg-white'} border rounded hover:bg-gray-200 focus:outline-none`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="btn ml-2 px-4 py-1 rounded hover:bg-gray-200 border focus:outline-none disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllOrders;

