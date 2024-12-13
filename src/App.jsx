
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // Components
// // import Sidebar from "./Components/Admin/Pages/Sidebar";
// // import Navbar from "./Components/Admin/Pages/Navbar";
// // import Breadcrumb from './Components/Admin/Pages/Breadcrumb';

// // // Pages
// // import Dashboard from './Components/Admin/Pages/Dashboard/Dashboard';
// // import AddNewProduct from './Components/Admin/Pages/Products/AddNewProduct';
// // import MainCategories from './Components/Admin/Pages/Manage Categories/MainCategories';
// // import SubCategories from './Components/Admin/Pages/Manage Categories/SubCategories';
// // import ChildCategories from './Components/Admin/Pages/Manage Categories/ChildCategories';
// // import Categories from './Components/Admin/Pages/Blog/Categories';
// // import Posts from './Components/Admin/Pages/Blog/Posts';
// // import ManageStaffs from './Components/Admin/Pages/Manage Staffs/ManageStaffs';
// // import PhysicalCreateProduct from './Components/Admin/Pages/Products/PhysicalCreateProduct';
// // import DigitalProductCreate from './Components/Admin/Pages/Products/DigitalProductCreate';
// // import LicenseProductCreate from './Components/Admin/Pages/Products/LicenseProductCreate';
// // import ListingProductCreate from './Components/Admin/Pages/Products/ListingProductCreate';
// // import ProductList from './Components/Admin/Pages/Products/ProductList';
// // import DeactivatedProducts from './Components/Admin/Pages/Products/DeactivatedProducts';
// // import SetCoupans from './Components/Admin/Pages/Set Coupans/SetCoupans';
// // import SocialLinks from './Components/Admin/Pages/Social Settings/SocialLinks';
// // import AddAffiliateProduct from './Components/Admin/Pages/Affiliate Product/AddAffiliateProduct';
// // import AffiliateProducts from './Components/Admin/Pages/Affiliate Product/AllAffiliateProducts';
// // import ProductBulkUpload from './Components/Admin/Pages/Bulk Product Upload/ProductBulkUpload';
// // import LogoUpload from './Components/Admin/Pages/General Settings/LogoUpload';
// // import FaviconUpload from './Components/Admin/Pages/General Settings/FaviconUpload';
// // import ShippingMethods from './Components/Admin/Pages/General Settings/ShippingMethods';
// // import Packagings from './Components/Admin/Pages/General Settings/Packagings';
// // import PickupLocations from './Components/Admin/Pages/General Settings/PickupLocations';
// // import SliderComponent from './Components/Admin/Pages/Home Page Settings/SliderComponent';
// // import ServiceComponent from './Components/Admin/Pages/Home Page Settings/ServiceComponent';
// // import PartnersComponent from './Components/Admin/Pages/Home Page Settings/PartnersComponent';
// // import FaqComponent from './Components/Admin/Pages/Menu Page Settings/FaqComponent';
// // import PageComponent from './Components/Admin/Pages/Menu Page Settings/PageComponent';
// // import PaymentGatewayComponent from './Components/Admin/Pages/Payment Settings/PaymentGatewayComponent';
// // import ProductUserDetail from './Components/Admin/Pages/Orders/ProductUserDetail';
// // import Currencies from './Components/Admin/Pages/Payment Settings/Currencies';
// // import Fonts from './Components/Admin/Pages/Fonts Options/Fonts';
// // import Roles from './Components/Admin/Pages/Manage Roles/Roles';
// // import Login from "./Components/Admin/Pages/Login/login";
// // import Cities from './Components/Admin/Pages/Manage Country/Cities';
// // import States from './Components/Admin/Pages/Manage Country/States';
// // import TaxManagementForm from './Components/Admin/Pages/Manage Country/TaxManagementForm';
// // import ManageTax from './Components/Admin/Pages/Manage Country/ManageTax';
// // import Countries from './Components/Admin/Pages/Manage Country/Countries';
// // import CustomersList from './Components/Admin/Pages/Customers/CustomersList';
// // import CustomerDetails from './Components/Admin/Pages/Customers/CustomerDetails';
// // import AllOrders from './Components/Admin/Pages/Orders/AllOrders';
// // import PendingOrders from './Components/Admin/Pages/Orders/PendingOrders';
// // import ProcessingOrders from './Components/Admin/Pages/Orders/ProcessingOrders';
// // import CompletedOrders from './Components/Admin/Pages/Orders/CompletedOrders';
// // import DeclinedOrders from './Components/Admin/Pages/Orders/DeclinedOrders';
// // import TaxCalculate from './Components/Admin/Pages/Total Earning/TaxCalculate';
// // import SubscriptionEarnings from './Components/Admin/Pages/Total Earning/SubscriptionEarnings';
// // import WithdrawEarnings from './Components/Admin/Pages/Total Earning/WithdrawEarnings';
// // import CommissionEarningDashboard from './Components/Admin/Pages/Total Earning/CommissionEarningDashboard';
// // import ProductReviews from './Components/Admin/Pages/Product Discussion/ProductReviews';
// // import ProductDiscussionReports from './Components/Admin/Pages/Product Discussion/ProductDiscussionReports';
// // import RidersList from './Components/Admin/Pages/Riders/RidersList';
// // import Withdraws from './Components/Admin/Pages/Riders/Withdraws';
// // import CompletedDeposits from './Components/Admin/Pages/Customer Deposits/CompletedDeposits';
// // import PendingDeposits from './Components/Admin/Pages/Customer Deposits/PendingDeposits';
// // import Transactions from './Components/Admin/Pages/Customer Deposits/Transactions';
// // import VendorsList from './Components/Admin/Pages/Vendors/VendorsList';
// // import VendorsWithdraws from './Components/Admin/Pages/Vendors/VendorsWithdraws';
// // import CompletedVendorSubscriptions from './Components/Admin/Pages/Vendor Subscription Plans/CompletedVendorSubscriptions';
// // import PendingVendorSubscriptions from './Components/Admin/Pages/Vendor Subscription Plans/PendingVendorSubscriptions';
// // import PendingVerifications from './Components/Admin/Pages/Vendor Verifications/PendingVerifications';
// // import VendorVerifications from './Components/Admin/Pages/Vendor Verifications/VendorVerifications';
// // import VendorSubscriptionPlans from './Components/Admin/Pages/Vendor Subscriptions/VendorSubscriptionPlans';




