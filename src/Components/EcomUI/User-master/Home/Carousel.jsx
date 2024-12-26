import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearMessage } from '../../../../redux/reducers/sliderReducer';
import { fetchSliders } from '../../../../redux/actions/sliderActions';
import { toast } from 'react-toastify';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access state from Redux store
  const { sliders = [], error, message } = useSelector((state) => state.slider);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(fetchSliders());
      setIsLoading(false);
    };

    fetchData();

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

  const handleShopNowClick = () => {
    navigate("/products");
  };

  if (isLoading) {
    return (
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {sliders.map((slider, index) => (
        <div
          key={index}
          className={`relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] ${
            index === activeIndex ? 'block' : 'hidden'
          }`}
        >
          {/* Background Image */}
          <img
            src={slider.image}
            alt={slider.name}
            className="w-full h-full  "
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 ">
            <div className="container mx-auto h-full px-4 lg:px-6">
              <div className="flex items-center h-full">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                    Dive In and Explore
                  </h3>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500">
                    {slider.name}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-white max-w-[90%] lg:max-w-[70%] mx-auto lg:mx-0">
                    Buy the best Organic Food for your Healthy future and family.
                  </p>
                  <button
                    onClick={handleShopNowClick}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg transition-colors duration-300"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-red-500 w-6 sm:w-8"
                : "bg-gray-300 hover:bg-red-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute top-1/2 left-2 sm:left-4 z-10 transform -translate-y-1/2 hidden opacity-75 hover:opacity-100 focus:outline-none transition-opacity duration-300"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 sm:w-10 sm:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 z-10 transform -translate-y-1/2 hidden opacity-75 hover:opacity-100 focus:outline-none transition-opacity duration-300"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 sm:w-10 sm:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;

