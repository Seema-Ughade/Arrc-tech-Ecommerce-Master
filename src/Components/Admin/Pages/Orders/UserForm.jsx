// import React, { useState, useEffect } from 'react';

// const UserForm = ({ users, onUserSelect, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     country: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     paymentMethod: 'Credit Card'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleUserChange = (e) => {
//     const selectedUser = users.find(user => user._id === e.target.value);
//     onUserSelect(selectedUser);
//     if (selectedUser) {
//       setFormData({
//         name: selectedUser.name,
//         email: selectedUser.email,
//         phone: selectedUser.phone,
//         address: selectedUser.address,
//         country: selectedUser.country,
//         city: selectedUser.city,
//         state: selectedUser.state,
//         postalCode: selectedUser.postalCode,
//         paymentMethod: 'Credit Card'
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-6">User Details</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label htmlFor="user" className="block text-sm font-medium text-gray-700">User *</label>
//           <select
//             id="user"
//             name="user"
//             required
//             onChange={handleUserChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           >
//             <option value="">Select User</option>
//             {users.map((user) => (
//               <option key={user._id} value={user._id}>
//                 {user.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
//             <input
//               type="text"
//               name="phone"
//               id="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
//             <input
//               type="text"
//               name="address"
//               id="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country *</label>
//             <input
//               type="text"
//               name="country"
//               id="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//             <input
//               type="text"
//               name="city"
//               id="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
//             <input
//               type="text"
//               name="state"
//               id="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
//             <input
//               type="text"
//               name="postalCode"
//               id="postalCode"
//               value={formData.postalCode}
//               onChange={handleChange}
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method *</label>
//           <select
//             name="paymentMethod"
//             id="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           >
//             <option value="Credit Card">Credit Card</option>
//             <option value="PayPal">PayPal</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//           </select>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserForm;


import React, { useState, useEffect } from 'react';

const UserForm = ({ users, onUserSelect, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: 'Credit Card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserChange = (e) => {
    const selectedUser = users.find((user) => user._id === e.target.value);
    onUserSelect(selectedUser);
    if (selectedUser) {
      setFormData({
        name: selectedUser.name,
        email: selectedUser.email,
        phone: selectedUser.phone,
        address: selectedUser.address,
        country: selectedUser.country,
        city: selectedUser.city,
        state: selectedUser.state,
        postalCode: selectedUser.postalCode,
        paymentMethod: 'Credit Card',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">User Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Select Dropdown */}
        <div>
          <label htmlFor="user" className="block text-sm font-medium text-gray-700">Select User *</label>
          <select
            id="user"
            name="user"
            required
            onChange={handleUserChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        {/* User Info Inputs */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country *</label>
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Payment Method Dropdown */}
        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method *</label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