// // //Ui component 
// // import UINavbar from './Components/EcommerceUI/UI Pages/navbar/UINavbar.jsx';
// // import Footer from './Components/EcommerceUI/UI Pages/Footer/Footer.jsx';
// // import Home from './Components/EcommerceUI/UI Pages/Home/Home.jsx';
// // import Products from './Components/EcommerceUI/UI Pages/Products/Products.jsx';
// // import AboutUs from './Components/EcommerceUI/UI Pages/Pages/AboutUs.jsx';
// // import Privacy from './Components/EcommerceUI/UI Pages/Pages/Privacy.jsx';
// // import Faq from './Components/EcommerceUI/UI Pages/Faq/Faq.jsx';
// // import Contact from './Components/EcommerceUI/UI Pages/Contact/Contact.jsx';
// // import Blog from './Components/EcommerceUI/UI Pages/Blog/Blog.jsx';
// // import UILogin from './Components/EcommerceUI/UI Pages/Login/UILogin.jsx';
// // import Search from './Components/EcommerceUI/UI Pages/search/Search.jsx';
// // import Compare from './Components/EcommerceUI/UI Pages/Compare/Compare.jsx';
// // import Cart from './Components/EcommerceUI/UI Pages/cart/Cart.jsx';


// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [loggedInUser, setLoggedInUser] = useState(null);
// //   const [permissions, setPermissions] = useState(null); // Store permissions
// //   const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

// //   // Handle login
// //   const handleLogin = (staff, token) => {
// //     setIsAuthenticated(true);
// //     setLoggedInUser(staff);
// //     setPermissions(staff.role.permissions); // Set permissions on login
// //     localStorage.setItem('token', token);
// //   };

// //   // Handle logout
// //   const handleLogout = () => {
// //     setIsAuthenticated(false);
// //     setLoggedInUser(null);
// //     setPermissions(null);
// //     localStorage.removeItem('token');
// //   };

// //   // Handle sidebar toggle
// //   const toggleSidebar = () => {
// //     setSidebarCollapsed(!isSidebarCollapsed);
// //   };

