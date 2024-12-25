// import React from 'react';
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

// const Home7 = () => {
//   return (
//     <div className="home7">
//     <div className="logos">
//       <strong>OUR PARTNERS</strong>
//       <p>
//         Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
//         excepteur voluptate velit ipsum esse
//       </p>
//       <p>enim Cillum eu id enim aliquip aute ullamco.</p>
//     </div>

//     <div className="logoimg">
//       <div>
//         <img src={logo1} alt="Logo 1" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo2} alt="Logo 2" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo3} alt="Logo 3" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo4} alt="Logo 4" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo5} alt="Logo 5" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo6} alt="Logo 6" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo7} alt="Logo 7" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo8} alt="Logo 8" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo9} alt="Logo 9" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo10} alt="Logo 10" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo11} alt="Logo 11" className="logoimage" />
//       </div>
//       <div>
//         <img src={logo12} alt="Logo 12" className="logoimage" />
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Home7

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Home7 = () => {
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
      <div className="min-h-52 mt-4 bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="home7">
      <div className="logos text-center">
        <strong className="text-2xl font-bold">OUR PARTNERS</strong>
        <p className="text-gray-600 mt-2">
          Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
          excepteur voluptate velit ipsum esse.
        </p>
        <p className="text-gray-600">Enim Cillum eu id enim aliquip aute ullamco.</p>
      </div>

      <div className="logoimg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {partners.length > 0 ? (
          partners.map((partner) => (
            <div key={partner._id} className="logo-container flex justify-center items-center">
              <img
                src={partner.image || 'placeholder-image-url.jpg'}
                alt="Partner Logo"
                className="logoimage w-56 h-24 object-cover rounded shadow-md"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No partners available.</p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home7;
