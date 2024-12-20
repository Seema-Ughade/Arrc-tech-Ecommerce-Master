import React from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';

const Navbar = ({ user, onLogout, toggleSidebar }) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b px-4 py-3">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Genius Shop</h1>
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
            <span className="hidden md:block">{user.name}</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button onClick={onLogout} className="text-sm text-red-600 hover:text-red-800">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

