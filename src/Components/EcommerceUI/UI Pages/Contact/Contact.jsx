import React from "react";
import allimg from "../../../../assets/Assets/allpage.png";
import { PiPhonePlus } from "react-icons/pi";
import { FaFax } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="object-cover relative">
        <img src={allimg} alt="" className="w-screen h-[300px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">CONTACT</h1>
          <h3 className=" mt-4 bg-white">Home // CONTACT</h3>
        </div>
      </div>

      <div className="p-8 bg-gray-100 font-sans">
        <div className="flex flex-wrap justify-center gap-5">
          {/* Contact Information Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 space-y-6">
            <h1 className="text-5xl font-bold ml-4 mb-8">Get in Touch</h1>
            {/* Office Address */}
            <div className="flex items-center bg-gray-200 p-4 rounded-md shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white">
                <PiPhonePlus />
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Our Office Address</h3>
                <p className="text-gray-600">3584 Hickory Heights Drive, USA</p>
              </div>
            </div>

            {/* Contact Number */}
            <div className="flex items-center bg-gray-200 p-4 rounded-md shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                <PiPhonePlus />
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Contact Number</h3>
                <p className="text-gray-600">00 000 000 000</p>
              </div>
            </div>

            {/* Fax */}
            <div className="flex items-center bg-gray-200 p-4 rounded-md shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white">
                <FaFax />
                <i className="fas fa-fax text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Fax</h3>
                <p className="text-gray-600">00 000 000 000</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-5xl font-bold  mb-4 ">
              Feel free to message us
            </h2>
            <div className=" mr-16 w-full bg-white p-6 rounded-md shadow-md">
              <form className="space-y-4">
                {/* Name and Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Comment */}
                <textarea
                  placeholder="Write Your Comment"
                  rows="5"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
