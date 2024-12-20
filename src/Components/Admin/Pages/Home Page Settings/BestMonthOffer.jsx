// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { EditOutlined } from '@ant-design/icons';
// import { TrashIcon } from '@heroicons/react/24/solid';

// const BestMonthOffer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newOffer, setNewOffer] = useState({
//     link: '',
//     image: null,
//   });
//   const [editingOfferId, setEditingOfferId] = useState(null);
//   const [offers, setOffers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers');
//         setOffers(response.data);
//       } catch (error) {
//         toast.error('Error fetching best month offers. Please try again.');
//         console.error('Error fetching offers:', error);
//       }
//     };
//     fetchOffers();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setNewOffer((prevOffer) => ({ ...prevOffer, image: e.target.files[0] }));
//   };

//   const handleUpdateOffer = async () => {
//     const formData = new FormData();
//     formData.append('link', newOffer.link);
//     if (newOffer.image) {
//       formData.append('image', newOffer.image);
//     }

//     try {
//       const response = await axios.put(
//         `https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers/${editingOfferId}`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       setOffers((prevOffers) =>
//         prevOffers.map((offer) => (offer._id === editingOfferId ? response.data : offer))
//       );
//       setEditingOfferId(null);
//       toast.success('Best Month Offer updated successfully!');
//     } catch (error) {
//       toast.error('Error updating best month offer. Please try again.');
//       console.error('Error updating offer:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editingOfferId) {
//       await handleUpdateOffer();
//     } else {
//       const formData = new FormData();
//       formData.append('link', newOffer.link);
//       if (newOffer.image) {
//         formData.append('image', newOffer.image);
//       }

//       try {
//         const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         setOffers((prev) => [...prev, response.data]);
//         setNewOffer({ link: '', image: null });
//         setIsModalOpen(false);
//         toast.success('Best Month Offer created successfully!');
//       } catch (error) {
//         toast.error('Error creating best month offer. Please try again.');
//         console.error('Error creating offer:', error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers/${id}`);
//       setOffers(offers.filter((offer) => offer._id !== id));
//       toast.success('Best Month Offer deleted successfully!');
//     } catch (error) {
//       toast.error('Error deleting best month offer. Please try again.');
//       console.error('Error deleting offer:', error);
//     }
//   };

//   const filteredOffers = offers.filter((offer) =>
//     offer.link.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="content-area">
//         <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">Best Month Offers</h4>
//         <div className="flex justify-between mb-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={() => {
//               setIsModalOpen(true);
//               setEditingOfferId(null);
//             }}
//             className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none"
//           >
//             + Add New Best Month Offer
//           </button>
//         </div>

//         {/* Best Month Offers Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr className="bg-teal-400 text-white font-mono">
//                 <th className="py-2 px-4 border">Featured Image</th>
//                 <th className="py-2 px-4 border">Link</th>
//                 <th className="py-2 px-4 border">Options</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white border divide-gray-200">
//               {filteredOffers.map((offer) => (
//                 <tr key={offer._id} className="hover:bg-gray-100">
//                   <td className="px-6 py-4 border flex justify-center items-center">
//                     {offer.image ? <img src={offer.image} alt="Best Month Offer" className="w-12 h-12 rounded" /> : '-'}
//                   </td>
//                   <td className="px-6 py-4 border text-center">{offer.link}</td>
//                   <td className="py-2 flex justify-center px-4">
//                     <button
//                       onClick={() => {
//                         setEditingOfferId(offer._id);
//                         setNewOffer({ link: offer.link, image: null });
//                         setIsModalOpen(true);
//                       }}
//                       className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
//                     >
//                       <EditOutlined className="h-5 w-5 mr-1" />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(offer._id)}
//                       className="flex items-center rounded-2xl text-white bg-red-600 hover:bg-red-700 ml-2 px-3 py-1 focus:outline-none transition ease-in-out duration-200"
//                     >
//                       <TrashIcon className="h-5 w-5 mr-1" />
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add/Edit Offer Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//               <h2 className="text-xl font-semibold mb-4">{editingOfferId ? 'Edit Best Month Offer' : 'Add New Best Month Offer'}</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="link">Link *</label>
//                   <input
//                     type="text"
//                     id="link"
//                     name="link"
//                     value={newOffer.link}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Link"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1">Set Image *</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div className="flex justify-between mt-6">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     {editingOfferId ? 'Update Best Month Offer' : 'Add Best Month Offer'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default BestMonthOffer;
import React, { useState } from 'react';
import { ArrowLeft, Pencil, Trash2, Upload } from 'lucide-react';

const initialOffers = [
  { id: 1, image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155614Banner2png.png", url: "https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155614Banner2png.png" },
  { id: 2, image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155658Bannerpng.png", url:"https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155658Bannerpng.png" },
  { id: 3, image: "https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155635Banner3png.png", url: "https://demo.geniusocean.com/ecommerce-king1/assets/images/arrival/1724155635Banner3png.png" },
];

export default function BestMonthOffer() {
  const [offers, setOffers] = useState(initialOffers);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(null);

  const filteredOffers = offers.filter(offer => 
    offer.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (offer) => {
    setCurrentOffer(offer);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setOffers(offers.map(offer => 
      offer.id === currentOffer.id ? currentOffer : offer
    ));
    setEditMode(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentOffer({ ...currentOffer, image: reader.result });
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
            <h1 className="text-2xl font-bold">Edit Best Month Offer</h1>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span>Dashboard</span>
            <span className="mx-2">›</span>
            <span>Home Page Settings</span>
            <span className="mx-2">›</span>
            <span>Best Month Offer</span>
            <span className="mx-2">›</span>
            <span>Edit</span>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="max-w-2xl">
          <div className="mb-6">
            <label className="block mb-2">
              Url <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={currentOffer.url}
              onChange={(e) => setCurrentOffer({ ...currentOffer, url: e.target.value })}
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
                src={currentOffer.image}
                alt="Featured"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Prefered Size: (600x770) or Square Sized Image
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
            Update
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Best Month Offer</h1>
        {/* <div className="flex items-center text-sm text-gray-500 mt-2">
          <span>Dashboard</span>
          <span className="mx-2">›</span>
          <span>Home Page Settings</span>
          <span className="mx-2">›</span>
          <span>Best Month Offer</span>
        </div> */}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select 
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Search:</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4 border">Image</th>
              <th className="text-left p-4 border">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredOffers.map((offer) => (
              <tr key={offer.id} className="border-b">
                <td className="p-4">
                  <img 
                    src={offer.image} 
                    alt="Offer" 
                    className="w-24 h-24 object-cover rounded"
                  />
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(offer)}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(offer.id)}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>Showing 1 to {filteredOffers.length} of {filteredOffers.length} entries</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded disabled:opacity-50">Previous</button>
          <button className="px-3 py-1 bg-blue-900 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}

