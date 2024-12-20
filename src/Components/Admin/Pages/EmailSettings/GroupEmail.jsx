import React, { useState } from "react";

const GroupEmail = () => {
  const [formValues, setFormValues] = useState({
    userType: "",
    emailSubject: "",
    emailBody: "",
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
    console.log("Form Submitted:", formValues);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Group Email</h1>
      <div className="bg-white p-6 rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">
              Select User Type <span className="text-red-500">*</span>
            </label>
            <select
              name="userType"
              value={formValues.userType}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Choose User Type</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Subscriber">Subscriber</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Email Subject <span className="text-red-500">*</span>
              <span className="block text-gray-400 text-sm">(In Any Language)</span>
            </label>
            <input
              type="text"
              name="emailSubject"
              value={formValues.emailSubject}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Email Subject"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Email Body <span className="text-red-500">*</span>
              <span className="block text-gray-400 text-sm">(In Any Language)</span>
            </label>
            <textarea
              name="emailBody"
              value={formValues.emailBody}
              onChange={handleChange}
              rows="8"
              className="w-full border px-4 py-2 rounded"
              placeholder="Write the email content here..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupEmail;
