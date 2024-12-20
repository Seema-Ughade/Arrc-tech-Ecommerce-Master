// import React, { useState } from 'react';
// import axios from 'axios';
// import mainlogo from '../../../../assets/mainlogo.png';

// const FaviconUpload = () => {
//   const [favicon, setFavicon] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFavicon(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('favicon', favicon);

//     try {
//       const response = await axios.post('https://ecommerce-panel-backend.onrender.com/admin/general-settings/update/all', formData);
//       setSuccessMessage('Favicon uploaded successfully!');
//       setErrorMessage('');
//       console.log(response.data);
//     } catch (error) {
//       setErrorMessage('Error uploading favicon. Please try again.');
//       setSuccessMessage('');
//       console.error('Upload error:', error);
//     }
//   };

//   return (
//     <div className="add-logo-area" style={{ padding: '30px', background: '#fff', textAlign: 'center' }}>
//       <div className="gocover" ></div>
//       <div className="row justify-content-center">
//         <div className="col-lg-6">
//           {successMessage && (
//             <div className="alert alert-success alert-dismissible validation">
//               <button type="button" className="close alert-close" onClick={() => setSuccessMessage('')}>×</button>
//               <p className="text-left">{successMessage}</p>
//             </div>
//           )}
//           {errorMessage && (
//             <div className="alert alert-danger alert-dismissible validation">
//               <button type="button" className="close alert-close" onClick={() => setErrorMessage('')}>×</button>
//               <ul className="text-left">
//                 <li>{errorMessage}</li>
//               </ul>
//             </div>
//           )}
          
//           <form className="" onSubmit={handleSubmit} >
//             <div className="current-logo flex justify-center items-center">
//               <h4 className="title">Current Favicon :</h4>
//               <img src={mainlogo} alt="Current Favicon"  className='max-w-60 h-auto   '/>
//             </div>
//             <div className="set-logo">
//               <h4 className="title">Set New Favicon :</h4>
//               <input className="img-upload1" type="file" name="favicon" onChange={handleFileChange} />
//             </div>
//             <div className="">
//               <button type="submit" className="submit-btn">Save</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaviconUpload;
import React from 'react';

const FaviconUpload = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md">
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-semibold text-gray-700">Website Favicon</h1>
          <p className="text-sm text-gray-500 mt-1">Dashboard &gt; General Settings &gt; Website Favicon</p>
        </div>
        <div className="px-6 py-8">
          <div className="mb-6">
            <p className="text-gray-700 mb-4">Current Favicon:</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full border">
                {/* Replace with actual favicon */}
                <span className="text-lg font-bold text-red-500">G</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Set New Favicon:</label>
            <div className="flex items-center">
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end px-6 py-4 border-t">
          <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaviconUpload;
