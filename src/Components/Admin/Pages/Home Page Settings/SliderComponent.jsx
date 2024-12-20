// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { EditOutlined } from '@ant-design/icons';
// import { TrashIcon } from '@heroicons/react/24/solid';

// const SliderComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newSlider, setNewSlider] = useState({
//     name: '',
//     slug: '',
//     image: null,
//   });
//   const [editingSliderId, setEditingSliderId] = useState(null);
//   const [sliders, setSliders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Change this number based on your needs

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/sliders');
//         setSliders(response.data);
//       } catch (error) {
//         toast.error('Error fetching sliders. Please try again.');
//         console.error('Error fetching sliders:', error);
//       }
//     };
//     fetchSliders();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSlider((prevSlider) => ({ ...prevSlider, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setNewSlider((prevSlider) => ({ ...prevSlider, image: e.target.files[0] }));
//   };

//   const handleUpdateSlider = async () => {
//     const formData = new FormData();
//     formData.append('name', newSlider.name);
//     formData.append('slug', newSlider.slug);
//     if (newSlider.image) {
//       formData.append('image', newSlider.image);
//     }

//     try {
//       const response = await axios.put(
//         `https://ecommerce-panel-backend.onrender.com/api/sliders/₹{editingSliderId}`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       setSliders((prevSliders) =>
//         prevSliders.map((slider) => (slider.id === editingSliderId ? response.data : slider))
//       );
//       setEditingSliderId(null);
//       toast.success('Slider updated successfully!');
//     } catch (error) {
//       toast.error('Error updating slider. Please try again.');
//       console.error('Error updating slider:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editingSliderId) {
//       await handleUpdateSlider();
//     } else {
//       const formData = new FormData();
//       formData.append('name', newSlider.name);
//       formData.append('slug', newSlider.slug);
//       if (newSlider.image) {
//         formData.append('image', newSlider.image);
//       }

//       try {
//         const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/sliders', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         setSliders((prev) => [...prev, response.data]);
//         setNewSlider({ name: '', slug: '', image: null });
//         setIsModalOpen(false);
//         toast.success('Slider created successfully!');
//       } catch (error) {
//         toast.error('Error creating slider. Please try again.');
//         console.error('Error creating slider:', error);
//       }
//     }
//   };
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://ecommerce-panel-backend.onrender.com/api/sliders/₹{id}`);
//       setSliders(sliders.filter(slider => slider._id !== id)); // Use _id for filtering
//       toast.success('Slider deleted successfully!');
//     } catch (error) {
//       toast.error('Error deleting slider. Please try again.');
//       console.error('Error deleting slider:', error);
//     }
//   };

//   const filteredSliders = sliders.filter((slider) =>
//     slider.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredSliders.length / itemsPerPage);
//   const currentSliders = filteredSliders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <>
//       <div className="content-area ">
//         <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">Sliders</h4>
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
//               setEditingSliderId(null);
//             }}
//             className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none"
//           >
//             + Add New Slider
//           </button>
//         </div>

//         {/* Slider Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//             <tr className="bg-teal-400 text-white font-mono">
//                 <th className="py-2 px-4 border  ">Featured Image</th>
//                 <th className="py-2 px-4 border  ">Title</th>
//                 <th className="py-2 px-4 border ">Options</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white  border  divide-gray-200">
//               {currentSliders.map((slider) => (
//                 <tr key={slider.id} className='hover:bg-gray-100'>
//                   <td className="px-6 py-4 border flex justify-center items-center =">
//                   {slider.image ? <img src={slider.image} alt={slider.name} className="w-12 h-12 rounded" /> : '-'}

