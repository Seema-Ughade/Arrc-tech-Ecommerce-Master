import React, { useState } from "react";

const EmailConfiguration = () => {
  const [status, setStatus] = useState("Activated");
  const [formValues, setFormValues] = useState({
    mailDriver: "SMTP",
    mailHost: "sandbox.smtp.mailtrap.io",
    mailPort: "2525",
    encryption: "TLS",
    mailUsername: "77c8df7c3e0779",
    mailPassword: "509dc95e1382f5",
    fromEmail: "test@junnun.royalscripts.com",
    fromName: "GeniusTest",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formValues);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Email Configuration</h1>
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">SMTP</h2>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`px-4 py-2 rounded ${
              status === "Activated" ? "bg-green-600 text-white" : "bg-gray-300"
            }`}
          >
            <option value="Activated">Activated</option>
            <option value="Deactivated">Deactivated</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Mail Driver *</label>
            <input
              type="text"
              name="mailDriver"
              value={formValues.mailDriver}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Mail Host *</label>
            <input
              type="text"
              name="mailHost"
              value={formValues.mailHost}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Mail Port *</label>
            <input
              type="text"
              name="mailPort"
              value={formValues.mailPort}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Encryption *</label>
            <input
              type="text"
              name="encryption"
              value={formValues.encryption}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Mail Username *</label>
            <input
              type="text"
              name="mailUsername"
              value={formValues.mailUsername}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Mail Password *</label>
            <input
              type="password"
              name="mailPassword"
              value={formValues.mailPassword}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">From Email *</label>
            <input
              type="email"
              name="fromEmail"
              value={formValues.fromEmail}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">From Name *</label>
            <input
              type="text"
              name="fromName"
              value={formValues.fromName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailConfiguration;
