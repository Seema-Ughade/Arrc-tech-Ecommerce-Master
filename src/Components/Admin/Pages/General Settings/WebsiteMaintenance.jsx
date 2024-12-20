import React, { useState } from "react";

const WebsiteMaintenance = () => {
  const [maintenanceStatus, setMaintenanceStatus] = useState("Deactivated");
  const [maintenanceText, setMaintenanceText] = useState("UNDER MAINTENANCE!");

  const handleStatusChange = (status) => {
    setMaintenanceStatus(status);
  };

  const handleTextChange = (e) => {
    setMaintenanceText(e.target.value);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Website Maintenance</h1>

        {/* Maintenance Status */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Website Maintenance
          </label>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md text-white font-medium ${
                maintenanceStatus === "Activated"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
              onClick={() => handleStatusChange("Activated")}
            >
              Activated
            </button>
            <button
              className={`px-4 py-2 rounded-md text-white font-medium ${
                maintenanceStatus === "Deactivated"
                  ? "bg-red-500"
                  : "bg-gray-300"
              }`}
              onClick={() => handleStatusChange("Deactivated")}
            >
              Deactivated
            </button>
          </div>
        </div>

        {/* Maintenance Text */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Maintenance Text *
          </label>
          <p className="text-sm text-gray-500 mb-2">(In Any Language)</p>
          <textarea
            value={maintenanceText}
            onChange={handleTextChange}
            className="w-full h-32 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-400">
          Save
        </button>
      </div>
    </div>
  );
};

export default WebsiteMaintenance;
