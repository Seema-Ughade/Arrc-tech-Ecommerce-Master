import React, { useState } from "react";

const BlogSettings = () => {
  const [disqusStatus, setDisqusStatus] = useState("Deactivated");
  const [shortName, setShortName] = useState("junnun");
  const [postsPerPage, setPostsPerPage] = useState(6);

  const handleSave = () => {
    // Add your save logic here
    console.log({
      disqusStatus,
      shortName,
      postsPerPage,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">Blog Settings</h1>
        <div className="text-sm text-gray-500 mt-2">
          Dashboard &gt; Blog &gt; Blog Settings
        </div>
        <form className="mt-6 space-y-4">
          {/* Disqus Status */}
          <div>
            <label className="block text-gray-700 font-medium">Disqus</label>
            <select
              value={disqusStatus}
              onChange={(e) => setDisqusStatus(e.target.value)}
              className={`block w-full p-2 rounded-md shadow-sm border ${
                disqusStatus === "Activated" ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"
              }`}
            >
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>

          {/* Disqus Website Short Name */}
          <div>
            <label className="block text-gray-700 font-medium">
              Disqus Website Short Name *
            </label>
            <input
              type="text"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Display Posts Per Page */}
          <div>
            <label className="block text-gray-700 font-medium">
              Display Posts Per Page *
            </label>
            <input
              type="number"
              value={postsPerPage}
              onChange={(e) => setPostsPerPage(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogSettings;
