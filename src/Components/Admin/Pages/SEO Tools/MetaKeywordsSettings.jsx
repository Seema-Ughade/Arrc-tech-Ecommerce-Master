import React, { useState } from "react";

function MetaKeywordsSettings() {
  const [keywords, setKeywords] = useState(["Genius", "Ocean", "Sea", "Etc", "SeaGenius"]);
  const [description, setDescription] = useState("dsjhdeykfuyoty");
  const [keywordInput, setKeywordInput] = useState("");

  const addKeyword = () => {
    if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleSave = () => {
    console.log("Meta Keywords:", keywords);
    console.log("Meta Description:", description);
    alert("Settings Saved!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Meta Keywords</h1>
      <div className="mb-4">
        <p className="text-gray-500">
          Dashboard &gt; SEO Tools &gt; Meta Keywords
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        {/* Keywords Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Meta Keywords *</label>
          <div className="flex flex-wrap gap-2 items-center mb-2">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 text-gray-800 rounded px-3 py-1 text-sm"
              >
                {keyword}
                <button
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => removeKeyword(keyword)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addKeyword()}
              className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a keyword and press Enter"
            />
            <button
              onClick={addKeyword}
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Meta Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter meta description"
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default MetaKeywordsSettings;