// //   return (
// //     <Router>
// //       <div className={`flex h-full w-full border border-gray-100 ${isSidebarCollapsed ? 'pl-16' : 'pl-60'}`}>
// //         {isAuthenticated && loggedInUser && (
// //           <>
// //             <Sidebar
// //               collapsed={isSidebarCollapsed}
// //               toggleSidebar={toggleSidebar}
// //               permissions={permissions} // Pass permissions to Sidebar
// //             />
// //             <div className="flex flex-col flex-1">
// //               <Navbar user={loggedInUser} onLogout={handleLogout} />
// //               <div className="mt-10 ml-5"><Breadcrumb /></div>
// //               <div className="flex-1 p-5 bg-white">
// //                 <Routes>
// //                   <Route path="/dashboard" element={<Dashboard />} />
// //                   <Route path="/admin/products/types" element={<AddNewProduct />} />
// //                   <Route path="/admin/category" element={<MainCategories />} />
// //                   <Route path="/admin/subcategory" element={<SubCategories />} />
// //                   <Route path="/admin/childcategory" element={<ChildCategories />} />
// //                   <Route path="/admin/blog/categories" element={<Categories />} />
// //                   <Route path="/admin/blog/posts" element={<Posts />} />
// //                   <Route path="/admin/blog/manage-staffs" element={<ManageStaffs />} />
// //                   <Route path="/admin/products/physical/create" element={<PhysicalCreateProduct />} />
// //                   <Route path="/admin/products/digital/create" element={<DigitalProductCreate />} />
// //                   <Route path="/admin/products/license/create" element={<LicenseProductCreate />} />
// //                   <Route path="/admin/products/listing/create" element={<ListingProductCreate />} />
// //                   <Route path="/admin/products" element={<ProductList />} />
// //                   <Route path="/admin/products/deactive" element={<DeactivatedProducts />} />
// //                   <Route path="/admin/coupon" element={<SetCoupans />} />
// //                   <Route path="/admin/social-link" element={<SocialLinks />} />
// //                   <Route path="/admin/products/add-affiliate/AddAffiliateProduct" element={<AddAffiliateProduct />} />
// //                   <Route path="/admin/products/AllAffiliateProducts" element={<AffiliateProducts />} />
// //                   <Route path="/admin/ProductBulkUpload" element={<ProductBulkUpload />} />
// //                   <Route path="/admin/general-settings/logo" element={<LogoUpload />} />
// //                   <Route path="/admin/general-settings/favicon" element={<FaviconUpload />} />
// //                   <Route path="/admin/shipping" element={<ShippingMethods />} />
// //                   <Route path="/admin/package" element={<Packagings />} />
// //                   <Route path="/admin/pickup" element={<PickupLocations />} />
// //                   <Route path="/admin/slider" element={<SliderComponent />} />
// //                   <Route path="/admin/service" element={<ServiceComponent />} />
// //                   <Route path="/admin/partner" element={<PartnersComponent />} />
// //                   <Route path="/admin/faq" element={<FaqComponent />} />
// //                   <Route path="/admin/page" element={<PageComponent />} />
// //                   <Route path="/admin/paymentgateway" element={<PaymentGatewayComponent />} />
// //                   <Route path="/admin/order/create" element={<ProductUserDetail />} />
// //                   <Route path="/admin/currency" element={<Currencies />} />
// //                   <Route path="/admin/fonts" element={<Fonts />} />
// //                   <Route path="/admin/role" element={<Roles />} />
// //                   <Route path="/admin/cities" element={<Cities />} />
// //               <Route path="/admin/states" element={<States />} />
// //               <Route path="/admin/TaxManagementForm" element={<TaxManagementForm />} />
// //               <Route path="/admin/manage/country/tax" element={<ManageTax />} />
// //               <Route path="/admin/manage/country" element={<Countries />} />
// //               <Route path="/admin/users" element={<CustomersList />} />
// //               {/* <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} /> */}
// //               <Route path="/admin/allorder" element={<AllOrders />} />
// //               <Route path="/admin/orderspending" element={<PendingOrders />} />
// //               <Route path="/admin/ordersprocessing" element={<ProcessingOrders />} />
// //               <Route path="/admin/orderscompleted" element={<CompletedOrders />} />
// //               <Route path="/admin/ordersdeclined" element={<DeclinedOrders />} />
// //               <Route path="/admin/tax/calculate" element={<TaxCalculate />} />
// //               <Route path="/admin/subscription/earning" element={<SubscriptionEarnings />} />
// //               <Route path="/admin/withdraw/earning" element={<WithdrawEarnings />} />
// //               <Route path="/admin/commission/earning" element={<CommissionEarningDashboard />} />
// //               <Route path="/admin/ratings" element={<ProductReviews />} />
// //               <Route path="/admin/reports" element={<ProductDiscussionReports />} />
// //               <Route path="/admin/riders" element={<RidersList />} />
// //               <Route path="/admin/riders/withdraws" element={<Withdraws />} />
// //               <Route path="/admin/users/deposits/all" element={<CompletedDeposits />} />
// //               <Route path="/admin/users/deposits/pending" element={<PendingDeposits />} />
// //               <Route path="/admin/users/transactions" element={<Transactions />} />
// //               <Route path="/admin/vendors" element={<VendorsList />} />
// //               <Route path="/admin/vendors/withdraws" element={<VendorsWithdraws />} />
// //               <Route path="/admin/vendors/subs/completed" element={<CompletedVendorSubscriptions />} />
// //               <Route path="/admin/vendors/subs/pending" element={<PendingVendorSubscriptions />} />
// //               <Route path="/admin/verificatons/all" element={<VendorVerifications />} />
// //               <Route path="/admin/verificatons/pending" element={<PendingVerifications />} />
// //               <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} />

// //               {/* <Route path="/admin/customerdetails" element={<CustomerDetails />} /> */}

// //                   <Route path="/" element={<Navigate to="/dashboard" />} />
// //                 </Routes>

// //               </div>
// //             </div>
// //           </>
// //         )}
// //         {!isAuthenticated && (
// //           <Routes>
// //             <Route path="/login" element={<Login onLogin={handleLogin} />} />
// //             <Route path="*" element={<Navigate to="/login" />} />
// //           </Routes>
// //         )}
// //         <Routes>
// //           {/* Public Routes */}
// //           <Route path='/' element={<Home />} />
// //           <Route path='/products' element={<Products/>}/>
// //           <Route path='/aboutus' element={<AboutUs/>}/>
// //           <Route path='/privacy' element={<Privacy/>}/>
// //           <Route path='/faq' element={<Faq/>}/>
// //           <Route path='/contact' element={<Contact/>}/>
// //           <Route path='/Blog' element={<Blog/>}/>
// //           <Route path='/UILogin' element={<Login/>}/>
// //           <Route path='/search' element={<Search/>}/>
// //           <Route path='/compare' element={<Compare/>}/>
// //           <Route path='/Cart' element={<Cart/>}/>

// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// //====================================================================================================
// //correct backend

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // Components
// import Sidebar from "./Components/Admin/Pages/Sidebar";
// import Navbar from "./Components/Admin/Pages/Navbar";
// import Breadcrumb from './Components/Admin/Pages/Breadcrumb';

