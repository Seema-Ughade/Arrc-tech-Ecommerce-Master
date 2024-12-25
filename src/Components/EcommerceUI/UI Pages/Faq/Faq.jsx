import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Minus } from 'lucide-react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/faqs');
        setFaqs(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gray-600 h-[300px] flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-white text-5xl font-bold mb-4">Faq</h1>
          <div className="flex items-center gap-2 text-gray-300">
            <span>Home</span>
            <span>//</span>
            <span>Faq</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-9xl mx-auto py-16 px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq._id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.title}</h3>
                <span className="text-gray-500">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;

