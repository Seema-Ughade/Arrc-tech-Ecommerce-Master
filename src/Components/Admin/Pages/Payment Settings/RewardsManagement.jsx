import React, { useState } from "react";

function RewardsManagement() {
  const [fields, setFields] = useState([{ orderAmount: "", reward: "" }]);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddField = () => {
    setFields([...fields, { orderAmount: "", reward: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Rewards</h1>
      <div className="bg-white p-6 rounded shadow">
        <div className="flex items-center mb-4">
          <span className="font-medium text-lg mr-2">Rewards:</span>
          <span className="bg-green-600 text-white px-3 py-1 rounded mr-4">
            Activated
          </span>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-1 w-20 mr-2"
            placeholder="10"
          />
          <span className="text-gray-700">Reward Point Number</span>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-1 w-20 mx-2"
            placeholder="15"
          />
          <span className="text-gray-700">To (USD) Dollar ($)</span>
          <button
            onClick={togglePopup}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow ml-4 hover:bg-blue-700"
          >
            Save
          </button>
        </div>
        <div className="border-t border-gray-200 pt-4">
          {fields.map((field, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <input
                type="number"
                value={field.orderAmount}
                onChange={(e) =>
                  handleFieldChange(index, "orderAmount", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 w-64"
                placeholder="Order Amount (USD)"
              />
              <input
                type="text"
                value={field.reward}
                onChange={(e) =>
                  handleFieldChange(index, "reward", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 w-64"
                placeholder="Reward"
              />
              <button
                onClick={() => handleRemoveField(index)}
                className="text-red-500 font-bold"
              >
                ✖
              </button>
            </div>
          ))}
          <button
            onClick={handleAddField}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow mt-4 hover:bg-blue-600"
          >
            + Add More Field
          </button>
        </div>
        <button className="bg-teal-400 text-white px-4 py-2 rounded shadow mt-4 hover:bg-navy-800">
          Update Reward
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded shadow-lg w-1/3 p-6">
            <h2 className="text-lg font-medium mb-4">Save Rewards</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Save
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter Confirmation"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RewardsManagement;
