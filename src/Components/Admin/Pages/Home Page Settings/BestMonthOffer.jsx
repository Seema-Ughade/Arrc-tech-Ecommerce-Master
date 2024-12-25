// import { useState } from 'react'

// export default function BestMonthOffer() {
//   const [entries, setEntries] = useState([])
//   const [search, setSearch] = useState('')
//   const [editMode, setEditMode] = useState(false)
//   const [currentOffer, setCurrentOffer] = useState(null)
//   const [url, setUrl] = useState('')
//   const [image, setImage] = useState(null)

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append('url', url)
//     if (image) {
//       formData.append('image', image)
//     }

//     try {
//       const endpoint = currentOffer
//       ? `https://ecommerce-panel-backend.onrender.com/api/offers/${currentOffer._id}` // PUT for update
//       : 'https://ecommerce-panel-backend.onrender.com/api/offers' // POST for create

//     const response = await fetch(endpoint, {
//       method: currentOffer ? 'PUT' : 'POST',
//       body: formData
//     })
//       if (response.ok) {
//         // Refresh entries
//         fetchEntries()
//         // Reset form
//         setUrl('')
//         setImage(null)
//         setEditMode(false)
//         setCurrentOffer(null)
//       }
//     } catch (error) {
//       console.error('Error:', error)
//     }
//   }

//   // Handle edit button click
//   const handleEdit = (offer) => {
//     setCurrentOffer(offer)
//     setUrl(offer.url)
//     setEditMode(true)
//   }

//   // Handle delete
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this offer?')) {
//       try {
//         const response = await fetch(`https://ecommerce-panel-backend.onrender.com/api/offers/${id}`, {
//           method: 'DELETE'
//         })
//         if (response.ok) {
//           fetchEntries()
//         }
//       } catch (error) {
//         console.error('Error:', error)
//       }
//     }
//   }

//   // Fetch entries
//   const fetchEntries = async () => {
//     try {
//       const response = await fetch('https://ecommerce-panel-backend.onrender.com/api/offers')
//       if (response.ok) {
//         const data = await response.json()
//         setEntries(data)
//       }
//     } catch (error) {
//       console.error('Error:', error)
//     }
//   }

//   return (
//     <div className="p-6">
//       {editMode ? (
//         // Edit/Create Form
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-6">
//             {currentOffer ? 'Edit Offer' : 'Create New Offer'}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block mb-2">URL *</label>
//               <input
//                 type="url"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Featured Image *</label>
//               {currentOffer?.image && (
//                 <img
//                   src={currentOffer.image}
//                   alt="Current"
//                   className="max-w-md mb-4 rounded"
//                 />
//               )}
//               <p className="text-sm text-gray-500 mb-2">
//                 Prefered Size: (600x770) or Square Sized Image
//               </p>
//               <input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 accept="image/*"
//                 className="w-full"
//               />
//             </div>

//             <div className="flex gap-2">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 {currentOffer ? 'Update' : 'Create'}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setEditMode(false)
//                   setCurrentOffer(null)
//                   setUrl('')
//                   setImage(null)
//                 }}
//                 className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         // Table View
//         <div>
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex items-center gap-2">
//               <span>Show</span>
//               <select className="border rounded p-1">
//                 <option>10</option>
//                 <option>25</option>
//                 <option>50</option>
//               </select>
//               <span>entries</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>Search:</span>
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="border rounded p-1"
//               />
//             </div>
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Add New Offer
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border p-2 text-left">Image</th>
//                   <th className="border p-2 text-left">URL</th>
//                   <th className="border p-2 text-left">Options</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {entries.map((entry, index) => (
//                   <tr key={index} className="border-b">
//                     <td className="p-2">
//                       <img
//                         src={entry.image}
//                         alt="Offer"
//                         className="w-24 h-24 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <a href={entry.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                         {entry.url}
//                       </a>
//                     </td>
//                     <td className="p-2">
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => handleEdit(entry)}
//                           className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(entry._id)}
//                           className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



import { useState, useEffect } from 'react'

export default function BestMonthOffer() {
  const [entries, setEntries] = useState([])
  const [search, setSearch] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [currentOffer, setCurrentOffer] = useState(null)
  const [url, setUrl] = useState('')
  const [image, setImage] = useState(null)

  // Fetch entries on component mount
  useEffect(() => {
    fetchEntries()
  }, [])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('url', url)
    if (image) {
      formData.append('image', image)
    }

    try {
      const endpoint = currentOffer
        ? `https://ecommerce-panel-backend.onrender.com/api/offers/${currentOffer._id}` // PUT for update
        : 'https://ecommerce-panel-backend.onrender.com/api/offers' // POST for create

      const response = await fetch(endpoint, {
        method: currentOffer ? 'PUT' : 'POST',
        body: formData
      })
      if (response.ok) {
        // Refresh entries
        fetchEntries()
        // Reset form
        setUrl('')
        setImage(null)
        setEditMode(false)
        setCurrentOffer(null)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // Handle edit button click
  const handleEdit = (offer) => {
    setCurrentOffer(offer)
    setUrl(offer.url)
    setEditMode(true)
  }

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      try {
        const response = await fetch(`https://ecommerce-panel-backend.onrender.com/api/offers/${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          fetchEntries()
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  // Fetch entries
  const fetchEntries = async () => {
    try {
      const response = await fetch('https://ecommerce-panel-backend.onrender.com/api/offers')
      if (response.ok) {
        const data = await response.json()
        setEntries(data)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="p-6">
      {editMode ? (
        // Edit/Create Form
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            {currentOffer ? 'Edit Offer' : 'Create New Offer'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">URL *</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Featured Image *</label>
              {currentOffer?.image && (
                <img
                  src={currentOffer.image}
                  alt="Current"
                  className="max-w-md mb-4 rounded"
                />
              )}
              <p className="text-sm text-gray-500 mb-2">
                Preferred Size: (600x770) or Square Sized Image
              </p>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                className="w-full"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {currentOffer ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditMode(false)
                  setCurrentOffer(null)
                  setUrl('')
                  setImage(null)
                }}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Table View
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border rounded p-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded p-1"
              />
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add New Offer
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Image</th>
                  <th className="border p-2 text-left">URL</th>
                  <th className="border p-2 text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <img
                        src={entry.image}
                        alt="Offer"
                        className="w-24 h-24 object-cover rounded"
                      />
                    </td>
                    <td className="p-2">
                      <a
                        href={entry.url}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {entry.url}
                      </a>
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
