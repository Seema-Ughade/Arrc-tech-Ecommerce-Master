import React, { useState } from "react";
import allimg from "../Assets/allpage.png";
import { Phone, Mail, FileText } from 'lucide-react';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for this field when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Comment is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("https://ecommerce-panel-backend.onrender.com/api/contacts", formData);
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", comment: "" });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Handle field-specific errors from the backend
        setErrors(error.response.data.errors);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="relative">
        <img src={allimg} alt="Contact Banner" className="w-full h-[300px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl sm:text-2xl font-bold">CONTACT</h1>
          <h3 className="mt-4 bg-white px-4 py-1 text-sm sm:text-lg">Home // CONTACT</h3>
        </div>
      </div>

      <div className="p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Contact Information Section */}
          <div className="w-full lg:w-2/5 space-y-6">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            
            {/* Office Address */}
            <div className="bg-[#f8f2f2] p-6 rounded-lg flex items-center gap-6">
              <div className="bg-[#4a2828] w-16 h-16 rounded-full flex items-center justify-center">
                <Phone className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Our Office Address</h3>
                <p className="text-gray-600">3584 Hickory Heights Drive, USA</p>
              </div>
            </div>

            {/* Contact Number */}
            <div className="bg-[#fff7ed] p-6 rounded-lg flex items-center gap-6">
              <div className="bg-[#f97316] w-16 h-16 rounded-full flex items-center justify-center">
                <Phone className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contact Number</h3>
                <p className="text-gray-600">00 000 000 000</p>
              </div>
            </div>

            {/* Fax */}
            <div className="bg-[#f0fdf4] p-6 rounded-lg flex items-center gap-6">
              <div className="bg-[#22c55e] w-16 h-16 rounded-full flex items-center justify-center">
                <FileText className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Fax</h3>
                <p className="text-gray-600">00 000 000 000</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="bg-[#eff6ff] p-6 rounded-lg flex items-center gap-6">
              <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center">
                <Mail className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email Address</h3>
                <p className="text-gray-600">admin@geniusocean.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-8">Feel free to message us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    name="comment"
                    placeholder="Write Your Comment"
                    rows="6"
                    value={formData.comment}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-lg border ${errors.comment ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-500 text-white py-4 rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactPage;

