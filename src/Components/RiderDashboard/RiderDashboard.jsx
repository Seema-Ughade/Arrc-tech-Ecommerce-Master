// import React, { useState } from "react";
// import { Menu, Bell, ChevronDown, MapPin, Truck, Clock, User, Settings, LayoutGrid, Cog, DollarSign } from 'lucide-react';

// export default function RiderDashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const stats = [
//     { id: 1, title: "Pending Deliveries", value: "5", color: "border-orange-500", icon: Truck },
//     { id: 2, title: "Completed Deliveries", value: "12", color: "border-green-500", icon: Cog },
//     { id: 3, title: "Total Earnings", value: "$250.00", color: "border-blue-500", icon: DollarSign },
//     { id: 4, title: "Rating", value: "4.8", color: "border-purple-500", icon: User },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="fixed top-0 z-50 w-full bg-white border-b px-4 py-3">
//         <div className="flex items-center justify-between max-w-[1920px] mx-auto">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//             <h1 className="text-xl font-bold">Rider Dashboard</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="p-2 hover:bg-gray-100 rounded-full relative">
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//             </button>
//             <div className="flex items-center gap-2">
//               <img
//                 src="/placeholder.svg?height=32&width=32"
//                 alt="Profile"
//                 className="w-8 h-8 rounded-full"
//               />
//               <span className="hidden md:block">Rider</span>
//               <ChevronDown className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <aside
//         className={`fixed left-0 top-0 z-40 h-screen w-64 pt-16 bg-white border-r transition-transform duration-300 lg:translate-x-0 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <nav className="p-4 space-y-2">
//           <button className="w-full flex items-center gap-3 bg-red-500 text-white rounded-lg px-4 py-2">
//             <LayoutGrid className="w-5 h-5" />
//             <span>Dashboard</span>
//           </button>
//           {[
//             { icon: MapPin, label: "Current Location" },
//             { icon: Truck, label: "Deliveries" },
//             { icon: Clock, label: "Schedule" },
//             { icon: User, label: "Profile" },
//             { icon: Settings, label: "Settings" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               className="w-full flex items-center gap-3 hover:bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
//             >
//               <item.icon className="w-5 h-5" />
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 lg:hidden z-30"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <main className="pt-16 lg:pl-64">
//         <div className="p-6 max-w-[1920px] mx-auto">
//           <h2 className="text-2xl font-bold mb-6">Rider Overview</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat) => (
//               <div
//                 key={stat.id}
//                 className={`bg-white rounded-lg p-6 border-l-4 ${stat.color}`}
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="p-2 rounded-lg bg-gray-100/80">
//                     <stat.icon className="w-6 h-6" />
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
//                 <p className="text-gray-600 mt-1">{stat.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



import { useState } from "react"
import { Menu, Bell, ChevronDown, Store, Truck, ShoppingBag, Package, Upload, MessageSquare, Wallet, Settings, LayoutGrid, Cog, DollarSign } from 'lucide-react'

export default function RiderDashboard(isAuthenticated) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const stats = [
    { id: 1, title: "Order Pending", value: "₹3221", color: "border-orange-500", icon: ShoppingBag },
    { id: 2, title: "Order Processing", value: "₹2323", color: "border-blue-500", icon: Cog },
    { id: 3, title: "Orders Completed!", value: "₹4222", color: "border-green-500", icon: Package },
    { id: 4, title: "Total Products!", value: "₹20222", color: "border-red-500", icon: Package },
    { id: 5, title: "Delivered Orders", value: "₹4222", color: "border-green-500", icon: Truck },
    { id: 6, title: "Total Revenue", value: "₹803.25", color: "border-orange-500", icon: DollarSign },
    { id: 7, title: "Total Earnings", value: "₹6,849.80", color: "border-purple-500", icon: Wallet },
    { id: 8, title: "Pending Balance", value: "₹0", color: "border-blue-500", icon: Wallet },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">ARRC TECHNOLOGY
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block">Vendor</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 pt-16 bg-white border-r transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-2">
          <button className="w-full flex items-center gap-3 bg-red-500 text-white rounded-lg px-4 py-2">
            <LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          {[
            { icon: Store, label: "Visit Store" },
            { icon: Truck, label: "Delivery" },
            { icon: ShoppingBag, label: "Orders" },
            { icon: Package, label: "Products" },
            { icon: Upload, label: "Bulk Item Upload" },
            { icon: MessageSquare, label: "Messages" },
            { icon: Wallet, label: "Withdraw" },
            { icon: Settings, label: "Settings" },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 hover:bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-16 lg:pl-64">
        <div className="p-6 max-w-[1920px] mx-auto">
          <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`bg-white rounded-lg p-6 border-l-4 ${stat.color}`}
              >
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-gray-100/80">
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}