// // Pages
// import Dashboard from './Components/Admin/Pages/Dashboard/Dashboard';
// import AddNewProduct from './Components/Admin/Pages/Products/AddNewProduct';
// import MainCategories from './Components/Admin/Pages/Manage Categories/MainCategories';
// import SubCategories from './Components/Admin/Pages/Manage Categories/SubCategories';
// import ChildCategories from './Components/Admin/Pages/Manage Categories/ChildCategories';
// import Categories from './Components/Admin/Pages/Blog/Categories';
// import Posts from './Components/Admin/Pages/Blog/Posts';
// import ManageStaffs from './Components/Admin/Pages/Manage Staffs/ManageStaffs';
// import PhysicalCreateProduct from './Components/Admin/Pages/Products/PhysicalCreateProduct';
// import DigitalProductCreate from './Components/Admin/Pages/Products/DigitalProductCreate';
// import LicenseProductCreate from './Components/Admin/Pages/Products/LicenseProductCreate';
// import ListingProductCreate from './Components/Admin/Pages/Products/ListingProductCreate';
// import ProductList from './Components/Admin/Pages/Products/ProductList';
// import DeactivatedProducts from './Components/Admin/Pages/Products/DeactivatedProducts';
// import SetCoupans from './Components/Admin/Pages/Set Coupans/SetCoupans';
// import SocialLinks from './Components/Admin/Pages/Social Settings/SocialLinks';
// import AddAffiliateProduct from './Components/Admin/Pages/Affiliate Product/AddAffiliateProduct';
// import AffiliateProducts from './Components/Admin/Pages/Affiliate Product/AllAffiliateProducts';
// import ProductBulkUpload from './Components/Admin/Pages/Bulk Product Upload/ProductBulkUpload';
// import LogoUpload from './Components/Admin/Pages/General Settings/LogoUpload';
// import FaviconUpload from './Components/Admin/Pages/General Settings/FaviconUpload';
// import ShippingMethods from './Components/Admin/Pages/General Settings/ShippingMethods';
// import Packagings from './Components/Admin/Pages/General Settings/Packagings';
// import PickupLocations from './Components/Admin/Pages/General Settings/PickupLocations';
// import SliderComponent from './Components/Admin/Pages/Home Page Settings/SliderComponent';
// import ServiceComponent from './Components/Admin/Pages/Home Page Settings/ServiceComponent';
// import PartnersComponent from './Components/Admin/Pages/Home Page Settings/PartnersComponent';
// import FaqComponent from './Components/Admin/Pages/Menu Page Settings/FaqComponent';
// import PageComponent from './Components/Admin/Pages/Menu Page Settings/PageComponent';
// import PaymentGatewayComponent from './Components/Admin/Pages/Payment Settings/PaymentGatewayComponent';
// import ProductUserDetail from './Components/Admin/Pages/Orders/ProductUserDetail';
// import Currencies from './Components/Admin/Pages/Payment Settings/Currencies';
// import Fonts from './Components/Admin/Pages/Fonts Options/Fonts';
// import Roles from './Components/Admin/Pages/Manage Roles/Roles';
// import Login from "./Components/Admin/Pages/Login/login";
// import Cities from './Components/Admin/Pages/Manage Country/Cities';
// import States from './Components/Admin/Pages/Manage Country/States';
// import TaxManagementForm from './Components/Admin/Pages/Manage Country/TaxManagementForm';
// import ManageTax from './Components/Admin/Pages/Manage Country/ManageTax';
// import Countries from './Components/Admin/Pages/Manage Country/Countries';
// import CustomersList from './Components/Admin/Pages/Customers/CustomersList';
// import CustomerDetails from './Components/Admin/Pages/Customers/CustomerDetails';
// import AllOrders from './Components/Admin/Pages/Orders/AllOrders';
// import PendingOrders from './Components/Admin/Pages/Orders/PendingOrders';
// import ProcessingOrders from './Components/Admin/Pages/Orders/ProcessingOrders';
// import CompletedOrders from './Components/Admin/Pages/Orders/CompletedOrders';
// import DeclinedOrders from './Components/Admin/Pages/Orders/DeclinedOrders';
// import TaxCalculate from './Components/Admin/Pages/Total Earning/TaxCalculate';
// import SubscriptionEarnings from './Components/Admin/Pages/Total Earning/SubscriptionEarnings';
// import WithdrawEarnings from './Components/Admin/Pages/Total Earning/WithdrawEarnings';
// import CommissionEarningDashboard from './Components/Admin/Pages/Total Earning/CommissionEarningDashboard';
// import ProductReviews from './Components/Admin/Pages/Product Discussion/ProductReviews';
// import ProductDiscussionReports from './Components/Admin/Pages/Product Discussion/ProductDiscussionReports';
// import RidersList from './Components/Admin/Pages/Riders/RidersList';
// import Withdraws from './Components/Admin/Pages/Riders/Withdraws';
// import CompletedDeposits from './Components/Admin/Pages/Customer Deposits/CompletedDeposits';
// import PendingDeposits from './Components/Admin/Pages/Customer Deposits/PendingDeposits';
// import Transactions from './Components/Admin/Pages/Customer Deposits/Transactions';
// import VendorsList from './Components/Admin/Pages/Vendors/VendorsList';
// import VendorsWithdraws from './Components/Admin/Pages/Vendors/VendorsWithdraws';
// import CompletedVendorSubscriptions from './Components/Admin/Pages/Vendor Subscription Plans/CompletedVendorSubscriptions';
// import PendingVendorSubscriptions from './Components/Admin/Pages/Vendor Subscription Plans/PendingVendorSubscriptions';
// import PendingVerifications from './Components/Admin/Pages/Vendor Verifications/PendingVerifications';
// import VendorVerifications from './Components/Admin/Pages/Vendor Verifications/VendorVerifications';
// import VendorSubscriptionPlans from './Components/Admin/Pages/Vendor Subscriptions/VendorSubscriptionPlans';




// //Ui component 
// import UINavbar from './Components/EcommerceUI/UI Pages/navbar/UINavbar.jsx';
// import Footer from './Components/EcommerceUI/UI Pages/Footer/Footer.jsx';
// import Home from './Components/EcommerceUI/UI Pages/Home/Home.jsx';
// import Products from './Components/EcommerceUI/UI Pages/Products/Products.jsx';
// import AboutUs from './Components/EcommerceUI/UI Pages/Pages/AboutUs.jsx';
// import Privacy from './Components/EcommerceUI/UI Pages/Pages/Privacy.jsx';
// import Faq from './Components/EcommerceUI/UI Pages/Faq/Faq.jsx';
// import Contact from './Components/EcommerceUI/UI Pages/Contact/Contact.jsx';
// import Blog from './Components/EcommerceUI/UI Pages/Blog/Blog.jsx';
// import UILogin from './Components/EcommerceUI/UI Pages/Login/UILogin.jsx';
// import Search from './Components/EcommerceUI/UI Pages/search/Search.jsx';
// import Compare from './Components/EcommerceUI/UI Pages/Compare/Compare.jsx';
// import Cart from './Components/EcommerceUI/UI Pages/cart/Cart.jsx';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [permissions, setPermissions] = useState(null); // Store permissions
//   const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

