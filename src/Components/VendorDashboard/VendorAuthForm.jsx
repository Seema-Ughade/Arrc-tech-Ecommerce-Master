// import React, { useState } from 'react';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
// import LoginForm from './VendorLoginForm';
// import { useNavigate } from 'react-router-dom';

// export default function VendorAuthForm() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   const switchToLogin = () => setIsLogin(true);
//   const switchToRegister = () => setIsLogin(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Clear any previous error

//     try {
//       // Replace this URL with your actual backend login endpoint
//       const response = await axios.post('https://https://ecommerce-panel-backend.onrender.com/api/rider/login', {
//         email,
//         password,
//       });

//       // Extract token and rider name from the response
//       const { token, rider } = response.data;

//       // Pass login data to parent function
//       const loginData = {
//         token,
//         name: rider.name, // Adjust based on your API response structure
//       };

//       onSubmit(loginData, 'rider'); // Notify parent about successful login
//       navigate('/rider/dashboard'); // Redirect to rider dashboard
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Invalid email or password. Please try again.');
//     }
//   };


//   const RegisterForm = () => (
//     <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//       <div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Create Your New Vendor Account
//         </h2>
//       </div>
//       <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>      
//         <div className="rounded-md shadow-sm space-y-4">
//           <div>
//             <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               id="full-name"
//               name="full-name"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your full name"
//             />
//           </div>
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
//               placeholder="Enter your email address"
//             />
//           </div>
//           <div>
//             <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               id="phone-number"
//               name="phone"
//               type="tel"
//               autoComplete="tel"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your phone number"
//             />
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//               Address
//             </label>
//             <input
//               id="address"
//               name="address"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your address"
//             />
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Create Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               autoComplete="new-password"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your password"
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
//           <div className="relative">
//             <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm Password
//             </label>
//             <input
//               id="confirm-password"
//               name="confirm-password"
//               type={showConfirmPassword ? "text" : "password"}
//               autoComplete="new-password"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your password"
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-0 pr-3 flex items-center top-6"
//               onClick={toggleConfirmPasswordVisibility}
//             >
//               {showConfirmPassword ? (
//                 <EyeSlashIcon className="h-5 w-5 text-gray-400" />
//               ) : (
//                 <EyeIcon className="h-5 w-5 text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//           >
//             Register
//           </button>
//         </div>
//       </form>
//       <div className="text-sm text-center">
//         <button onClick={switchToLogin} className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
//           Already have an account? Login
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200">
//       {isLogin ? (
//         <LoginForm onSwitchToRegister={switchToRegister} />
//       ) : (
//         <RegisterForm />
//       )}
//     </div>
//   );
// }


import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export default function VendorAuthForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/auth/vendor/register', formData)
      if (response.data.success) {
        navigate('/vendor/login')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your New Vendor Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-600 text-center text-sm">{error}</div>
          )}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
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
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
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
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showConfirmPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link 
              to="/vendor/login" 
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
