import React, { useState } from 'react';

const EmailTemplates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { type: 'wallet_deposit', subject: 'Balance Added to Your Account.' },
    { type: 'vendor_verification', subject: 'Request for verification.' },
    { type: 'subscription_warning', subject: 'Your subscription plan will end after five days' },
    { type: 'vendor_accept', subject: 'Your Vendor Account Activated' },
    { type: 'new_registration', subject: 'Welcome To Royal Cart' },
    { type: 'new_order', subject: 'Your Order Placed Successfully' },
  ];

  const handleEdit = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Email Templates</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <span>Show</span>
          <select className="border px-2 py-1 rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>entries</span>
        </div>
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Email Type</th>
              <th className="border-b px-4 py-2">Email Subject</th>
              <th className="border-b px-4 py-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{template.type}</td>
                <td className="border-b px-4 py-2">{template.subject}</td>
                <td className="border-b px-4 py-2">
                  <button
                    onClick={() => handleEdit(template)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between items-center">
          <span>Showing 1 to 6 of 6 entries</span>
          <div className="flex gap-2">
            <button className="bg-gray-300 px-3 py-1 rounded">Previous</button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">1</button>
            <button className="bg-gray-300 px-3 py-1 rounded">Next</button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedTemplate && (
        <EditModal template={selectedTemplate} closeModal={closeModal} />
      )}
    </div>
  );
};

const EditModal = ({ template, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-1/2">
        <h2 className="text-xl font-semibold mb-4">Edit Email Template</h2>
        <table className="table-auto w-full text-left mb-4">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Meaning</th>
              <th className="border-b px-4 py-2">BB Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">Customer Name</td>
              <td className="border-b px-4 py-2">{'{customer_name}'}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Order Amount</td>
              <td className="border-b px-4 py-2">{'{order_amount}'}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Admin Name</td>
              <td className="border-b px-4 py-2">{'{admin_name}'}</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email Type</label>
          <input
            type="text"
            value={template.type}
            readOnly
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email Subject</label>
          <input
            type="text"
            value={template.subject}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email Body</label>
          <textarea
            rows="5"
            className="w-full border px-3 py-2 rounded"
            defaultValue={`Hello {customer_name},\n\nYour subscription plan will end after five days. Please renew your plan otherwise all of your products will be deactivated.\n\nThank You`}
          ></textarea>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={closeModal} className="bg-gray-300 px-3 py-1 rounded">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;
