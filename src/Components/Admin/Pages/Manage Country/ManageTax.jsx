// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function ManageTax() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [entriesCount, setEntriesCount] = useState(10)
//   const [countries] = useState([
//     { name: 'Pakistan', tax: 0 },
//     { name: 'Nepal', tax: 0 },
//     { name: 'India', tax: 0 },
//     { name: 'Belarus', tax: 0 },
//     { name: 'Bangladesh', tax: 5 },
//     { name: 'Austria', tax: 0 },
//     { name: 'Australia', tax: 0 },
//     { name: 'Algeria', tax: 0 }
//   ])

//   const navigate = useNavigate()

//   const filteredCountries = countries.filter(country =>
//     country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold mb-2">Manage Country</h1>
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex justify-between mb-4">
//           {/* <div className="flex items-center"> */}
//             {/* <span>Show</span>
//             <select
//               className="mx-2 border rounded px-2 py-1"
//               value={entriesCount}
//               onChange={(e) => setEntriesCount(Number(e.target.value))}
//             >
//               <option value={10}>10</option>
//               <option value={25}>25</option>
//               <option value={50}>50</option>
//             </select>
//             <span>entries</span>
//           </div> */}
//           <div className="flex items-center">
//             <span className="mr-2">Search:</span>
//             <input
//               type="text"
//               className="border rounded px-2 py-1"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="text-left py-2">Country Name</th>
//               <th className="text-left py-2">Tax</th>
//               <th className="text-left py-2">Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCountries.slice(0, entriesCount).map((country) => (
//               <tr key={country.name} className="border-b">
//                 <td className="py-2">{country.name}</td>
//                 <td className="py-2">{country.tax} (%)</td>
//                 <td className="py-2">
//                   <button
//                     onClick={() => navigate(`/tax/country`)}
//                     className="bg-teal-400 text-white px-4 py-1 rounded"
//                   >
//                     Set Tax
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TrashIcon } from '@heroicons/react/24/solid';
import { EditOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function ManageTax() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(results);
    setCurrentPage(1);
  }, [searchTerm, countries]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/countries');
      setCountries(response.data);
      setFilteredCountries(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch countries');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/countries/${id}`);
      setCountries(countries.filter((country) => country._id !== id));
      toast.success('Country deleted successfully!');
    } catch (error) {
      console.error('Error deleting country:', error);
      toast.error('Error deleting country. Please try again.');
    }
  };

  const handleCountryStatusChange = async (countryId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/countries/${countryId}/status`, { status: newStatus });
      setCountries(prev =>
        prev.map(country => (country._id === countryId ? { ...country, status: newStatus } : country))
      );
      toast.success('Country status updated successfully!');
    } catch (error) {
      toast.error('Error updating country status. Please try again.');
    }
  };

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const currentCountries = filteredCountries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (page) => setCurrentPage(page);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Manage Country Tax</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search country..."
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-teal-400 text-white">
                <th className="text-left py-3 px-4 font-semibold">Country Name</th>
                <th className="text-left py-3 px-4 font-semibold">Tax</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Options</th>
              </tr>
            </thead>
            <tbody>
              {currentCountries.map((country) => (
                <tr key={country._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{country.name}</td>
                  <td className="py-3 px-4">{country.tax}%</td>
                  <td className="py-3 px-4">
                    <select
                      value={country.status}
                      onChange={(e) => handleCountryStatusChange(country._id, e.target.value)}
                      className="border rounded px-2 py-1"
                      style={{
                        backgroundColor: country.status === "active" ? "#1e7e34" : "#bd2130",
                        color: "white",
                      }}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => navigate(`/tax/country/${country._id}`)}
                        className="flex items-center rounded-md bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 transition duration-300"
                      >
                        <EditOutlined className="mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(country._id)}
                        className="flex items-center rounded-md bg-red-600 text-white px-3 py-1 hover:bg-red-700 transition duration-300"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Delete
                      </button>
                      <button
                        onClick={() => navigate(`/states/${country._id}`)}
                        className="flex items-center rounded-md bg-purple-600 text-white px-3 py-1 hover:bg-purple-700 transition duration-300"
                      >
                        <EnvironmentOutlined className="mr-1" />
                        Manage States
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4">
          <span>{`Showing ${currentPage * itemsPerPage - itemsPerPage + 1} to ${Math.min(currentPage * itemsPerPage, filteredCountries.length)} of ${filteredCountries.length} entries`}</span>
          <div>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="btn px-4 py-1 rounded border focus:outline-none"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`btn px-4 py-1 rounded border mx-1 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="btn px-4 py-1 rounded border focus:outline-none"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