//                     {/* <img src={slider.imageUrl} alt={slider.name} className="h-16 w-32 object-cover" /> */}
//                   </td>
//                   <td className="px-6 py-4 border text-center  ">{slider.name}</td>
//                   <td className="py-2 flex   justify-center px-4 ">
//                   <button
//                       onClick={() => {
//                         setEditingSliderId(slider.id);
//                         setNewSlider({ name: slider.name, slug: slider.slug, image: null }); // Populate the form with existing data
//                         setIsModalOpen(true);
//                       }}
//                       className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200">
//                       <EditOutlined className="h-5 w-5 mr-1" />
                      
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(slider._id)}
//                       className="flex items-center rounded-2xl text-white bg-red-600 hover:bg-red-700 ml-2 px-3 py-1 focus:outline-none transition ease-in-out duration-200">
//                       <TrashIcon className="h-5 w-5 mr-1" />
                      
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add New Slider Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//               <h2 className="text-xl font-semibold mb-4">{editingSliderId ? 'Edit Slider' : 'Add New Slider'}</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={newSlider.name}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Name"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="slug">Slug *</label>
//                   <input
//                     type="text"
//                     id="slug"
//                     name="slug"
//                     value={newSlider.slug}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Slug"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1">Set Image *</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="border rounded px-4 py-2 w-full focus:outline-none"
//                     required
//                   />
//                   <p className="text-xs text-gray-500 mt-1">Preferred Size: (1230x267) or Square Sized Image</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
//                   >
//                     {editingSliderId ? 'Update Slider' : 'Create Slider'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
//     </>
//   );
// };

