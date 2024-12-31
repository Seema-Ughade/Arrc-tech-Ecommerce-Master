import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import allimg from "../Assets/allpage.png";

const AboutUs = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://ecommerce-panel-backend.onrender.com/api/pages");
        const page = response.data.find(
          (page) => page._id === id || page.slug === id
        );
        if (page) {
          setPageData(page);
        } else {
          setError("Page not found");
        }
      } catch (error) {
        setError(error.message || "Failed to fetch page data");
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={pageData?.image || allimg}
          alt={pageData?.title}
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            {pageData?.title?.toUpperCase()}
          </h1>
          <h3 className="mt-4 bg-white text-gray-800 py-1 px-4 rounded text-sm sm:text-base">
            Home // PAGES // {pageData?.title?.toUpperCase()}
          </h3>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* SEO Title */}
        {pageData?.seo?.title && (
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
            {pageData.seo.title}
          </h2>
        )}

        {/* Main Content */}
        <div
          className="prose max-w-none text-xl mx-auto sm:mx-0"
          dangerouslySetInnerHTML={{ __html: pageData?.description }}
        />

        {/* Additional SEO Content */}
        {pageData?.seo?.description && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Additional Information</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {pageData.seo.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
