import React, { useState } from 'react';

const Withdrawals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesCount, setEntriesCount] = useState(10);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [withdrawals] = useState([
    {
      userId: '22',
      userName: 'User',
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: -4.30,
      charge: 10.30,
      method: 'Paypal',
      date: '2024-09-03T08:51:59.000000Z',
      status: 'Completed',
      paypalEmail: 'showrabhasan715@gmail.com'
    },
    {
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: 9,
      method: 'Skrill',
      date: '2024-08-25T06:40:15.000000Z',
      status: 'Rejected',
      userId: '23',
      userName: 'User2'
    },
    {
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: 256.95,
      method: 'Skrill',
      date: '2024-08-20T06:47:53.000000Z',
      status: 'Completed',
      userId: '24',
      userName: 'User3'
    },
    {
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: 235.10,
      method: 'Paypal',
      date: '2024-08-20T06:43:18.000000Z',
      status: 'Rejected',
      userId: '25',
      userName: 'User4'
    },
    {
      email: 'vendor@gmail.com',
      phone: '3453453345453411',
      amount: 9,
      method: 'Paypal',
      date: '2024-08-11T09:55:04.000000Z',
      status: 'Completed',
      userId: '26',
      userName: 'Vendor1'
    },
    {
      email: 'vendor@gmail.com',
      phone: '3453453345453411',
      amount: 9,
      method: 'Paypal',
      date: '2024-08-11T09:53:38.000000Z',
      status: 'Rejected',
      userId: '27',
      userName: 'Vendor2'
    },
    {
      email: 'vendor@gmail.com',
      phone: '3453453345453411',
      amount: -0.50,
      method: 'Paypal',
      date: '2024-08-11T09:52:49.000000Z',
      status: 'Rejected',
      userId: '28',
      userName: 'Vendor3'
    },
    {
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: 9,
      method: 'Bank',
      date: '2024-06-04T04:27:30.000000Z',
      status: 'Rejected',
      userId: '29',
      userName: 'User5'
    },
    {
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: 9,
      method: 'Paypal',
      date: '2024-06-04T04:26:16.000000Z',
      status: 'Completed',
      userId: '30',
      userName: 'User6'
    },
    {
      email: 'user@gmail.com',
      phone: '3453453534',
      amount: 9,
      method: 'Paypal',
      date: '2024-06-04T04:26:02.000000Z',
      status: 'Pending',
      userId: '31',
      userName: 'User7'
    }
  ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleDetails = (withdrawal) => {
    setSelectedWithdrawal(withdrawal);
    setShowDetailsModal(true);
  };

  const handleAcceptClick = (withdrawal) => {
    setSelectedWithdrawal(withdrawal);
    setShowAcceptModal(true);
  };

  const handleRejectClick = (withdrawal) => {
    setSelectedWithdrawal(withdrawal);
    setShowRejectModal(true);
  };

  const handleAcceptConfirm = () => {
    // Handle accept logic here
    setShowAcceptModal(false);
  };

  const handleRejectConfirm = () => {
    // Handle reject logic here
    setShowRejectModal(false);
  };

  const filteredWithdrawals = withdrawals.filter(withdrawal =>
    withdrawal.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    withdrawal.phone.includes(searchTerm) ||
    withdrawal.method.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Withdraws</h1>
        <div className="flex items-center text-gray-600">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Customers</span>
          <span className="mx-2">{'>'}</span>
          <span>Withdraws</span>
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

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-teal-400 text-white">
                <th className="text-left py-2 px-4">Email</th>
                <th className="text-left py-2 px-4">Phone</th>
                <th className="text-left py-2 px-4">Amount</th>
                <th className="text-left py-2 px-4">Method</th>
                <th className="text-left py-2 px-4">Withdraw Date</th>
                <th className="text-left py-2 px-4">Status</th>
                <th className="text-left py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredWithdrawals.slice(0, entriesCount).map((withdrawal, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{withdrawal.email}</td>
                  <td className="py-2 px-4">{withdrawal.phone}</td>
                  <td className="py-2 px-4">₹{withdrawal.amount}</td>
                  <td className="py-2 px-4">{withdrawal.method}</td>
                  <td className="py-2 px-4">{formatDate(withdrawal.date)}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        withdrawal.status === 'Completed' ? 'bg-green-600' :
                        withdrawal.status === 'Rejected' ? 'bg-red-600' :
                        'bg-yellow-600'
                      }`}
                    >
                      {withdrawal.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDetails(withdrawal)}
                        className="bg-indigo-700 text-white px-3 py-1 rounded"
                      >
                        Details
                      </button>
                      {withdrawal.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleAcceptClick(withdrawal)}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleRejectClick(withdrawal)}
                            className="bg-red-600 text-white px-3 py-1 rounded"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Details Modal */}
        {showDetailsModal && selectedWithdrawal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">WITHDRAW DETAILS</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b py-2">
                    <span className="font-semibold">User ID#:</span>
                    <span className="ml-2">{selectedWithdrawal.userId}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">User Name:</span>
                    <span className="ml-2">{selectedWithdrawal.userName}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">Withdraw Amount:</span>
                    <span className="ml-2">₹{selectedWithdrawal.amount}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">Withdraw Charge:</span>
                    <span className="ml-2">₹{selectedWithdrawal.charge}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">Withdraw Process Date:</span>
                    <span className="ml-2">{formatDate(selectedWithdrawal.date)}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">Withdraw Status:</span>
                    <span className="ml-2">{selectedWithdrawal.status}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">User Email:</span>
                    <span className="ml-2">{selectedWithdrawal.email}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">User Phone:</span>
                    <span className="ml-2">{selectedWithdrawal.phone}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">Withdraw Method:</span>
                    <span className="ml-2">{selectedWithdrawal.method}</span>
                  </div>
                  <div className="border-b py-2">
                    <span className="font-semibold">Paypal Email:</span>
                    <span className="ml-2">{selectedWithdrawal.paypalEmail}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t flex justify-end">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="bg-indigo-700 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Accept Modal */}
        {showAcceptModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4">Accept Withdraw</h2>
              <p className="mb-6">You are about to accept this Withdraw.</p>
              <p className="mb-6">Do you want to proceed?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowAcceptModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAcceptConfirm}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reject Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4">Reject Withdraw</h2>
              <p className="mb-6">You are about to reject this Withdraw.</p>
              <p className="mb-6">Do you want to proceed?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRejectConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <div>
            Showing {Math.min(entriesCount, filteredWithdrawals.length)} of {filteredWithdrawals.length} entries
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-gray-600">Previous</button>
            <button className="px-3 py-1 bg-indigo-700 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;

