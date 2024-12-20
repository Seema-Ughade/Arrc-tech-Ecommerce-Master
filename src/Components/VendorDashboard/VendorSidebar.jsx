import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Store, Truck, ShoppingBag, Package, Upload, MessageSquare, Wallet, Settings } from 'lucide-react';

const VendorSidebar = ({ collapsed }) => {
  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/vendor/dashboard' },
    { icon: Store, label: 'Visit Store', path: '/vendor/store' },
    { icon: Truck, label: 'Delivery', path: '/vendor/delivery' },
    { icon: ShoppingBag, label: 'Orders', path: '/vendor/orders' },
    { icon: Package, label: 'Products', path: '/vendor/products' },
    { icon: Upload, label: 'Bulk Upload', path: '/vendor/bulk-upload' },
    { icon: MessageSquare, label: 'Messages', path: '/vendor/messages' },
    { icon: Wallet, label: 'Withdraw', path: '/vendor/withdraw' },
    { icon: Settings, label: 'Settings', path: '/vendor/settings' },
  ];

  return (
    <aside className={`fixed left-0 top-0 z-40 h-screen bg-white border-r transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <item.icon className={`w-6 h-6 text-gray-500 transition duration-75 ${collapsed ? 'mx-auto' : 'mr-2'}`} />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default VendorSidebar;
