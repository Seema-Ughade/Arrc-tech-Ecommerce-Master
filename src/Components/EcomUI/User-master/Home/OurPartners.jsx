// import React from "react";
// import logo1 from "../Assets/logo1.jpg";
// import logo2 from "../Assets/logo2.jpg";
// import logo3 from "../Assets/logo3.jpg";
// import logo4 from "../Assets/logo4.jpg";
// import logo5 from "../Assets/logo5.jpg";
// import logo6 from "../Assets/logo6.jpg";
// import logo7 from "../Assets/logo7.jpg";
// import logo8 from "../Assets/logo8.jpg";
// import logo9 from "../Assets/logo9.jpg";
// import logo10 from "../Assets/logo10.jpg";
// import logo11 from "../Assets/logo11.jpg";
// import logo12 from "../Assets/logo12.jpg";

// const ourpartner = () => {
//   return (
//     <div className="home7">
//       <div className="logos flex flex-col items-center text-center p-5 gap-4">
//         <strong className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
//           OUR PARTNERS
//         </strong>
//         <p className="text-sm sm:text-base md:text-lg lg:text-base max-w-2xl">
//           Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
//           excepteur voluptate velit ipsum esse  enim Cillum eu id enim aliquip aute ullamco.
//         </p>
//         {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
//           enim Cillum eu id enim aliquip aute ullamco.
//         </p> */}
//       </div>

//       <div className="logoimg">
//         <div>
//           <img src={logo1} alt="Logo 1" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo2} alt="Logo 2" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo3} alt="Logo 3" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo4} alt="Logo 4" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo5} alt="Logo 5" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo6} alt="Logo 6" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo7} alt="Logo 7" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo8} alt="Logo 8" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo9} alt="Logo 9" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo10} alt="Logo 10" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo11} alt="Logo 11" className="logoimage" />
//         </div>
//         <div>
//           <img src={logo12} alt="Logo 12" className="logoimage" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ourpartner;

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const OurPartner = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/partners');
        setPartners(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Error fetching partners. Please try again.');
        console.error('Error fetching partners:', error);
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            OUR PARTNERS
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate velit 
            ipsum esse enim Cillum eu id enim aliquip aute ullamco.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <div 
                key={partner._id} 
                className="bg-white border border-gray-200 rounded-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name || 'Partner logo'}
                  className="max-w-full h-12 object-contain transition-all duration-300"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No partners available at the moment.
            </div>
          )}
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default OurPartner;