//   // Handle login
//   const handleLogin = (staff, token) => {
//     setIsAuthenticated(true);
//     setLoggedInUser(staff);
//     setPermissions(staff.role.permissions); // Set permissions on login
//     localStorage.setItem('token', token);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setLoggedInUser(null);
//     setPermissions(null);
//     localStorage.removeItem('token');
//   };

//   // Handle sidebar toggle
//   const toggleSidebar = () => {
//     setSidebarCollapsed(!isSidebarCollapsed);
//   };

//   return (
//     <Router>
//       <div className={`flex h-full w-full border border-gray-100 ${isSidebarCollapsed ? 'pl-16' : 'pl-60'}`}>
//       {/* <div className='flex h-full w-full border border-gray-100 '> */}

//         {isAuthenticated && loggedInUser && (
//           <>
//             <Sidebar
//               collapsed={isSidebarCollapsed}
//               toggleSidebar={toggleSidebar}
//               permissions={permissions} // Pass permissions to Sidebar
//             />
//             <div className="flex flex-col flex-1">
//               <Navbar user={loggedInUser} onLogout={handleLogout} />
//               <div className="mt-10 ml-5"><Breadcrumb /></div>
//               <div className="flex-1 p-5 bg-white">
//                 <Routes>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   {/* Other Admin Routes */}
//                   <Route path="/" element={<Navigate to="/dashboard" />} />
//                   <Route path="/admin/products/types" element={<AddNewProduct />} />
//                   <Route path="/admin/category" element={<MainCategories />} />
//                   <Route path="/admin/subcategory" element={<SubCategories />} />
//                   <Route path="/admin/childcategory" element={<ChildCategories />} />
//                   <Route path="/admin/blog/categories" element={<Categories />} />
//                   <Route path="/admin/blog/posts" element={<Posts />} />
//                   <Route path="/admin/blog/manage-staffs" element={<ManageStaffs />} />
//                   <Route path="/admin/products/physical/create" element={<PhysicalCreateProduct />} />
//                   <Route path="/admin/products/digital/create" element={<DigitalProductCreate />} />
//                   <Route path="/admin/products/license/create" element={<LicenseProductCreate />} />
//                   <Route path="/admin/products/listing/create" element={<ListingProductCreate />} />
//                   <Route path="/admin/products" element={<ProductList />} />
//                   <Route path="/admin/products/deactive" element={<DeactivatedProducts />} />
//                   <Route path="/admin/coupon" element={<SetCoupans />} />
//                   <Route path="/admin/social-link" element={<SocialLinks />} />
//                   <Route path="/admin/products/add-affiliate/AddAffiliateProduct" element={<AddAffiliateProduct />} />
//                   <Route path="/admin/products/AllAffiliateProducts" element={<AffiliateProducts />} />
//                   <Route path="/admin/ProductBulkUpload" element={<ProductBulkUpload />} />
//                   <Route path="/admin/general-settings/logo" element={<LogoUpload />} />
//                   <Route path="/admin/general-settings/favicon" element={<FaviconUpload />} />
//                   <Route path="/admin/shipping" element={<ShippingMethods />} />
//                   <Route path="/admin/package" element={<Packagings />} />
//                   <Route path="/admin/pickup" element={<PickupLocations />} />
//                   <Route path="/admin/slider" element={<SliderComponent />} />
//                   <Route path="/admin/service" element={<ServiceComponent />} />
//                   <Route path="/admin/partner" element={<PartnersComponent />} />
//                   <Route path="/admin/faq" element={<FaqComponent />} />
//                   <Route path="/admin/page" element={<PageComponent />} />
//                   <Route path="/admin/paymentgateway" element={<PaymentGatewayComponent />} />
//                   <Route path="/admin/order/create" element={<ProductUserDetail />} />
//                   <Route path="/admin/currency" element={<Currencies />} />
//                   <Route path="/admin/fonts" element={<Fonts />} />
//                   <Route path="/admin/role" element={<Roles />} />
//                   <Route path="/admin/cities" element={<Cities />} />
//               <Route path="/admin/states" element={<States />} />
//               <Route path="/admin/TaxManagementForm" element={<TaxManagementForm />} />
//               <Route path="/admin/manage/country/tax" element={<ManageTax />} />
//               <Route path="/admin/manage/country" element={<Countries />} />
//               <Route path="/admin/users" element={<CustomersList />} />
//               {/* <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} /> */}
//               <Route path="/admin/allorder" element={<AllOrders />} />
//               <Route path="/admin/orderspending" element={<PendingOrders />} />
//               <Route path="/admin/ordersprocessing" element={<ProcessingOrders />} />
//               <Route path="/admin/orderscompleted" element={<CompletedOrders />} />
//               <Route path="/admin/ordersdeclined" element={<DeclinedOrders />} />
//               <Route path="/admin/tax/calculate" element={<TaxCalculate />} />
//               <Route path="/admin/subscription/earning" element={<SubscriptionEarnings />} />
//               <Route path="/admin/withdraw/earning" element={<WithdrawEarnings />} />
//               <Route path="/admin/commission/earning" element={<CommissionEarningDashboard />} />
//               <Route path="/admin/ratings" element={<ProductReviews />} />
//               <Route path="/admin/reports" element={<ProductDiscussionReports />} />
//               <Route path="/admin/riders" element={<RidersList />} />
//               <Route path="/admin/riders/withdraws" element={<Withdraws />} />
//               <Route path="/admin/users/deposits/all" element={<CompletedDeposits />} />
//               <Route path="/admin/users/deposits/pending" element={<PendingDeposits />} />
//               <Route path="/admin/users/transactions" element={<Transactions />} />
//               <Route path="/admin/vendors" element={<VendorsList />} />
//               <Route path="/admin/vendors/withdraws" element={<VendorsWithdraws />} />
//               <Route path="/admin/vendors/subs/completed" element={<CompletedVendorSubscriptions />} />
//               <Route path="/admin/vendors/subs/pending" element={<PendingVendorSubscriptions />} />
//               <Route path="/admin/verificatons/all" element={<VendorVerifications />} />
//               <Route path="/admin/verificatons/pending" element={<PendingVerifications />} />
//               <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} />

