import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import the required styles

export default function RiderLoginForm({ onSwitchToRegister, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/riders/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json', // Ensure correct content type
        }
      });

      // Extract token from the response
      const { token } = response.data;

      // If token exists, save it to localStorage or state
      localStorage.setItem('riderToken', token);

      // Pass login data to parent function
      const loginData = {
        token,
        email,
      };

      onSubmit(loginData, 'rider'); // Notify parent about successful login
      toast.success('Login successful! Redirecting to dashboard...');

      // Redirect to rider dashboard
      navigate('/rider/dashboard');
      
    } catch (err) {
      console.error('Login error:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data.message : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome Back Rider Login!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please login
        </p>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error if any */}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="rider@example.com"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Your Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center top-6"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-teal-400 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-teal-400 hover:text-teal-400">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-sm text-center">
        <button onClick={onSwitchToRegister} className="font-medium text-teal-400 hover:text-teal-500 transition duration-150 ease-in-out">
          Don't have an account? Create New Account
        </button>
      </div>
    </div>
  );
}
