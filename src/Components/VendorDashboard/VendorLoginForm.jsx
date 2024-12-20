// import React, { useState } from 'react';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// export default function VendorLoginForm({ onSwitchToRegister }) {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   return (
//     <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//       <div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Welcome Back!
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Please login
//         </p>
//       </div>
//       <form className="mt-8 space-y-6" action="#" method="POST">
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function VendorLoginForm({ onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    // You can add authentication logic here, for example:
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // If authentication is successful, navigate to VendorDashboard:
    navigate('/vendor-dashboard'); // Redirect to VendorDashboard after successful login
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome Back Vendor Login!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please login
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="vendor@gmail.com"
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
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-sm text-center">
        <button onClick={onSwitchToRegister} className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
          Don't have an account? Create New Account
        </button>
      </div>
    </div>
  );
}