// export default SliderComponent;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditOutlined } from '@ant-design/icons';
import { TrashIcon } from '@heroicons/react/24/solid';
import {
  fetchSliders,
  addSlider,
  updateSlider,
  deleteSlider
} from '../../../../redux/actions/sliderActions';
import {
  filterSliders,
  setCurrentPage,
  clearError,
  clearMessage
} from '../../../../redux/reducers/sliderReducer';
const SliderComponent = () => {
  const dispatch = useDispatch();
  const {
    loading = false,
    sliders = [],
    filteredSliders = [],
    currentPage = 1,
    itemsPerPage = 10,
    message = null,
    error = null
  } = useSelector(state => state.slider || {});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSlider, setNewSlider] = useState({
    name: '',
    slug: '',
    image: null,
  });
  const [editingSliderId, setEditingSliderId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSlider(prevSlider => ({ ...prevSlider, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewSlider(prevSlider => ({ ...prevSlider, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSliderId) {
        await dispatch(updateSlider(editingSliderId, newSlider));
      } else {
        await dispatch(addSlider(newSlider));
      }
      setIsModalOpen(false);
      setNewSlider({ name: '', slug: '', image: null });
      setEditingSliderId(null);
      dispatch(fetchSliders()); // Refresh the sliders list
    } catch (err) {
      toast.error('An error occurred while saving the slider. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteSlider(id));
      dispatch(fetchSliders()); // Refresh the sliders list
    } catch (err) {
      toast.error('An error occurred while deleting the slider. Please try again.');
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    dispatch(filterSliders(searchTerm));
  };

  const totalPages = Math.ceil((filteredSliders.length || sliders.length) / itemsPerPage);
  const currentSliders = (filteredSliders.length ? filteredSliders : sliders).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div className="content-area">
        <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">Sliders</h4>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
              setEditingSliderId(null);
              setNewSlider({ name: '', slug: '', image: null });
            }}
            className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none"
          >
            + Add New Slider
          </button>
        </div>

        {/* Slider Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="bg-teal-400 text-white font-mono">
                <th className="py-2 px-4 border">Featured Image</th>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Slug</th>
                <th className="py-2 px-4 border">Options</th>
              </tr>
            </thead>
            <tbody className="bg-white border divide-gray-200">
              {currentSliders.map((slider) => (
                slider && slider._id ? (
                  <tr key={slider._id} className='hover:bg-gray-100'>
                    <td className="px-6 py-4 border flex justify-center items-center">
                      {slider.image ? (
                        <img src={slider.image} alt={slider.name} className="w-12 h-12 rounded object-cover" />
                      ) : (
                        <span className="text-gray-400">No image</span>
                      )}
                    </td>
                    <td className="px-6 py-4 border text-center">{slider.name || 'N/A'}</td>
                    <td className="px-6 py-4 border text-center">{slider.slug || 'N/A'}</td>
                    <td className="py-2 flex justify-center px-4">
                      <button
                        onClick={() => {
                          setEditingSliderId(slider._id);
                          setNewSlider({ 
                            name: slider.name || '', 
                            slug: slider.slug || '', 
                            image: null 
                          });
                          setIsModalOpen(true);
                        }}
                        className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                      >
                        <EditOutlined className="h-5 w-5 mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(slider._id)}
                        className="flex items-center rounded-2xl text-white bg-red-600 hover:bg-red-700 ml-2 px-3 py-1 focus:outline-none transition ease-in-out duration-200"
                      >
                        <TrashIcon className="h-5 w-5 mr-1" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ) : null
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => dispatch(setCurrentPage(i + 1))}
              className={`mx-1 px-3 py-1 rounded ₹{
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Add/Edit Slider Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">{editingSliderId ? 'Edit Slider' : 'Add New Slider'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newSlider.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Name"
                    className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="slug">Slug *</label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={newSlider.slug}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Slug"
                    className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Set Image {editingSliderId ? '' : '*'}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded px-4 py-2 w-full focus:outline-none"
                    required={!editingSliderId}
                  />
                  <p className="text-xs text-gray-500 mt-1">Preferred Size: (1230x267) or Square Sized Image</p>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : (editingSliderId ? 'Update Slider' : 'Create Slider')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </>
  );
};

export default SliderComponent;
































// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { EditOutlined } from '@ant-design/icons';
// import { TrashIcon } from '@heroicons/react/24/solid';

// const SliderComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newSlider, setNewSlider] = useState({
//     name: '',
//     slug: '',
//     subTitle: '',
//     title: '',
//     description: '',
//     subTitleColor: '#000000',
//     titleColor: '#000000',
//     descriptionColor: '#000000',
//     image: null,
//     link: '',
//   });
//   const [editingSliderId, setEditingSliderId] = useState(null);
//   const [sliders, setSliders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/sliders');
//         setSliders(response.data);
//       } catch (error) {
//         toast.error('Error fetching sliders. Please try again.');
//         console.error('Error fetching sliders:', error);
//       }
//     };
//     fetchSliders();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSlider((prevSlider) => ({ ...prevSlider, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setNewSlider((prevSlider) => ({ ...prevSlider, image: e.target.files[0] }));
//   };

//   const handleUpdateSlider = async () => {
//     const formData = new FormData();
//     Object.keys(newSlider).forEach(key => {
//       if (key !== 'image') {
//         formData.append(key, newSlider[key]);
//       }
//     });
//     if (newSlider.image) {
//       formData.append('image', newSlider.image);
//     }

//     try {
//       const response = await axios.put(
//         `https://ecommerce-panel-backend.onrender.com/api/sliders/₹{editingSliderId}`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       setSliders((prevSliders) =>
//         prevSliders.map((slider) => (slider._id === editingSliderId ? response.data : slider))
//       );
//       setEditingSliderId(null);
//       setIsModalOpen(false);
//       toast.success('Slider updated successfully!');
//     } catch (error) {
//       toast.error('Error updating slider. Please try again.');
//       console.error('Error updating slider:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editingSliderId) {
//       await handleUpdateSlider();
//     } else {
//       const formData = new FormData();
//       Object.keys(newSlider).forEach(key => {
//         if (key !== 'image') {
//           formData.append(key, newSlider[key]);
//         }
//       });
//       if (newSlider.image) {
//         formData.append('image', newSlider.image);
//       }

//       try {
//         const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/sliders', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         setSliders((prev) => [...prev, response.data]);
//         setNewSlider({
//           name: '',
//           slug: '',
//           subTitle: '',
//           title: '',
//           description: '',
//           subTitleColor: '#000000',
//           titleColor: '#000000',
//           descriptionColor: '#000000',
//           image: null,
//           link: '',
//         });
//         setIsModalOpen(false);
//         toast.success('Slider created successfully!');
//       } catch (error) {
//         toast.error('Error creating slider. Please try again.');
//         console.error('Error creating slider:', error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://ecommerce-panel-backend.onrender.com/api/sliders/₹{id}`);
//       setSliders(sliders.filter(slider => slider._id !== id));
//       toast.success('Slider deleted successfully!');
//     } catch (error) {
//       toast.error('Error deleting slider. Please try again.');
//       console.error('Error deleting slider:', error);
//     }
//   };

//   const filteredSliders = sliders.filter((slider) =>
//     slider.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredSliders.length / itemsPerPage);
//   const currentSliders = filteredSliders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <>
//       <div className="content-area">
//         <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">Sliders</h4>
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
//               setEditingSliderId(null);
//               setNewSlider({
//                 name: '',
//                 slug: '',
//                 subTitle: '',
//                 title: '',
//                 description: '',
//                 subTitleColor: '#000000',
//                 titleColor: '#000000',
//                 descriptionColor: '#000000',
//                 image: null,
//                 link: '',
//               });
//             }}
//             className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none"
//           >
//             + Add New Slider
//           </button>
//         </div>

//         {/* Slider Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr className="bg-teal-400 text-white font-mono">
//                 <th className="py-2 px-4 border">Featured Image</th>
//                 <th className="py-2 px-4 border">Name</th>
//                 <th className="py-2 px-4 border">Slug</th>
//                 <th className="py-2 px-4 border">Sub Title</th>
//                 <th className="py-2 px-4 border">Title</th>
//                 <th className="py-2 px-4 border">Description</th>
//                 <th className="py-2 px-4 border">Link</th>
//                 <th className="py-2 px-4 border">Created At</th>
//                 <th className="py-2 px-4 border">Options</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white border divide-gray-200">
//               {currentSliders.map((slider) => (
//                 <tr key={slider._id} className='hover:bg-gray-100'>
//                   <td className="px-6 py-4 border flex justify-center items-center">
//                     {slider.image ? <img src={slider.image} alt={slider.name} className="w-12 h-12 rounded" /> : '-'}
//                   </td>
//                   <td className="px-6 py-4 border text-center">{slider.name}</td>
//                   <td className="px-6 py-4 border text-center">{slider.slug}</td>
//                   <td className="px-6 py-4 border text-center">{slider.subTitle}</td>
//                   <td className="px-6 py-4 border text-center">{slider.title}</td>
//                   <td className="px-6 py-4 border text-center">{slider.description}</td>
//                   <td className="px-6 py-4 border text-center">
//                     <a href={slider.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                       Link
//                     </a>
//                   </td>
//                   <td className="px-6 py-4 border text-center">
//                     {new Date(slider.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="py-2 flex justify-center px-4">
//                     <button
//                       onClick={() => {
//                         setEditingSliderId(slider._id);
//                         setNewSlider({ ...slider, image: null });
//                         setIsModalOpen(true);
//                       }}
//                       className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
//                     >
//                       <EditOutlined className="h-5 w-5 mr-1" />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(slider._id)}
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

//         {/* Pagination */}
//         <div className="mt-4 flex justify-center">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`mx-1 px-3 py-1 rounded ₹{
//                 currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>

//         {/* Add/Edit Slider Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//               <h2 className="text-xl font-semibold mb-4">{editingSliderId ? 'Edit Slider' : 'Add New Slider'}</h2>
//               <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-3'>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={newSlider.name}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Name"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="slug">Slug *</label>
//                   <input
//                     type="text"
//                     id="slug"
//                     name="slug"
//                     value={newSlider.slug}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Slug"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="subTitle">Sub Title *</label>
//                   <input
//                     type="text"
//                     id="subTitle"
//                     name="subTitle"
//                     value={newSlider.subTitle}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Sub Title"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="title">Title *</label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={newSlider.title}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Title"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="description">Description *</label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={newSlider.description}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Description"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     rows="3"
//                   ></textarea>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="subTitleColor">Sub Title Color</label>
//                   <input
//                     type="color"
//                     id="subTitleColor"
//                     name="subTitleColor"
//                     value={newSlider.subTitleColor}
//                     onChange={handleInputChange}
//                     className="border rounded px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="titleColor">Title Color</label>
//                   <input
//                     type="color"
//                     id="titleColor"
//                     name="titleColor"
//                     value={newSlider.titleColor}
//                     onChange={handleInputChange}
//                     className="border rounded px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="descriptionColor">Description Color</label>
//                   <input
//                     type="color"
//                     id="descriptionColor"
//                     name="descriptionColor"
//                     value={newSlider.descriptionColor}
//                     onChange={handleInputChange}
//                     className="border rounded px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1">Set Image *</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="border rounded px-4 py-2 w-full focus:outline-none"
//                     required={!editingSliderId}
//                   />
//                   <p className="text-xs text-gray-500 mt-1">Preferred Size: (1920x800) or Square Sized Image</p>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium mb-1" htmlFor="link">Link *</label>
//                   <input
//                     type="url"
//                     id="link"
//                     name="link"
//                     value={newSlider.link}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter Link"
//                     className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
//                   >
//                     {editingSliderId ? 'Update Slider' : 'Create Slider'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
//     </>
//   );
// };

// export default SliderComponent;

