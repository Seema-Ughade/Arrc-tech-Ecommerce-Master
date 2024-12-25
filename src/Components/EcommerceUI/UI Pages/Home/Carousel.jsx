
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearError, clearMessage } from '../../../../redux/reducers/sliderReducer';
// import { fetchSliders } from '../../../../redux/actions/sliderActions';
// import { toast } from 'react-toastify';
// import '../Home/Home.css';

// function Carousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const dispatch = useDispatch();

//   // Access state from Redux store
//   const { sliders = [], error, message, loading } = useSelector((state) => state.slider);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     // Dispatch request to fetch sliders
//     dispatch(fetchSliders());

//     // Handle error or success messages
//     if (error) {
//       toast.error(error);
//       dispatch(clearError());
//     }

//     if (message) {
//       toast.info(message);
//       dispatch(clearMessage());
//     }

//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % sliders.length);
//     }, 5000); // 5000ms = 5 seconds

//     return () => clearInterval(interval);
//   }, [dispatch, sliders.length, error, message]);

//   // Carousel Controls
//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? sliders.length - 1 : prevIndex - 1));
//   };

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % sliders.length);
//   };

//   return (
//     <div id="carouselExampleCaptions" className="relative">
//       {/* Carousel Indicators */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto mb-4 flex justify-center space-x-3">
//         {sliders.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-2 w-2 rounded-lg ${index === activeIndex ? 'bg-gray-400 opacity-100' : 'bg-gray-400 opacity-50'} transition-opacity duration-300`}
//             aria-current={index === activeIndex ? 'true' : 'false'}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>

//       {/* Carousel Items */}
//       <div className="relative w-full overflow-hidden sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1600px] xl-max:max-w-[1600px] 2xl:max-w-[1800px]">
//         {sliders.map((slider, index) => (
//           <div
//             key={index}
//             className={`relative float-left h-[80vh] w-full transition-transform duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
//           >
//             <img src={slider.image} className="w-full h-[50vh] text-5xl text-white md:h-[75vh] lg:h-[100vh] block" alt={slider.name} />
//             <div className="absolute top-1/3 mt-[100px] left-10  transform -translate-y-1/2 lg:p-6 w-[700px] bg-opacity-50 ml-10 text-white">
//             <h2 className="text-[22px] lg:text-3xl font-bold">Dive In and Explore</h2>

//               <h2 className="text-[22px] lg:text-5xl text-red-500 font-bold mt-5">{slider.name}</h2>
//               <h2 className="text-[22px] lg:text-2xl font-bold mt-5">     Buy the best Organic Food for your Healthy future and family.
//               </h2>
//               {/* You can also display other slider details like subtitle or description if needed */}
//               <button className="mt-5 px-6 py-2 bg-rose-400 text-white rounded-md hover:bg-red-600 transition">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Carousel Controls */}
//       <button
//         className="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-12 text-white opacity-50 hover:opacity-90 focus:outline-none"
//         onClick={prevSlide}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
//         </svg>
//       </button>

//       <button
//         className="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-12 text-white opacity-50 hover:opacity-90 focus:outline-none"
//         onClick={nextSlide}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default Carousel;






import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearMessage } from '../../../../redux/reducers/sliderReducer';
import { fetchSliders } from '../../../../redux/actions/sliderActions';
import { toast } from 'react-toastify';
import '../Home/Home.css';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  // Access state from Redux store
  const { sliders = [], error, message } = useSelector((state) => state.slider);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loading spinner
      await dispatch(fetchSliders()); // Fetch sliders
      setIsLoading(false); // Hide loading spinner
    };

    fetchData();

    // Handle error or success messages
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (message) {
      toast.info(message);
      dispatch(clearMessage());
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, sliders.length, error, message]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? sliders.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  if (isLoading) {
    return (
      <div className="h-[35rem] mt-4 bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div id="carouselExampleCaptions" className="relative">
      {/* Carousel Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto mb-4 flex justify-center space-x-3">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-lg ${index === activeIndex ? 'bg-gray-400 opacity-100' : 'bg-gray-400 opacity-50'} transition-opacity duration-300`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="relative w-full overflow-hidden sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1600px] xl-max:max-w-[1600px] 2xl:max-w-[1800px]">
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={`relative float-left h-[80vh] w-full transition-transform duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            <img src={slider.image} className="w-full h-[50vh] text-5xl text-white md:h-[75vh] lg:h-[100vh] block" alt={slider.name} />
            <div className="absolute top-1/3 mt-[100px] left-10 transform -translate-y-1/2 lg:p-6 w-[700px] bg-opacity-50 ml-10 text-white">
              <h2 className="text-[22px] lg:text-3xl font-bold">Dive In and Explore</h2>
              <h2 className="text-[22px] lg:text-5xl text-red-500 font-bold mt-5">{slider.name}</h2>
              <h2 className="text-[22px] lg:text-2xl font-bold mt-5">Buy the best Organic Food for your Healthy future and family.</h2>
              <button className="mt-5 px-6 py-2 bg-rose-400 text-white rounded-md hover:bg-red-600 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-12 text-white opacity-50 hover:opacity-90 focus:outline-none"
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        className="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-12 text-white opacity-50 hover:opacity-90 focus:outline-none"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
