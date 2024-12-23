// // import React, { useState } from 'react';
// // import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// // export default function VendorLoginForm({ onSwitchToRegister }) {
// //   const [showPassword, setShowPassword] = useState(false);

// //   const togglePasswordVisibility = () => setShowPassword(!showPassword);

// //   return (
// //     <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
// //       <div>
// //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //           Welcome Back!
// //         </h2>
// //         <p className="mt-2 text-center text-sm text-gray-600">
// //           Please login
// //         </p>
// //       </div>
// //       <form className="mt-8 space-y-6" action="#" method="POST">
// //         <div className="rounded-md shadow-sm space-y-4">
// //           <div>
// //             <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
// //               Email Address
// //             </label>
// //             <input
// //               id="email-address"
// //               name="email"
// //               type="email"
// //               autoComplete="email"
// //               required
// //               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //               placeholder="vendor@gmail.com"
// //             />
// //           </div>
// //           <div className="relative">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
// //               Your Password
// //             </label>
// //             <input
// //               id="password"
// //               name="password"
// //               type={showPassword ? "text" : "password"}
// //               autoComplete="current-password"
// //               required
// //               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //               placeholder="••••"
// //             />
// //             <button
// //               type="button"
// //               className="absolute inset-y-0 right-0 pr-3 flex items-center top-6"
// //               onClick={togglePasswordVisibility}
// //             >
// //               {showPassword ? (
// //                 <EyeSlashIcon className="h-5 w-5 text-gray-400" />
// //               ) : (
// //                 <EyeIcon className="h-5 w-5 text-gray-400" />
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center">
// //             <input
// //               id="remember-me"
// //               name="remember-me"
// //               type="checkbox"
// //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //             />
// //             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
// //               Remember me
// //             </label>
// //           </div>

// //           <div className="text-sm">
// //             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
// //               Forgot password?
// //             </a>
// //           </div>
// //         </div>

// //         <div>
// //           <button
// //             type="submit"
// //             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
// //           >
// //             Login
// //           </button>
// //         </div>
// //       </form>
// //       <div className="text-sm text-center">
// //         <button onClick={onSwitchToRegister} className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
// //           Don't have an account? Create New Account
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// export default function VendorLoginForm({ onSwitchToRegister }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate hook

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent form submission

//     // You can add authentication logic here, for example:
//     // const email = e.target.email.value;
//     // const password = e.target.password.value;
//     // If authentication is successful, navigate to VendorDashboard:
//     navigate('/vendor-dashboard'); // Redirect to VendorDashboard after successful login
//   };

//   return (
//     <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//       <div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Welcome Back Vendor Login!
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Please login
//         </p>
//       </div>
//       <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//         <div className="rounded-md shadow-sm space-y-4">
//           <div>
//             <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               id="email-address"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="vendor@gmail.com"
//             />
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               autoComplete="current-password"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="••••"
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-0 pr-3 flex items-center top-6"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? (
//                 <EyeSlashIcon className="h-5 w-5 text-gray-400" />
//               ) : (
//                 <EyeIcon className="h-5 w-5 text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <input
//               id="remember-me"
//               name="remember-me"
//               type="checkbox"
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//             />
//             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//               Remember me
//             </label>
//           </div>

//           <div className="text-sm">
//             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Forgot password?
//             </a>
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//       <div className="text-sm text-center">
//         <button onClick={onSwitchToRegister} className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
//           Don't have an account? Create New Account
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export default function VendorLoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/auth/vendor/login', formData)
      if (response.data.success) {
        localStorage.setItem('token', response.data.token)
        navigate('/vendor/dashboard')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome Back Vendor Login!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please login
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-600 text-center text-sm">{error}</div>
          )}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="vendor@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Your Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="••••"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/vendor/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link 
              to="/vendor/register" 
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

