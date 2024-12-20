import React from "react";

const LogoUpload = () => {
  const handleFileChange = (type, event) => {
    console.log(`${type} Logo File:`, event.target.files[0]);
  };

  const handleSubmit = (type) => {
    console.log(`${type} Logo Submitted`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">Website Logo</h1>
        <div className="text-sm text-gray-500 mt-2">
          Dashboard &gt; General Settings &gt; Website Logo
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Header Logo */}
          <div className="bg-gray-50 p-4 rounded-lg shadow border">
            <h2 className="text-lg font-medium text-blue-800 text-center">
              Header Logo
            </h2>
            <div className="text-center my-4">
              <p className="text-xl font-bold text-gray-800">Arrc Technology</p>
            </div>
            <div className="text-center">
              <input
                type="file"
                onChange={(e) => handleFileChange("Header", e)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => handleSubmit("Header")}
                className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="bg-gray-50 p-4 rounded-lg shadow border">
            <h2 className="text-lg font-medium text-blue-800 text-center">
              Footer Logo
            </h2>
            <div className="text-center my-4">
              <p className="text-xl font-bold text-gray-800 opacity-50">
                Arrc Technology
              </p>
            </div>
            <div className="text-center">
              <input
                type="file"
                onChange={(e) => handleFileChange("Footer", e)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => handleSubmit("Footer")}
                className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Invoice Logo */}
          <div className="bg-gray-50 p-4 rounded-lg shadow border">
            <h2 className="text-lg font-medium text-blue-800 text-center">
              Invoice Logo
            </h2>
            <div className="text-center my-4">
              <p className="text-xl font-bold text-gray-800">Arrc Technology</p>
            </div>
            <div className="text-center">
              <input
                type="file"
                onChange={(e) => handleFileChange("Invoice", e)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => handleSubmit("Invoice")}
                className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoUpload;
