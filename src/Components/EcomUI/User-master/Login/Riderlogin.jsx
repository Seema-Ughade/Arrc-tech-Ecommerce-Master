import React from "react";
import allimg from "../Assets/allpage.png";
import Wishlist from "./Wishlist.jsx"
const LoginPage = () => {
  return (
    <div>
      <img src={allimg} alt="" className="w-full h-[300px] object-cover" />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="h-full w-full max-w-md p-6 space-y-6 bg-transparent rounded-lg shadow-md">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Welcome Back! Please login
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="rider@gmail.com"
                required
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 font-bold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-600 font-bold"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-500">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create new account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