//               {/* <Route path="/admin/customerdetails" element={<CustomerDetails />} /> */}

//                   <Route path="/" element={<Navigate to="/dashboard" />} />

//                 </Routes>
//               </div>
//             </div>
//           </>
//         )}
        
//         {!isAuthenticated && (
//           <Routes>
//             {/* If user is not authenticated, redirect to home page */}
//             {/* <Route path="/" element={<Navigate to="/" />} /> */}
//             {/* <Route path="*" element={<Navigate to="/" />} /> */}
//                          <Route path="/login" element={<Login onLogin={handleLogin} />} />
//              <Route path="*" element={<Navigate to="/login" />} />

//           </Routes>
//         )}
//       </div>

//         {/* Public Routes */}
//         {/* <div className=' h-full w-full border border-gray-100 '>

// <Routes>
// <UINavbar/>
//         <Route path='/' element={<Home />} />
//           <Route path='/products' element={<Products/>}/>
//           <Route path='/aboutus' element={<AboutUs/>}/>
//           <Route path='/privacy' element={<Privacy/>}/>
//           <Route path='/faq' element={<Faq/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/Blog' element={<Blog/>}/>
//           <Route path='/UILogin' element={<Login/>}/>
//           <Route path='/search' element={<Search/>}/>
//           <Route path='/compare' element={<Compare/>}/>
//           <Route path='/Cart' element={<Cart/>}/>
//         </Routes>

// </div> */}
//     </Router>
//   );
// }

// export default App;










//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//new code


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Components
import Sidebar from "./Components/Admin/Pages/Sidebar";
import Navbar from "./Components/Admin/Pages/Navbar";
import Breadcrumb from './Components/Admin/Pages/Breadcrumb';

