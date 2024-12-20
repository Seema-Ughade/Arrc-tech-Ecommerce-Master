import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorDashboard from './VendorDashboard';
// import Orders from './pages/Orders';
// Import other page components as needed

const VendorLayout = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <Router>
      <SidebarWrapper isCollapsed={isSidebarCollapsed}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar onMenuClick={toggleMobileSidebar} />
          <div className="flex flex-1">
            <MobileSidebar 
              isOpen={isMobileSidebarOpen} 
              onClose={() => setMobileSidebarOpen(false)} 
            />
            <main className="flex-1 p-6 md:p-8">
              <Routes>
                <Route path="/appdashboard" element={<VendorDashboard />} />
                {/* <Route path="/orders" element={<Orders />} /> */}
                {/* Add other routes here */}
              </Routes>
            </main>
          </div>
        </div>
      </SidebarWrapper>
    </Router>
  );
};

export default VendorLayout;

