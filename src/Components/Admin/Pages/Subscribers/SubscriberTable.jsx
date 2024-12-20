import React, { useState } from "react";

const SubscriberTable = () => {
  // Sample Data
  const data = [
    { id: 8, email: "shaon@gmail.com" },
    { id: 9, email: "test@gmail.com" },
    { id: 10, email: "shaoneel@gmail.com" },
    { id: 11, email: "mojibur@gmail.com" },
    { id: 12, email: "tretr@ter.d" },
    { id: 13, email: "shaons@gmail.com" },
    { id: 14, email: "shaon@gmail.coms" },
    { id: 15, email: "junnuns@gmail.com" },
    { id: 16, email: "admin@gmail.com" },
    { id: 17, email: "user7@gmail.com" },
    { id: 18, email: "example@gmail.com" },
  ];

  // State
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // Filtered and Paginated Data
  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handlers
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleDownload = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "ID,Email\n" +
      data.map((item) => `${item.id},${item.email}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Subscribers</h1>
      <div className="mb-4">
        <p className="text-gray-500">Dashboard &gt; Subscribers</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          {/* Entries Dropdown */}
          <div>
            <label className="mr-2 text-gray-700 font-medium">Show</label>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              onChange={(e) => {
                setCurrentPage(1);
                setEntriesPerPage(Number(e.target.value));
              }}
              defaultValue={entriesPerPage}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="ml-2 text-gray-700">entries</span>
          </div>

          {/* Search Input */}
          <div>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Download
          </button>
        </div>

        {/* Table */}
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">#SL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {item.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700">
            Showing {Math.min((currentPage - 1) * entriesPerPage + 1, filteredData.length)} to{" "}
            {Math.min(currentPage * entriesPerPage, filteredData.length)} of{" "}
            {filteredData.length} entries
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded ${
                currentPage === 1 ? "bg-gray-300" : "bg-blue-800 text-white hover:bg-blue-900"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-800 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-blue-800 text-white hover:bg-blue-900"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberTable;