// Pages
import Dashboard from './Components/Admin/Pages/Dashboard/Dashboard';
import AddNewProduct from './Components/Admin/Pages/Products/AddNewProduct';
import MainCategories from './Components/Admin/Pages/Manage Categories/MainCategories';
import SubCategories from './Components/Admin/Pages/Manage Categories/SubCategories';
import ChildCategories from './Components/Admin/Pages/Manage Categories/ChildCategories';
import Categories from './Components/Admin/Pages/Blog/Categories';
import Posts from './Components/Admin/Pages/Blog/Posts';
import ManageStaffs from './Components/Admin/Pages/Manage Staffs/ManageStaffs';
import PhysicalCreateProduct from './Components/Admin/Pages/Products/PhysicalCreateProduct';
import DigitalProductCreate from './Components/Admin/Pages/Products/DigitalProductCreate';
import LicenseProductCreate from './Components/Admin/Pages/Products/LicenseProductCreate';
import ListingProductCreate from './Components/Admin/Pages/Products/ListingProductCreate';
import ProductList from './Components/Admin/Pages/Products/ProductList';
import DeactivatedProducts from './Components/Admin/Pages/Products/DeactivatedProducts';
import SetCoupans from './Components/Admin/Pages/Set Coupans/SetCoupans';
import SocialLinks from './Components/Admin/Pages/Social Settings/SocialLinks';
import AddAffiliateProduct from './Components/Admin/Pages/Affiliate Product/AddAffiliateProduct';
import AffiliateProducts from './Components/Admin/Pages/Affiliate Product/AllAffiliateProducts';
import ProductBulkUpload from './Components/Admin/Pages/Bulk Product Upload/ProductBulkUpload';
import LogoUpload from './Components/Admin/Pages/General Settings/LogoUpload';
import FaviconUpload from './Components/Admin/Pages/General Settings/FaviconUpload';
import ShippingMethods from './Components/Admin/Pages/General Settings/ShippingMethods';
import Packagings from './Components/Admin/Pages/General Settings/Packagings';
import PickupLocations from './Components/Admin/Pages/General Settings/PickupLocations';
import SliderComponent from './Components/Admin/Pages/Home Page Settings/SliderComponent';
import ServiceComponent from './Components/Admin/Pages/Home Page Settings/ServiceComponent';
import PartnersComponent from './Components/Admin/Pages/Home Page Settings/PartnersComponent';
import FaqComponent from './Components/Admin/Pages/Menu Page Settings/FaqComponent';
import PageComponent from './Components/Admin/Pages/Menu Page Settings/PageComponent';
import PaymentGatewayComponent from './Components/Admin/Pages/Payment Settings/PaymentGatewayComponent';
import ProductUserDetail from './Components/Admin/Pages/Orders/ProductUserDetail';
import Currencies from './Components/Admin/Pages/Payment Settings/Currencies';
import Fonts from './Components/Admin/Pages/Fonts Options/Fonts';
import Roles from './Components/Admin/Pages/Manage Roles/Roles';
import Login from "./Components/Admin/Pages/Login/login";
import Cities from './Components/Admin/Pages/Manage Country/Cities';
import States from './Components/Admin/Pages/Manage Country/States';
import TaxManagementForm from './Components/Admin/Pages/Manage Country/TaxManagementForm';
import ManageTax from './Components/Admin/Pages/Manage Country/ManageTax';
import Countries from './Components/Admin/Pages/Manage Country/Countries';
import CustomersList from './Components/Admin/Pages/Customers/CustomersList';
import CustomerDetails from './Components/Admin/Pages/Customers/CustomerDetails';
import AllOrders from './Components/Admin/Pages/Orders/AllOrders';
import PendingOrders from './Components/Admin/Pages/Orders/PendingOrders';
import ProcessingOrders from './Components/Admin/Pages/Orders/ProcessingOrders';
import CompletedOrders from './Components/Admin/Pages/Orders/CompletedOrders';
import DeclinedOrders from './Components/Admin/Pages/Orders/DeclinedOrders';
import TaxCalculate from './Components/Admin/Pages/Total Earning/TaxCalculate';
import SubscriptionEarnings from './Components/Admin/Pages/Total Earning/SubscriptionEarnings';
import WithdrawEarnings from './Components/Admin/Pages/Total Earning/WithdrawEarnings';
import CommissionEarningDashboard from './Components/Admin/Pages/Total Earning/CommissionEarningDashboard';
import ProductReviews from './Components/Admin/Pages/Product Discussion/ProductReviews';
import ProductDiscussionReports from './Components/Admin/Pages/Product Discussion/ProductDiscussionReports';
import RidersList from './Components/Admin/Pages/Riders/RidersList';
import Withdraws from './Components/Admin/Pages/Riders/Withdraws';
import CompletedDeposits from './Components/Admin/Pages/Customer Deposits/CompletedDeposits';
import PendingDeposits from './Components/Admin/Pages/Customer Deposits/PendingDeposits';
import Transactions from './Components/Admin/Pages/Customer Deposits/Transactions';
import VendorsList from './Components/Admin/Pages/Vendors/VendorsList';
import VendorsWithdraws from './Components/Admin/Pages/Vendors/VendorsWithdraws';
import CompletedVendorSubscriptions from './Components/Admin/Pages/Vendor Subscription Plans/CompletedVendorSubscriptions';
import PendingVendorSubscriptions from './Components/Admin/Pages/Vendor Subscription Plans/PendingVendorSubscriptions';
import PendingVerifications from './Components/Admin/Pages/Vendor Verifications/PendingVerifications';
import VendorVerifications from './Components/Admin/Pages/Vendor Verifications/VendorVerifications';
import VendorSubscriptionPlans from './Components/Admin/Pages/Vendor Subscriptions/VendorSubscriptionPlans';




//Ui component 
import UINavbar from './Components/EcommerceUI/UI Pages/navbar/UINavbar.jsx';
import Footer from './Components/EcommerceUI/UI Pages/Footer/Footer.jsx';
import Home from './Components/EcommerceUI/UI Pages/Home/Home.jsx';
import Products from './Components/EcommerceUI/UI Pages/Products/Products.jsx';
import AboutUs from './Components/EcommerceUI/UI Pages/Pages/AboutUs.jsx';
import Privacy from './Components/EcommerceUI/UI Pages/Pages/Privacy.jsx';
import Faq from './Components/EcommerceUI/UI Pages/Faq/Faq.jsx';
import Contact from './Components/EcommerceUI/UI Pages/Contact/Contact.jsx';
import Blog from './Components/EcommerceUI/UI Pages/Blog/Blog.jsx';
import UILogin from './Components/EcommerceUI/UI Pages/Login/UILogin.jsx';
import Search from './Components/EcommerceUI/UI Pages/search/Search.jsx';
import Compare from './Components/EcommerceUI/UI Pages/Compare/Compare.jsx';
import Cart from './Components/EcommerceUI/UI Pages/cart/Cart.jsx';








