
// import React, { useState, useEffect } from 'react'

// const BestMonthOffer = () => {
//   const [offers, setOffers] = useState([])

//   useEffect(() => {
//     fetchOffers()
//   }, [])

//   const fetchOffers = async () => {
//     try {
//       const response = await fetch('https://ecommerce-panel-backend.onrender.com/api/offers')
//       if (response.ok) {
//         const data = await response.json()
//         setOffers(data)
//       }
//     } catch (error) {
//       console.error('Error fetching offers:', error)
//     }
//   }

//   const handleImageClick = (url) => {
//     window.open(url, '_blank', 'noopener,noreferrer')
//   }

//   return (
//     <div className="py-10 px-4 md:px-10 lg:px-20">
//       <div className="">
//         <strong className="text-xl md:text-5xl text-center font-bold text-gray-800 block mb-4">
//           Best Month Offer
//         </strong>
//         <p className="text-1xl md:text-base text-center text-gray-600 mb-16 font-semibold">
//           Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus
//           fermentum tristique
//           <br />
//           lobortis lectus Magnis. Consequat porta turpis maecenas.
//         </p>
//       </div>

//       <div className="flex flex-col w-[95%] md:flex-row justify-center m-auto gap-0 md:gap-5">
//         {offers.length > 0 && (
//           <div className="mb-8 md:mb-0 flex w-full overflow-hidden">
//             <img
//               src={offers[0].image}
//               alt="Offer 1"
//               className="w-full lg:h-[44rem] md:h-24 sm:h-24 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
//               onClick={() => handleImageClick(offers[0].url)}
//             />
//           </div>
//         )}

//         <div className="flex flex-col gap-0 md:gap-5 w-full">
//           {offers.length > 1 && (
//             <div className="flex justify-center overflow-hidden rounded-none">
//               <img
//                 src={offers[1].image}
//                 alt="Offer 2"
//                 className="w-full h-[20.7rem] object-cover rounded-none transition-transform duration-300 hover:scale-105 cursor-pointer"
//                 onClick={() => handleImageClick(offers[1].url)}
//               />
//             </div>
//           )}

//           {offers.length > 2 && (
//             <div className="flex justify-center overflow-hidden">
//               <img
//                 src={offers[2].image}
//                 alt="Offer 3"
//                 className="w-full h-[22rem] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
//                 onClick={() => handleImageClick(offers[2].url)}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BestMonthOffer



import React, { useState, useEffect } from 'react';

const BestMonthOffer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await fetch('https://ecommerce-panel-backend.onrender.com/api/offers');
      if (response.ok) {
        const data = await response.json();
        setOffers(data);
      }
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  const handleImageClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <strong className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-800 block mb-4">
          Best Month Offer
        </strong>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium">
          Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum tristique
          <br className="hidden md:block" />
          lobortis lectus Magnis. Consequat porta turpis maecenas.
        </p>
      </div>

      {/* Offers Section */}
      <div className="flex flex-col md:flex-row gap-6 w-[95%] m-auto">
        {/* Main Offer */}
        {offers.length > 0 && (
          <div className="mb-6 md:mb-0 flex-1 overflow-hidden">
            <img
              src={offers[0].image}
              alt="Offer 1"
              className="w-full h-auto md:h-[30rem] lg:h-[41.5rem] object-cover  hover:scale-105 transition-transform duration-300  cursor-pointer"
              onClick={() => handleImageClick(offers[0].url)}
            />
          </div>
        )}

        {/* Side Offers */}
        <div className="flex flex-col flex-1 gap-5">
          {offers.length > 1 && (
            <div className="overflow-hidden">
              <img
                src={offers[1].image}
                alt="Offer 2"
                className="w-full h-auto md:h-[14rem] lg:h-[20rem] object-cover hover:scale-105  transition-transform duration-300  cursor-pointer"
                onClick={() => handleImageClick(offers[1].url)}
              />
            </div>
          )}
          {offers.length > 2 && (
            <div className="overflow-hidden">
              <img
                src={offers[2].image}
                alt="Offer 3"
                className="w-full h-auto md:h-[14rem] lg:h-[20rem] object-cover  transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(offers[2].url)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestMonthOffer;
