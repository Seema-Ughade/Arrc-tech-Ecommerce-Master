import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { EditOutlined } from '@ant-design/icons';
import { TrashIcon } from '@heroicons/react/24/solid';

const BestMonthOffer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOffer, setNewOffer] = useState({
    link: '',
    image: null,
  });
  const [editingOfferId, setEditingOfferId] = useState(null);
  const [offers, setOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers');
        setOffers(response.data);
      } catch (error) {
        toast.error('Error fetching best month offers. Please try again.');
        console.error('Error fetching offers:', error);
      }
    };
    fetchOffers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewOffer((prevOffer) => ({ ...prevOffer, image: e.target.files[0] }));
  };

  const handleUpdateOffer = async () => {
    const formData = new FormData();
    formData.append('link', newOffer.link);
    if (newOffer.image) {
      formData.append('image', newOffer.image);
    }

    try {
      const response = await axios.put(
        `https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers/${editingOfferId}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setOffers((prevOffers) =>
        prevOffers.map((offer) => (offer._id === editingOfferId ? response.data : offer))
      );
      setEditingOfferId(null);
      toast.success('Best Month Offer updated successfully!');
    } catch (error) {
      toast.error('Error updating best month offer. Please try again.');
      console.error('Error updating offer:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingOfferId) {
      await handleUpdateOffer();
    } else {
      const formData = new FormData();
      formData.append('link', newOffer.link);
      if (newOffer.image) {
        formData.append('image', newOffer.image);
      }

      try {
        const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setOffers((prev) => [...prev, response.data]);
        setNewOffer({ link: '', image: null });
        setIsModalOpen(false);
        toast.success('Best Month Offer created successfully!');
      } catch (error) {
        toast.error('Error creating best month offer. Please try again.');
        console.error('Error creating offer:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ecommerce-panel-backend.onrender.com/api/bestMonthOffers/${id}`);
      setOffers(offers.filter((offer) => offer._id !== id));
      toast.success('Best Month Offer deleted successfully!');
    } catch (error) {
      toast.error('Error deleting best month offer. Please try again.');
      console.error('Error deleting offer:', error);
    }
  };

  const filteredOffers = offers.filter((offer) =>
    offer.link.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="content-area">
        <h4 className="heading text-violet-600 text-2xl font-semibold mb-4">Best Month Offers</h4>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              setIsModalOpen(true);
              setEditingOfferId(null);
            }}
            className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none"
          >
            + Add New Best Month Offer
          </button>
        </div>

        {/* Best Month Offers Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="bg-teal-400 text-white font-mono">
                <th className="py-2 px-4 border">Featured Image</th>
                <th className="py-2 px-4 border">Link</th>
                <th className="py-2 px-4 border">Options</th>
              </tr>
            </thead>
            <tbody className="bg-white border divide-gray-200">
              {filteredOffers.map((offer) => (
                <tr key={offer._id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border flex justify-center items-center">
                    {offer.image ? <img src={offer.image} alt="Best Month Offer" className="w-12 h-12 rounded" /> : '-'}
                  </td>
                  <td className="px-6 py-4 border text-center">{offer.link}</td>
                  <td className="py-2 flex justify-center px-4">
                    <button
                      onClick={() => {
                        setEditingOfferId(offer._id);
                        setNewOffer({ link: offer.link, image: null });
                        setIsModalOpen(true);
                      }}
                      className="flex items-center rounded-2xl text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                    >
                      <EditOutlined className="h-5 w-5 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(offer._id)}
                      className="flex items-center rounded-2xl text-white bg-red-600 hover:bg-red-700 ml-2 px-3 py-1 focus:outline-none transition ease-in-out duration-200"
                    >
                      <TrashIcon className="h-5 w-5 mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Offer Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">{editingOfferId ? 'Edit Best Month Offer' : 'Add New Best Month Offer'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="link">Link *</label>
                  <input
                    type="text"
                    id="link"
                    name="link"
                    value={newOffer.link}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Link"
                    className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Set Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {editingOfferId ? 'Update Best Month Offer' : 'Add Best Month Offer'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default BestMonthOffer;