const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks authentication status
  const [loggedInUser, setLoggedInUser] = useState(null); // Tracks logged-in user details
  const [permissions, setPermissions] = useState(null); // Tracks user permissions
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false); // Toggles sidebar state

  // Handles user login
  const handleLogin = (staff, token) => {
    setIsAuthenticated(true);
    setLoggedInUser(staff);
    setPermissions(staff.role.permissions); // Set user permissions
    localStorage.setItem('token', token); // Save token to local storage
  };

  // Handles user logout
  const handleLogout = () => {
    // Reset state variables
    setIsAuthenticated(false);
    setLoggedInUser(null);
    setPermissions(null);

    // Clear local storage and other session data
    localStorage.removeItem('token');

    // Redirect user to login page
    window.location.href = '/login'; // Forces a page reload to clear stateful data
  };

  // Handles sidebar toggle
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // **Protected Route**: Redirects to login if not authenticated
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children || <Outlet />;
  };

  // **Public Route**: Redirects to home if already authenticated
  const PublicRoute = ({ children }) => {
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
    return children || <Outlet />;
  };

  return (
    <Router>
      <div className="h-full w-full">
        {/* Public Navbar */}
        {!isAuthenticated && <UINavbar />}

        <div className={`flex ${isAuthenticated ? (isSidebarCollapsed ? 'pl-16' : 'pl-60') : ''}`}>
          {/* Sidebar for Protected Routes */}
          {isAuthenticated && (
            <Sidebar
              collapsed={isSidebarCollapsed}
              toggleSidebar={toggleSidebar}
              permissions={permissions}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {isAuthenticated && <Navbar user={loggedInUser} onLogout={handleLogout} />}
            <main className={`p-5 bg-white ${isAuthenticated ? 'mt-10' : ''}`}>
              <Routes>
                {/* Protected Admin Routes */}
                <Route  element={<ProtectedRoute />}>

                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/admin/products/types" element={<AddNewProduct />} />
                  <Route path="/admin/products/types" element={<AddNewProduct />} />
                  <Route path="/admin/category" element={<MainCategories />} />
                  <Route path="/admin/subcategory" element={<SubCategories />} />
                  <Route path="/admin/childcategory" element={<ChildCategories />} />
                  <Route path="/admin/blog/categories" element={<Categories />} />
                  <Route path="/admin/blog/posts" element={<Posts />} />
                  <Route path="/admin/blog/manage-staffs" element={<ManageStaffs />} />
                  <Route path="/admin/products/physical/create" element={<PhysicalCreateProduct />} />
                  <Route path="/admin/products/digital/create" element={<DigitalProductCreate />} />
                  <Route path="/admin/products/license/create" element={<LicenseProductCreate />} />
                  <Route path="/admin/products/listing/create" element={<ListingProductCreate />} />
                  <Route path="/admin/products" element={<ProductList />} />
                  <Route path="/admin/products/deactive" element={<DeactivatedProducts />} />
                  <Route path="/admin/coupon" element={<SetCoupans />} />
                  <Route path="/admin/social-link" element={<SocialLinks />} />
                  <Route path="/admin/products/add-affiliate/AddAffiliateProduct" element={<AddAffiliateProduct />} />
                  <Route path="/admin/products/AllAffiliateProducts" element={<AffiliateProducts />} />
                  <Route path="/admin/ProductBulkUpload" element={<ProductBulkUpload />} />
                  <Route path="/admin/general-settings/logo" element={<LogoUpload />} />
                  <Route path="/admin/general-settings/favicon" element={<FaviconUpload />} />
                  <Route path="/admin/shipping" element={<ShippingMethods />} />
                  <Route path="/admin/package" element={<Packagings />} />
                  <Route path="/admin/pickup" element={<PickupLocations />} />
                  <Route path="/admin/slider" element={<SliderComponent />} />
                  <Route path="/admin/service" element={<ServiceComponent />} />
                  <Route path="/admin/partner" element={<PartnersComponent />} />
                  <Route path="/admin/faq" element={<FaqComponent />} />
                  <Route path="/admin/page" element={<PageComponent />} />
                  <Route path="/admin/paymentgateway" element={<PaymentGatewayComponent />} />
                  <Route path="/admin/order/create" element={<ProductUserDetail />} />
                  <Route path="/admin/currency" element={<Currencies />} />
                  <Route path="/admin/fonts" element={<Fonts />} />
                  <Route path="/admin/role" element={<Roles />} />
                  <Route path="/admin/cities" element={<Cities />} />
              <Route path="/admin/states" element={<States />} />
              <Route path="/admin/TaxManagementForm" element={<TaxManagementForm />} />
              <Route path="/admin/manage/country/tax" element={<ManageTax />} />
              <Route path="/admin/manage/country" element={<Countries />} />
              <Route path="/admin/users" element={<CustomersList />} />
              {/* <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} /> */}
              <Route path="/admin/allorder" element={<AllOrders />} />
              <Route path="/admin/orderspending" element={<PendingOrders />} />
              <Route path="/admin/ordersprocessing" element={<ProcessingOrders />} />
              <Route path="/admin/orderscompleted" element={<CompletedOrders />} />
              <Route path="/admin/ordersdeclined" element={<DeclinedOrders />} />
              <Route path="/admin/tax/calculate" element={<TaxCalculate />} />
              <Route path="/admin/subscription/earning" element={<SubscriptionEarnings />} />
              <Route path="/admin/withdraw/earning" element={<WithdrawEarnings />} />
              <Route path="/admin/commission/earning" element={<CommissionEarningDashboard />} />
              <Route path="/admin/ratings" element={<ProductReviews />} />
              <Route path="/admin/reports" element={<ProductDiscussionReports />} />
              <Route path="/admin/riders" element={<RidersList />} />
              <Route path="/admin/riders/withdraws" element={<Withdraws />} />
              <Route path="/admin/users/deposits/all" element={<CompletedDeposits />} />
              <Route path="/admin/users/deposits/pending" element={<PendingDeposits />} />
              <Route path="/admin/users/transactions" element={<Transactions />} />
              <Route path="/admin/vendors" element={<VendorsList />} />
              <Route path="/admin/vendors/withdraws" element={<VendorsWithdraws />} />
              <Route path="/admin/vendors/subs/completed" element={<CompletedVendorSubscriptions />} />
              <Route path="/admin/vendors/subs/pending" element={<PendingVendorSubscriptions />} />
              <Route path="/admin/verificatons/all" element={<VendorVerifications />} />
              <Route path="/admin/verificatons/pending" element={<PendingVerifications />} />
              <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} />

              {/* <Route path="/admin/customerdetails" element={<CustomerDetails />} /> */}

                  <Route path="/" element={<Navigate to="/dashboard" />} />

                </Route>

                {/* Public Routes */}
                <Route  element={<PublicRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login onLogin={handleLogin} />} />

                </Route>

                {/* Fallback for Undefined Routes */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>

            {/* Public Footer */}
            {!isAuthenticated && <Footer />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
