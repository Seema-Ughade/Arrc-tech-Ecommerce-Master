
import { useState, useEffect } from 'react'

export default function DealOfTheDayAdmin() {
  const [entries, setEntries] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentDeal, setCurrentDeal] = useState(null)
  const [formData, setFormData] = useState({
    text: '',
    details: '',
    dateLimit: '',
    image: null
  })

  useEffect(() => {
    fetchDeals()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('text', formData.text)
    data.append('details', formData.details)
    data.append('dateLimit', formData.dateLimit)
    if (formData.image) {
      data.append('image', formData.image)
    }

    try {
      const response = await fetch('https://ecommerce-panel-backend.onrender.com/api/deals', {
        method: currentDeal ? 'PUT' : 'POST',
        body: data
      })
      if (response.ok) {
        fetchDeals()
        resetForm()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleEdit = (deal) => {
    setCurrentDeal(deal)
    setFormData({
      text: deal.text,
      details: deal.details,
      dateLimit: deal.dateLimit.split('T')[0],
      image: null
    })
    setEditMode(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this deal?')) {
      try {
        const response = await fetch(`https://ecommerce-panel-backend.onrender.com/api/deals/${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          fetchDeals()
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  const fetchDeals = async () => {
    try {
      const response = await fetch('https://ecommerce-panel-backend.onrender.com/api/deals')
      if (response.ok) {
        const data = await response.json()
        setEntries(data)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const resetForm = () => {
    setFormData({
      text: '',
      details: '',
      dateLimit: '',
      image: null
    })
    setEditMode(false)
    setCurrentDeal(null)
  }

  return (
    <div className="p-6">
      {editMode ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {currentDeal ? 'Edit Deal' : 'Create New Deal'}
            </h2>
            <button
              onClick={resetForm}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Back
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">Text*</label>
              <input
                type="text"
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                required
                className="w-full p-2 border rounded"
                placeholder="CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT"
              />
            </div>

            <div>
              <label className="block mb-2">Details*</label>
              <textarea
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                required
                className="w-full p-2 border rounded min-h-[100px]"
              />
            </div>

            <div>
              <label className="block mb-2">Date Limit*</label>
              <input
                type="date"
                value={formData.dateLimit}
                onChange={(e) => setFormData({...formData, dateLimit: e.target.value})}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Featured Image *</label>
              {currentDeal?.image && (
                <img
                  src={currentDeal.image}
                  alt="Current"
                  className="max-w-md mb-4 rounded"
                />
              )}
              <p className="text-sm text-gray-500 mb-2">
                Prefered Size: (600x770) or Square Sized Image
              </p>
              <input
                type="file"
                onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                accept="image/*"
                className="w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {currentDeal ? 'Update Deal' : 'Create Deal'}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Deal of the Day</h2>
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add New Deal
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Image</th>
                  <th className="border p-2 text-left">Text</th>
                  <th className="border p-2 text-left">Details</th>
                  <th className="border p-2 text-left">Date Limit</th>
                  <th className="border p-2 text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <img
                        src={entry.image}
                        alt="Deal"
                        className="w-24 h-24 object-cover rounded"
                      />
                    </td>
                    <td className="p-2">{entry.text}</td>
                    <td className="p-2">{entry.details}</td>
                    <td className="p-2">
                      {new Date(entry.dateLimit).toLocaleDateString()}
                    </td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(entry)}
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

