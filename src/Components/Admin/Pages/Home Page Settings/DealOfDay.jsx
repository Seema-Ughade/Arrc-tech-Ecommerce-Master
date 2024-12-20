import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

const initialDeal = {
  id: 1,
  text: "CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT",
  details:
    "Donec condimentum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pretium sapien, in pulvinar ipsum molestie id. Aliquam erat volutpat. Duis quam tellus, ullamcorper.....",
  dateLimit: "18-06-2025",
  image:
    "https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155614Banner2png.png",
};

export default function DealOfDay() {
  const [deal, setDeal] = useState(initialDeal);
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDeal({ ...deal, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (editMode) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setEditMode(false)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <h1 className="text-2xl font-bold">Edit Deal Of The Day</h1>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span>Dashboard</span>
            <span className="mx-2">›</span>
            <span>Home Page Settings</span>
            <span className="mx-2">›</span>
            <span>Deal Of The Day</span>
            <span className="mx-2">›</span>
            <span>Edit</span>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="max-w-2xl">
          <div className="mb-6">
            <label className="block mb-2">
              Text <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={deal.text}
              onChange={(e) => setDeal({ ...deal, text: e.target.value })}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Details <span className="text-red-500">*</span>
            </label>
            <textarea
              value={deal.details}
              onChange={(e) => setDeal({ ...deal, details: e.target.value })}
              className="w-full border rounded-md px-3 py-2"
              rows={4}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Date Limit <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={deal.dateLimit}
              onChange={(e) => setDeal({ ...deal, dateLimit: e.target.value })}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Current Featured Image <span className="text-red-500">*</span>
            </label>
            <div className="mb-2">
              <img
                src={deal.image}
                alt="Deal"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Prefered Size: (1920x800) or Square Sized Image
            </div>
            <div>
              <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-md cursor-pointer hover:bg-gray-50">
                <Upload className="w-4 h-4" />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Update Deal
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Deal Of The Day</h1>
      </div>

      <div>
        <p className="text-lg">{deal.text}</p>
        <p className="text-sm text-gray-600">{deal.details}</p>
        <p className="text-sm text-gray-600">
          Date Limit: <strong>{deal.dateLimit}</strong>
        </p>
        <img
          src={deal.image}
          alt="Deal"
          className="max-w-full h-auto rounded-lg mt-4"
        />
      </div>

      <button
        onClick={() => setEditMode(true)}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Edit Deal
      </button>
    </div>
  );
}
