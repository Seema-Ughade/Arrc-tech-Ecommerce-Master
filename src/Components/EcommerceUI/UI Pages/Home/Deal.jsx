// import React from 'react';
// import dealimg from "../Assets/deal imgpng.png";

// const Home6 = () => {
//   return (
//     <div className="mt-16 flex justify-center items-center bg-pink-50 relative">
//       <div className="flex flex-col lg:flex-row items-center gap-8 px-6 py-12 max-w-6xl w-full">
//         {/* Deal Text Section */}
//         <div className="text-center lg:text-left lg:w-1/2">
//           <strong className="text-3xl sm:text-4xl font-bold block mb-4">
//             DEAL<br />OF THE DAY
//           </strong>
//           <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
//             CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT
//           </h3>
//           <p className="text-gray-600 mb-2 text-sm sm:text-base">
//             Donec condimentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//           <p className="text-gray-600 mb-2 text-sm sm:text-base">
//             Cras cursus pretium sapien, in pulvinar ipsum molestie id. Aliquam erat volutpat.
//           </p>
//           <p className="text-gray-600 mb-6 text-sm sm:text-base">
//             Duis quam tellus, ullamcorper.....
//           </p>

//           <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 flex-wrap">
//             <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
//               <p className="text-xl sm:text-2xl font-bold">188</p>
//               <p className="text-xs sm:text-sm text-gray-600">DAY</p>
//             </div>
//             <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
//               <p className="text-xl sm:text-2xl font-bold">14</p>
//               <p className="text-xs sm:text-sm text-gray-600">HOUR</p>
//             </div>
//             <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
//               <p className="text-xl sm:text-2xl font-bold">50</p>
//               <p className="text-xs sm:text-sm text-gray-600">MIN</p>
//             </div>
//             <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
//               <p className="text-xl sm:text-2xl font-bold">52</p>
//               <p className="text-xs sm:text-sm text-gray-600">SEC</p>
//             </div>
//           </div>

//           <button className="bg-red-500 text-white w-64 px-6 py-3 rounded-md hover:bg-red-600 transition">
//             Shop Now
//           </button>
//         </div>

//         {/* Deal Image Section */}
//         <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
//           <img
//             src={dealimg}
//             alt="Deal of the Day"
//             className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-md border-4 border-red-500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home6;


import React, { useState, useEffect } from 'react';
import dealimg from "../Assets/deal imgpng.png";

const Home6 = () => {
  const [deal, setDeal] = useState(null);

  // Fetch Deal of the Day
  useEffect(() => {
    const fetchDeal = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/deals');
        if (response.ok) {
          const data = await response.json();
          // Assuming the first deal is the "Deal of the Day"
          setDeal(data[0]);
        }
      } catch (error) {
        console.error('Error fetching deal:', error);
      }
    };

    fetchDeal();
  }, []);

  return (
    <div className="mt-16 flex justify-center items-center bg-pink-50 relative">
      <div className="flex flex-col lg:flex-row items-center gap-8 px-6 py-12 max-w-6xl w-full">
        {/* Deal Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <strong className="text-3xl sm:text-4xl font-bold block mb-4">
            DEAL<br />OF THE DAY
          </strong>
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
            {deal ? deal.text : 'Loading...'}
          </h3>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">
            {deal ? deal.details : 'Fetching deal details...'}
          </p>

          {deal && deal.dateLimit && (
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Available until: {new Date(deal.dateLimit).toLocaleDateString()}
            </p>
          )}

          <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 flex-wrap">
            {/* Countdown Timer (static example for now) */}
            <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
              <p className="text-xl sm:text-2xl font-bold">188</p>
              <p className="text-xs sm:text-sm text-gray-600">DAY</p>
            </div>
            <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
              <p className="text-xl sm:text-2xl font-bold">14</p>
              <p className="text-xs sm:text-sm text-gray-600">HOUR</p>
            </div>
            <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
              <p className="text-xl sm:text-2xl font-bold">50</p>
              <p className="text-xs sm:text-sm text-gray-600">MIN</p>
            </div>
            <div className="text-center border border-gray-300 px-3 sm:px-4 py-2 rounded-md">
              <p className="text-xl sm:text-2xl font-bold">52</p>
              <p className="text-xs sm:text-sm text-gray-600">SEC</p>
            </div>
          </div>

          <button className="bg-red-500 text-white w-64 px-6 py-3 rounded-md hover:bg-red-600 transition">
            Shop Now
          </button>
        </div>

        {/* Deal Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
          <img
            src={deal?.image || dealimg}
            alt="Deal of the Day"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-md border-4 border-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home6;
