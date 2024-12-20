import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesCount, setEntriesCount] = useState(10);
  const [showSendMessage, setShowSendMessage] = useState(false);
  const [tickets] = useState([
    {
      id: 1,
      name: 'User',
      subject: 'Hello',
      message: 'Hello Desc',
      date: '4 months ago'
    },
    {
      id: 2,
      name: 'User',
      subject: 'asdfasdf',
      message: 'asdfa',
      date: '4 months ago'
    },
    {
      id: 3,
      name: 'User',
      subject: 'mostofa',
      message: 'test ticket',
      date: '3 months ago'
    },
    {
      id: 4,
      name: 'User',
      subject: 'ABCCCCCCsdsdf',
      message: 'zdfvdf',
      date: '3 months ago'
    }
  ]);

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete ticket:', id);
  };

  const handleDetails = (id) => {
    navigate('admin/Coversation');
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Tickets</h1>
        <div className="flex items-center text-gray-600">
          <span>Dashboard</span>
          <span className="mx-2">{'>'}</span>
          <span>Messages</span>
          <span className="mx-2">{'>'}</span>
          <span>Tickets</span>
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
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="mr-2">Search:</span>
              <input
                type="text"
                className="border rounded px-2 py-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowSendMessage(true)}
              className="bg-indigo-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <span>✉</span> Add Ticket
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-teal-400 text-white">
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Subject</th>
              <th className="text-left py-2 px-4">Message</th>
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.slice(0, entriesCount).map((ticket) => (
              <tr key={ticket.id} className="border-b">
                <td className="py-2 px-4">{ticket.name}</td>
                <td className="py-2 px-4">{ticket.subject}</td>
                <td className="py-2 px-4">{ticket.message}</td>
                <td className="py-2 px-4">{ticket.date}</td>
                <td className="py-2 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDetails()}
                      className="bg-indigo-700 text-white px-3 py-1 rounded flex items-center gap-1"
                    >
                      <span>👁️</span> Details
                    </button>
                    <button
                      onClick={() => handleDelete(ticket.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
                    >
                      <span>🗑️</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <div>
            Showing {Math.min(entriesCount, filteredTickets.length)} of {filteredTickets.length} entries
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-gray-600">Previous</button>
            <button className="px-3 py-1 bg-indigo-700 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded text-gray-600">Next</button>
          </div>
        </div>
      </div>

      {/* Send Message Modal */}
      {showSendMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Send Message</h2>
              <button
                onClick={() => setShowSendMessage(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <form className="p-4" onSubmit={(e) => {
              e.preventDefault();
              setShowSendMessage(false);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-700 text-white py-2 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;

