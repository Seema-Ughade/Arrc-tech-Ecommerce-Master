

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
import ProductSettings from './Components/Admin/Pages/Products/ProductSettings';
import ProductCatalog from './Components/Admin/Pages/Products/ProductCatalog';
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
import BestMonthOffer from './Components/Admin/Pages/Home Page Settings/BestMonthOffer';
import DealOfDay from './Components/Admin/Pages/Home Page Settings/DealOfDay.jsx';
import FaqComponent from './Components/Admin/Pages/Menu Page Settings/FaqComponent';
import PageComponent from './Components/Admin/Pages/Menu Page Settings/PageComponent';
import PaymentGatewayComponent from './Components/Admin/Pages/Payment Settings/PaymentGatewayComponent';
import ProductUserDetail from './Components/Admin/Pages/Orders/ProductUserDetail';
import Currencies from './Components/Admin/Pages/Payment Settings/Currencies';
import Fonts from './Components/Admin/Pages/Fonts Options/Fonts';
import Roles from './Components/Admin/Pages/Manage Roles/Roles';
import Login from "./Components/Admin/Pages/Login/login.jsx";
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


// import Footer from './Components/EcommerceUI/UI Pages/Footer/Footer.jsx';
// import Home from './Components/EcommerceUI/UI Pages/Home/Hero.jsx';
// import Products from './Components/EcommerceUI/UI Pages/Products/Products.jsx';
// import AboutUs from './Components/EcommerceUI/UI Pages/Pages/AboutUs.jsx';
// import Privacy from './Components/EcommerceUI/UI Pages/Pages/Privacy.jsx';
// import Faq from './Components/EcommerceUI/UI Pages/Faq/Faq.jsx';
// import Contact from './Components/EcommerceUI/UI Pages/Contact/Contact.jsx';
// import Blog from './Components/EcommerceUI/UI Pages/Blog/Blog.jsx';
// import Login from './Components/EcommerceUI/UI Pages/Login/Login.jsx';
// import Search from './Components/EcommerceUI/UI Pages/search/Search.jsx';
// import Compare from './Components/EcommerceUI/UI Pages/Compare/Compare.jsx';
// import Cart from './Components/EcommerceUI/UI Pages/cart/Cart.jsx';
// import Television from './Components/EcommerceUI/UI Pages/Products/ELECTRONICS/Television.jsx';
// import Refrigeartor from './Components/EcommerceUI/UI Pages/Products/ELECTRONICS/Refrigeartor.jsx';
// import WashingMachine from './Components/EcommerceUI/UI Pages/Products/ELECTRONICS/WashingMachine.jsx';
// import AirConditioners from './Components/EcommerceUI/UI Pages/Products/ELECTRONICS/AirConditioners.jsx';
// import Accessories from './Components/EcommerceUI/UI Pages/Products/FASHION&BEAUTY/Accessories.jsx';
// import Bags from './Components/EcommerceUI/UI Pages/Products/FASHION&BEAUTY/Bags.jsx';
// import Clothings from './Components/EcommerceUI/UI Pages/Products/FASHION&BEAUTY/Clothings.jsx';
// import Shoes from './Components/EcommerceUI/UI Pages/Products/FASHION&BEAUTY/Shoes.jsx';
// import Dslr from './Components/EcommerceUI/UI Pages/Products/CAMERA&PHOTO/Dslr.jsx';
// import CameraPhone from './Components/EcommerceUI/UI Pages/Products/CAMERA&PHOTO/CameraPhone.jsx';
// import ActionCamera from './Components/EcommerceUI/UI Pages/Products/CAMERA&PHOTO/ActionCamera.jsx';
// import DigitalCamera from './Components/EcommerceUI/UI Pages/Products/CAMERA&PHOTO/DigitalCamera.jsx';
// import Apple from './Components/EcommerceUI/UI Pages/Products/SMARTPHONETABLE/Apple.jsx';
// import Samsung from './Components/EcommerceUI/UI Pages/Products/SMARTPHONETABLE/Samsung.jsx';
// import Lg from './Components/EcommerceUI/UI Pages/Products/SMARTPHONETABLE/Lg.jsx';
// import Sony from './Components/EcommerceUI/UI Pages/Products/SMARTPHONETABLE/Sony.jsx';
// import SportsEquipment from './Components/EcommerceUI/UI Pages/Products/SPORT&OUTDOOR/SportsEquipment.jsx';
// import OutdoorApparel from './Components/EcommerceUI/UI Pages/Products/SPORT&OUTDOOR/OutdoorApparel.jsx';
// import CampingHiking from './Components/EcommerceUI/UI Pages/Products/SPORT&OUTDOOR/CampingHiking.jsx';
// import WaterSports from './Components/EcommerceUI/UI Pages/Products/SPORT&OUTDOOR/WaterSports.jsx';
// import FineJewelry from './Components/EcommerceUI/UI Pages/Products/JEWELRY&WATCHES/FineJewelry.jsx';
// import FashionJewelry from './Components/EcommerceUI/UI Pages/Products/JEWELRY&WATCHES/FashionJewelry.jsx';
// import MensJewelry from './Components/EcommerceUI/UI Pages/Products/JEWELRY&WATCHES/MensJewelry.jsx';
// import WomaensJewelry from './Components/EcommerceUI/UI Pages/Products/JEWELRY&WATCHES/WomaensJewelry.jsx';
// import Skincare from './Components/EcommerceUI/UI Pages/Products/HEALTH&BEAUTY/Skincare.jsx';
// import HairCare from './Components/EcommerceUI/UI Pages/Products/HEALTH&BEAUTY/HairCare.jsx';
// import Makeup from './Components/EcommerceUI/UI Pages/Products/HEALTH&BEAUTY/Makeup.jsx';
// import PersonalCare from './Components/EcommerceUI/UI Pages/Products/PersonalCare/PersonalCare.jsx';
// import Books from './Components/EcommerceUI/UI Pages/Products/BOOKS&OFFICE/Books.jsx';
// import OfficeSupplies from './Components/EcommerceUI/UI Pages/Products/BOOKS&OFFICE/OfficeSupplies.jsx';
// import OfficeFurniture from './Components/EcommerceUI/UI Pages/Products/BOOKS&OFFICE/OfficeFurniture.jsx';
// import ComputersElectroics from './Components/EcommerceUI/UI Pages/Products/BOOKS&OFFICE/ComputersElectroics.jsx';
// import Toys from './Components/EcommerceUI/UI Pages/Products/TOYS&HOBBIES.jsx/Toys.jsx';
// import ArtsCrafts from './Components/EcommerceUI/UI Pages/Products/TOYS&HOBBIES.jsx/ArtsCrafts.jsx';
// import GamesPuzzles from './Components/EcommerceUI/UI Pages/Products/TOYS&HOBBIES.jsx/GamesPuzzles.jsx';
// import Collectibles from './Components/EcommerceUI/UI Pages/Products/TOYS&HOBBIES.jsx/Collectibles.jsx';
// import NewCars from './Components/EcommerceUI/UI Pages/Products/AUTOMOBILIES/NewCars.jsx';
// import UsedCars from './Components/EcommerceUI/UI Pages/Products/AUTOMOBILIES/UsedCars.jsx';
// import CarAccessories from './Components/EcommerceUI/UI Pages/Products/AUTOMOBILIES/CarAccessories.jsx';
// import FluidsChemicals from './Components/EcommerceUI/UI Pages/Products/AUTOMOBILIES/FluidsChemicals.jsx';
// import WallArt from './Components/EcommerceUI/UI Pages/Products/HOME DECORATION/WallArt.jsx';
// import Lighting from './Components/EcommerceUI/UI Pages/Products/HOME DECORATION/Lighting.jsx';
// import Furniture from './Components/EcommerceUI/UI Pages/Products/HOME DECORATION/Furniture.jsx';
// import Textiles from './Components/EcommerceUI/UI Pages/Products/HOME DECORATION/Textiles.jsx';
// import PortableElectronics from './Components/EcommerceUI/UI Pages/Products/PORTABLE & PERSONAL/PortableElectronics.jsx';
// import PersonalCareDevice from './Components/EcommerceUI/UI Pages/Products/PORTABLE & PERSONAL/PersonalCareDevice.jsx';
// import TravelEssentials from './Components/EcommerceUI/UI Pages/Products/PORTABLE & PERSONAL/TravelEssentials.jsx';
// import HealthFitnessGadgets from './Components/EcommerceUI/UI Pages/Products/PORTABLE & PERSONAL/HealthFitnessGadgets.jsx';
// import Blogdetails from './Components/EcommerceUI/UI Pages/Blog/Blogdetails.jsx';


//Vendor Component
import VendorAuthForm from './Components/VendorDashboard/VendorAuthForm.jsx'
import RiderAuthForm from "./Components/RiderDashboard/RiderAuthForm.jsx";
import VendorDashboard from "./Components/VendorDashboard/VendorDashboard.jsx";
import VendorLoginForm from './Components/VendorDashboard/VendorLoginForm'; // Import your component
import VendorLayout from "./Components/VendorDashboard/VendorLayout.jsx";
import EditTax from "./Components/Admin/Pages/Manage Country/EditTax.jsx";
import Withdrawals from "./Components/Admin/Pages/Customers/Withdrawals.jsx";
import CustomerDefaultImage from "./Components/Admin/Pages/Customers/CustomerDefaultImage.jsx";
import Tickets from "./Components/Admin/Pages/Massage/Tickets.jsx";
import ConversationDetails from "./Components/Admin/Pages/Massage/ConversationDetails.jsx";
import BlogSettings from "./Components/Admin/Pages/Blog/BlogSettings.jsx";
import AffiliateProgram from "./Components/Admin/Pages/General Settings/AffiliateProgram.jsx";
import PopupBanner from "./Components/Admin/Pages/General Settings/PopupBanner.jsx";
import BreadcrumbBanner from "./Components/Admin/Pages/General Settings/BreadcrumbBanner.jsx";
import WebsiteContents from "./Components/Admin/Pages/General Settings/WebsiteContents.jsx";
import ErrorPageBanner from "./Components/Admin/Pages/General Settings/ErrorPageBanner.jsx";
import WebsiteMaintenance from "./Components/Admin/Pages/General Settings/WebsiteMaintenance.jsx";
import HomePageSelector from "./Components/Admin/Pages/Home Page Settings/HomePageSelector.jsx";
import HomePageCustomization from "./Components/Admin/Pages/Home Page Settings/HomePageCustomization.jsx";
import ContactUs from "./Components/Admin/Pages/Menu Page Settings/ContactUs.jsx";
import CustomizeMenuLinks from "./Components/Admin/Pages/Menu Page Settings/CustomizeMenuLinks.jsx";
import EmailTemplates from "./Components/Admin/Pages/EmailSettings/EmailTemplates.jsx";
import EmailConfiguration from "./Components/Admin/Pages/EmailSettings/EmailConfiguration.jsx";
import GroupEmail from "./Components/Admin/Pages/EmailSettings/GroupEmail.jsx";
import PaymentInformation from "./Components/Admin/Pages/Payment Settings/PaymentInformation.jsx";
import RewardsManagement from "./Components/Admin/Pages/Payment Settings/RewardsManagement.jsx";
import FacebookLoginSettings from "./Components/Admin/Pages/Social Settings/FacebookLoginSettings.jsx";
import GoogleLoginSettings from "./Components/Admin/Pages/Social Settings/GoogleLoginSettings.jsx";
import PopularProducts from "./Components/Admin/Pages/SEO Tools/PopularProducts.jsx";
import GoogleAnalyticsSettings from "./Components/Admin/Pages/SEO Tools/GoogleAnalyticsSettings.jsx";
import MetaKeywordsSettings from "./Components/Admin/Pages/SEO Tools/MetaKeywordsSettings.jsx";
import SubscriberTable from "./Components/Admin/Pages/Subscribers/SubscriberTable.jsx";
//rider Component
// import VendorAuthForm from './Components/VendorDashboard/VendorAuthForm.jsx'



//EcomUI\User-master
import EcomNavbar from "./Components/EcomUI/User-master/navbar/EcomNavbar.jsx";
import EcomFooter from "./Components/EcomUI/User-master/Footer/EcomFooter.jsx";
import Home from "./Components/EcomUI/User-master/Home/Home.jsx";
import Products from "./Components/EcomUI/User-master/Products/Products.jsx";
import AboutUs from "./Components/EcomUI/User-master/Pages/AboutUs.jsx";
import Privacy from "./Components/EcomUI/User-master/Pages/Privacy.jsx";
import Faq from "./Components/EcomUI/User-master/Faq/Faq.jsx";
import Contact from "./Components/EcomUI/User-master/Contact/Contact.jsx";
import Blog from "./Components/EcomUI/User-master/Blog/Blog.jsx";
// import Login from "./components/Login/Login.jsx";
import Wishlist from "./Components/EcomUI/User-master/Login/Wishlist.jsx";
import Search from "./Components/EcomUI/User-master/search/Search.jsx";
import Compare from "./Components/EcomUI/User-master/Compare/Compare.jsx";
import Cart from "./Components/EcomUI/User-master/cart/Cart.jsx";
import Television from "./Components/EcomUI/User-master/Products/ELECTRONICS/Television.jsx";
import Refrigeartor from "./Components/EcomUI/User-master/Products/ELECTRONICS/Refrigeartor.jsx";
import WashingMachine from "./Components/EcomUI/User-master/Products/ELECTRONICS/WashingMachine.jsx";
import AirConditioners from "./Components/EcomUI/User-master/Products/ELECTRONICS/AirConditioners.jsx";
import Accessories from "./Components/EcomUI/User-master/Products/FASHION&BEAUTY/Accessories.jsx";
import Bags from "./Components/EcomUI/User-master/Products/FASHION&BEAUTY/Bags.jsx";
import Clothings from "./Components/EcomUI/User-master/Products/FASHION&BEAUTY/Clothings.jsx";
import Shoes from "./Components/EcomUI/User-master/Products/FASHION&BEAUTY/Shoes.jsx";
import Dslr from "./Components/EcomUI/User-master/Products/CAMERA&PHOTO/Dslr.jsx";
import CameraPhone from "./Components/EcomUI/User-master/Products/CAMERA&PHOTO/CameraPhone.jsx";
import ActionCamera from "./Components/EcomUI/User-master/Products/CAMERA&PHOTO/ActionCamera.jsx";
import DigitalCamera from "./Components/EcomUI/User-master/Products/CAMERA&PHOTO/DigitalCamera.jsx";
import Apple from "./Components/EcomUI/User-master/Products/SMARTPHONETABLE/Apple.jsx";
import Samsung from "./Components/EcomUI/User-master/Products/SMARTPHONETABLE/Samsung.jsx";
import Lg from "./Components/EcomUI/User-master/Products/SMARTPHONETABLE/Lg.jsx";
import Sony from "./Components/EcomUI/User-master/Products/SMARTPHONETABLE/Sony.jsx";
import SportsEquipment from "./Components/EcomUI/User-master/Products/SPORT&OUTDOOR/SportsEquipment.jsx";
import OutdoorApparel from "./Components/EcomUI/User-master/Products/SPORT&OUTDOOR/OutdoorApparel.jsx";
import CampingHiking from "./Components/EcomUI/User-master/Products/SPORT&OUTDOOR/CampingHiking.jsx";
import WaterSports from "./Components/EcomUI/User-master/Products/SPORT&OUTDOOR/WaterSports.jsx";
import FineJewelry from "./Components/EcomUI/User-master/Products/JEWELRY&WATCHES/FineJewelry.jsx";
import FashionJewelry from "./Components/EcomUI/User-master/Products/JEWELRY&WATCHES/FashionJewelry.jsx";
import MensJewelry from "./Components/EcomUI/User-master/Products/JEWELRY&WATCHES/MensJewelry.jsx";
import WomaensJewelry from "./Components/EcomUI/User-master/Products/JEWELRY&WATCHES/WomaensJewelry.jsx";
import Skincare from "./Components/EcomUI/User-master/Products/HEALTH&BEAUTY/Skincare.jsx";
import HairCare from "./Components/EcomUI/User-master/Products/HEALTH&BEAUTY/HairCare.jsx";
import Makeup from "./Components/EcomUI/User-master/Products/HEALTH&BEAUTY/Makeup.jsx";
import PersonalCare from "./Components/EcomUI/User-master/Products/PersonalCare/PersonalCare.jsx";
import Books from "./Components/EcomUI/User-master/Products/BOOKS&OFFICE/Books.jsx";
import OfficeSupplies from "./Components/EcomUI/User-master/Products/BOOKS&OFFICE/OfficeSupplies.jsx";
import OfficeFurniture from "./Components/EcomUI/User-master/Products/BOOKS&OFFICE/OfficeFurniture.jsx";
import ComputersElectroics from "./Components/EcomUI/User-master/Products/BOOKS&OFFICE/ComputersElectroics.jsx";
import Toys from "./Components/EcomUI/User-master/Products/TOYS&HOBBIES.jsx/Toys.jsx";
import ArtsCrafts from "./Components/EcomUI/User-master/Products/TOYS&HOBBIES.jsx/ArtsCrafts.jsx";
import GamesPuzzles from "./Components/EcomUI/User-master/Products/TOYS&HOBBIES.jsx/GamesPuzzles.jsx";
import Collectibles from "./Components/EcomUI/User-master/Products/TOYS&HOBBIES.jsx/Collectibles.jsx";
import NewCars from "./Components/EcomUI/User-master/Products/AUTOMOBILIES/NewCars.jsx";
import UsedCars from "./Components/EcomUI/User-master/Products/AUTOMOBILIES/UsedCars.jsx";
import CarAccessories from "./Components/EcomUI/User-master/Products/AUTOMOBILIES/CarAccessories.jsx";
import FluidsChemicals from "./Components/EcomUI/User-master/Products/AUTOMOBILIES/FluidsChemicals.jsx";
import WallArt from "./Components/EcomUI/User-master/Products/HOME DECORATION/WallArt.jsx";
import Lighting from "./Components/EcomUI/User-master/Products/HOME DECORATION/Lighting.jsx";
import Furniture from "./Components/EcomUI/User-master/Products/HOME DECORATION/Furniture.jsx";
import Textiles from "./Components/EcomUI/User-master/Products/HOME DECORATION/Textiles.jsx";
import PortableElectronics from "./Components/EcomUI/User-master/Products/PORTABLE & PERSONAL/PortableElectronics.jsx";
import PersonalCareDevice from "./Components/EcomUI/User-master/Products/PORTABLE & PERSONAL/PersonalCareDevice.jsx";
import TravelEssentials from "./Components/EcomUI/User-master/Products/PORTABLE & PERSONAL/TravelEssentials.jsx";
import HealthFitnessGadgets from "./Components/EcomUI/User-master/Products/PORTABLE & PERSONAL/HealthFitnessGadgets.jsx";
import Blogdetails from "./Components/EcomUI/User-master/Blog/Blogdetails.jsx";

import blog1 from "./assets/Assets/blog1.png";
import blog2 from "./assets/Assets/blog2.png";

import blog3 from "./assets/Assets/blog3.png";
import blog4 from "./assets/Assets/blog4.png";
import ScrollToTop from "./Components/EcomUI/User-master/ScrollToTop.jsx";
import ChildPage from "./Components/EcomUI/User-master/Childpages/ChildPage.jsx";
import EyePage from "./Components/EcomUI/User-master/EyePage/EyePage.jsx";
import Venderlogin from "./Components/EcomUI/User-master/Login/Venderlogin.jsx";
import Riderlogin from "./Components/EcomUI/User-master/Login/Riderlogin.jsx";
import CheckoutForm from "./Components/EcomUI/User-master/cart/Checkout.jsx";
import CategoryPage from "./Components/EcomUI/User-master/Blog/CategoryPage.jsx";
import Slider from "./Components/EcomUI/User-master/Home/Slider.jsx";
import CategoryProducts from "./Components/EcomUI/User-master/Home/CategoryProducts.jsx";
import OrderDetails from "./Components/EcomUI/User-master/cart/OrderDetails.jsx";














const App = () => {
  const products = [
    {
      id: 1,
      title: "The Power of Personalization",
      date: "Jan 02, 2019",
      excerpt:
        "In an age where consumers are bombarded with countless shopping options...",
      image: blog1,
      category: "Technology",
    },
    {
      id: 2,
      title: "Fashion on a Budget",
      date: "Jan 15, 2024",
      excerpt:
        "Looking chic and stylish doesn’t have to come with a hefty price tag. With the right strategies, you can build a fashionable wardrobe that reflects your personal style while staying within your budget...",
      image: blog2,
      category: "Fashion",
    },
    {
      id: 3,
      title: "10 Must-Have Fashion Staples",
      date: "Jan 02, 2019",
      excerpt: "Fashion staples every woman needs in her wardrobe...",
      image: blog3,
      category: "Fashion",
    },
    {
      id: 4,
      title: "Maximizing Your E-Commerce Potential",
      date: "Jan 20, 2019",
      excerpt:
        "In the competitive world of e-commerce, standing out and driving sales requires more than just having a great product....",
      image: blog4,
      category: "Fashion",
    },
  ];

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks authentication status
  const [loggedInUser, setLoggedInUser] = useState(null); // Tracks logged-in user details
  const [permissions, setPermissions] = useState(null); // Tracks user permissions
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false); // Toggles sidebar state
  const [isRegistered, setIsRegistered] = useState(false);
  const [userType, setUserType] = useState(null);

  // Define the handleSwitchToRegister function
  const handleSwitchToRegister = () => {
    setIsRegistered(true); // or any other logic you'd like
    console.log('Switching to registration page');
  };


  // Handles user login
  const handleLogin = (staff, token) => {
    setIsAuthenticated(true);
    setLoggedInUser(staff);
    setPermissions(staff.role.permissions); // Set user permissions
    localStorage.setItem('token', token); // Save token to local storage
    localStorage.setItem('userType', type);

  };


  // Handles user logout
  const handleLogout = () => {
    // Reset state variables
    setIsAuthenticated(false);
    setLoggedInUser(null);
    setPermissions(null);
    setUserType(null);

    // Clear local storage and other session data
    localStorage.removeItem('token');
    localStorage.removeItem('userType');

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
      return <Navigate to="/dashboard" />;
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
  const VendorRoute = ({ children }) => {
    if (isAuthenticated) {
      return <Navigate to="/vendor/dashboard" />;
    }
    return children || <Outlet />;
  };


  return (
    <Router>
      <div className="h-full w-full">
        {/* Public Navbar */}
        {!isAuthenticated && <EcomNavbar />}

        {/* <div className={`flex ${isAuthenticated ? (isSidebarCollapsed ? 'pl-16' : 'pl-60') : ''}`}> */}
        <div className={` ${isAuthenticated ? (isSidebarCollapsed ? 'pl-16' : 'pl-60') : ''}`}>
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

                {/* Public Routes */}
                <Route element={<PublicRoute />}>
                  <Route path='/' element={<Home />} />

                  {/* vonder code */}
                  <Route path="/user/vendor-register" element={<VendorAuthForm />} />
                  <Route path="/user/rider-register" element={<RiderAuthForm />} />
                  <Route path="/user/VendorDashboard" element={<VendorDashboard />} />
                  <Route path="/vendor/login" element={<VendorLoginForm />} />
                  <Route path="/vendor/dashboard" element={<VendorDashboard />} />
                  <Route path="/appdashboard" element={<VendorLayout />} />

                  {/* EcomUI */}
                  <Route path="/" element={<Slider />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/electronic/television" element={<Television />} />
                  <Route path="/products/electronic/refrigerator" element={<Refrigeartor />} />
                  <Route path="/products/electronic/washingmachine" element={<WashingMachine />} />
                  <Route path="/products/electronic/airconditionersy" element={<AirConditioners />} />
                  <Route path="/category/:categoryId" element={<CategoryProducts />} />
                  <Route path="/products/fashion-beauty/accessories" element={<Accessories />} />
                  <Route path="/products/fashion-beauty/bags" element={<Bags />} />
                  <Route path="/products/fashion-beauty/clothings" element={<Clothings />} />
                  <Route path="/products/fashion-beauty/shoes" element={<Shoes />} />
                  <Route path="/products/camera-photo/dslr" element={<Dslr />} />
                  <Route path="/products/camera-photo/cameraphone" element={<CameraPhone />} />
                  <Route path="/products/camera-photo/actioncamera" element={<ActionCamera />} />
                  <Route path="/products/camera-photo/digitalcamera" element={<DigitalCamera />} />
                  <Route path="/products/smart-phone-table/apple" element={<Apple />} />
                  <Route path="/products/smart-phone-table/samsung" element={<Samsung />} />
                  <Route path="/products/smart-phone-table/lg" element={<Lg />} />
                  <Route path="/products/smart-phone-table/sony" element={<Sony />} />
                  <Route path="/products/sport-outdoor/sports-equipment" element={<SportsEquipment />} />
                  <Route path="/products/sport-outdoor/outdoor-apparel" element={<OutdoorApparel />} />
                  <Route path="/products/sport-outdoor/camping-&-hiking" element={<CampingHiking />} />
                  <Route path="/products/sport-outdoor/water-sports" element={<WaterSports />} />
                  <Route path="/products/jewelry-watches/fine-jewelry" element={<FineJewelry />} />
                  <Route path="/products/jewelry-watches/fashionjewelry" element={<FashionJewelry />} />
                  <Route path="/products/jewelry-watches/men's-jewelry" element={<MensJewelry />} />
                  <Route path="/products/jewelry-watches/womensjewelry" element={<WomaensJewelry />} />
                  <Route path="/products/health-beauty/skincare" element={<Skincare />} />
                  <Route path="/products/health-beauty/hair-care" element={<HairCare />} />
                  <Route path="/products/health-beauty/makeup" element={<Makeup />} />
                  <Route path="/products/health-beauty/personal-care" element={<PersonalCare />} />
                  <Route path="/products/books-office/books" element={<Books />} />
                  <Route path="/products/books-officee/office-supplies" element={<OfficeSupplies />} />
                  <Route path="/products/books-office/office-furniture" element={<OfficeFurniture />} />
                  <Route path="/products/books-office/computers-&-electronics" element={<ComputersElectroics />} />
                  <Route path="/products/toys-hobbies/toys" element={<Toys />} />
                  <Route path="/products/toys-hobbies/arts-&-crafts" element={<ArtsCrafts />} />
                  <Route path="/products/toys-hobbies/games-&-puzzle" element={<GamesPuzzles />} />
                  <Route path="/products/toys-hobbies/collectibles" element={<Collectibles />} />
                  <Route path="/products/automobiles/new-cars" element={<NewCars />} />
                  <Route path="/products/automobiles/used-cars" element={<UsedCars />} />
                  <Route path="/products/automobiles/car-accessories" element={<CarAccessories />} />
                  <Route path="/products/automobiles/fluids-&-chemicals" element={<FluidsChemicals />} />
                  <Route path="/products/home-decoration/wall-art" element={<WallArt />} />
                  <Route path="/products/home-decoration/lighting" element={<Lighting />} />
                  <Route path="/products/home-decoration/furniture" element={<Furniture />} />
                  <Route path="/products/home-decoration/textiles" element={<Textiles />} />
                  <Route path="/products/portablepersonal/portableelectronics" element={<PortableElectronics />} />
                  <Route path="/products/portablepersonal/personalcaredevices" element={<PersonalCareDevice />} />
                  <Route path="/products/portablepersonal/travelessentials" element={<TravelEssentials />} />
                  <Route path="/products/portablepersonal/HealthFitnessGadgets" element={<HealthFitnessGadgets />} />
                  {/* <Route path="/aboutus" element={<AboutUs />} /> */}
                  <Route path="/pages/:id" element={<AboutUs />} />

                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/Blog" element={<Blog />} />
                  <Route path="blogdetails/:id" element={<Blogdetails />} />
                  <Route path="/category/:categoryId" element={<CategoryPage />} />

                  {/* <Route path="/Login" element={<Login />} /> */}
                  <Route path="/wishlist" element={<Wishlist products={products} />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/Checkout" element={<CheckoutForm />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/product/:id" element={<EyePage />} />
                  <Route path="/products/childpage" element={<ChildPage />} />
                  <Route path="/venderlogin" element={<Venderlogin />} />
                  <Route path="/Riderlogin" element={<Riderlogin />} />


                </Route>


                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute />}>

                  <Route path="/admin/products/types" element={<AddNewProduct />} />
                  <Route path="/admin/products/physical/create" element={<PhysicalCreateProduct />} />
                  <Route path="/admin/products/digital/create" element={<DigitalProductCreate />} />
                  <Route path="/admin/products/license/create" element={<LicenseProductCreate />} />
                  <Route path="/admin/products/listing/create" element={<ListingProductCreate />} />
                  <Route path="/admin/products/catalogs" element={<ProductCatalog />} />
                  <Route path="/admin/products/product-settings" element={<ProductSettings />} />
                  <Route path="/admin/products" element={<ProductList />} />
                  <Route path="/admin/products/deactive" element={<DeactivatedProducts />} />

                  <Route path="/admin/products/add-affiliate/AddAffiliateProduct" element={<AddAffiliateProduct />} />
                  <Route path="/admin/products/AllAffiliateProducts" element={<AffiliateProducts />} />

                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route path="/admin/category" element={<MainCategories />} />
                  <Route path="/admin/subcategory" element={<SubCategories />} />
                  <Route path="/admin/childcategory" element={<ChildCategories />} />

                  <Route path="/admin/blog/settings" element={<BlogSettings />} />
                  <Route path="/admin/blog/categories" element={<Categories />} />
                  <Route path="/admin/blog/posts" element={<Posts />} />
                  <Route path="/admin/blog/manage-staffs" element={<ManageStaffs />} />

                  <Route path="/admin/coupon" element={<SetCoupans />} />
                  <Route path="/admin/social-link" element={<SocialLinks />} />
                  <Route path="/admin/ProductBulkUpload" element={<ProductBulkUpload />} />

                  <Route path="/admin/general-settings/logo" element={<LogoUpload />} />
                  <Route path="/admin/general-settings/favicon" element={<FaviconUpload />} />
                  <Route path="/admin/general-settings/affilate" element={<AffiliateProgram />} />
                  <Route path="/admin/general-settings/popup" element={<PopupBanner />} />
                  <Route path="/admin/general-settings/breadcrumb" element={<BreadcrumbBanner />} />
                  <Route path="/admin/general-settings/contents" element={<WebsiteContents />} />
                  <Route path="/admin/general-settings/error-banner" element={<ErrorPageBanner />} />
                  <Route path="/admin/general-settings/maintenance" element={<WebsiteMaintenance />} />

                  <Route path="/admin/home-page-settings" element={<HomePageSelector />} />
                  <Route path="/admin/page-settings/contact" element={<ContactUs />} />
                  <Route path="/admin/page-settings/customize" element={<HomePageCustomization />} />

                  <Route path="/admin/menu/links" element={<CustomizeMenuLinks />} />
                  <Route path="/admin/shipping" element={<ShippingMethods />} />
                  <Route path="/admin/package" element={<Packagings />} />
                  <Route path="/admin/pickup" element={<PickupLocations />} />
                  <Route path="/admin/slider" element={<SliderComponent />} />
                  <Route path="/admin/service" element={<ServiceComponent />} />
                  <Route path="/admin/partner" element={<PartnersComponent />} />
                  <Route path="/admin/faq" element={<FaqComponent />} />
                  <Route path="/admin/page" element={<PageComponent />} />

                  <Route path="/admin/allorder" element={<AllOrders />} />
                  <Route path="/admin/orderspending" element={<PendingOrders />} />
                  <Route path="/admin/ordersprocessing" element={<ProcessingOrders />} />
                  <Route path="/admin/orderscompleted" element={<CompletedOrders />} />
                  <Route path="/admin/ordersdeclined" element={<DeclinedOrders />} />
                  <Route path="/admin/order/create" element={<ProductUserDetail />} />
                  <Route path="/admin/orders/:id" element={<OrderDetails />} />

                  <Route path="/admin/fonts" element={<Fonts />} />
                  <Route path="/admin/role" element={<Roles />} />
                  <Route path="/admin/cities" element={<Cities />} />
                  <Route path="/admin/states" element={<States />} />
                  <Route path="/admin/TaxManagementForm" element={<TaxManagementForm />} />
                  <Route path="/admin/manage/country/tax" element={<ManageTax />} />
                  <Route path="/tax/country/:id" element={<EditTax />} />

                  <Route path="/tax/country" element={<EditTax />} />
                  <Route path="/admin/manage/country" element={<Countries />} />

                  <Route path="/admin/users" element={<CustomersList />} />
                  <Route path="/admin/users/deposits/all" element={<CompletedDeposits />} />
                  <Route path="/admin/users/deposits/pending" element={<PendingDeposits />} />
                  <Route path="/admin/users/transactions" element={<Transactions />} />
                  <Route path="/admin/users/withdraws" element={<Withdrawals />} />


                  {/* <Route path="/admin/users/withdraws" element={<CustomerDetails />} /> */}
                  {/* <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} /> */}
                  <Route path="/admin/tax/calculate" element={<TaxCalculate />} />
                  <Route path="/admin/subscription/earning" element={<SubscriptionEarnings />} />
                  <Route path="/admin/withdraw/earning" element={<WithdrawEarnings />} />
                  <Route path="/admin/commission/earning" element={<CommissionEarningDashboard />} />
                  <Route path="/admin/ratings" element={<ProductReviews />} />
                  <Route path="/admin/reports" element={<ProductDiscussionReports />} />

                  <Route path="/admin/riders" element={<RidersList />} />
                  <Route path="/admin/riders/withdraws" element={<Withdraws />} />

                  <Route path="/admin/vendors" element={<VendorsList />} />
                  <Route path="/admin/vendors/withdraws" element={<VendorsWithdraws />} />
                  <Route path="/admin/vendors/subs/completed" element={<CompletedVendorSubscriptions />} />
                  <Route path="/admin/vendors/subs/pending" element={<PendingVendorSubscriptions />} />

                  <Route path="/admin/verificatons/all" element={<VendorVerifications />} />
                  <Route path="/admin/verificatons/pending" element={<PendingVerifications />} />
                  <Route path="/admin/subscription" element={<VendorSubscriptionPlans />} />
                  <Route path="/admin/arrival" element={<BestMonthOffer />} />
                  <Route path="/admin/deal/of/day" element={<DealOfDay />} />

                  <Route path="/admin/customerdetails" element={<CustomerDetails />} />
                  <Route path="/admin/user/default/image" element={<CustomerDefaultImage />} />
                  <Route path="/admin/tickets" element={<Tickets />} />
                  {/* <Route path="/admin/disputes" element={<Disputes />} /> */}
                  <Route path="/admin/Coversation" element={<ConversationDetails />} />

                  <Route path="/admin/email-templates" element={<EmailTemplates />} />
                  <Route path="/admin/email-config" element={<EmailConfiguration />} />
                  <Route path="/admin/groupemail" element={<GroupEmail />} />

                  <Route path="/admin/payment-informations" element={<PaymentInformation />} />
                  <Route path="/admin/paymentgateway" element={<PaymentGatewayComponent />} />
                  <Route path="/admin/currency" element={<Currencies />} />
                  <Route path="/admin/rewards" element={<RewardsManagement />} />

                  <Route path="/admin/social/facebook" element={<FacebookLoginSettings />} />
                  <Route path="/admin/social/google" element={<GoogleLoginSettings />} />

                  <Route path="/admin/products/popular/30" element={<PopularProducts />} />
                  <Route path="/admin/seotools/analytics" element={<GoogleAnalyticsSettings />} />
                  <Route path="/admin/seotools/keywords" element={<MetaKeywordsSettings />} />

                  <Route path="/admin/subscribers" element={<SubscriberTable />} />

                  <Route path="/" element={<Navigate to="/dashboard" />} />

                </Route>




                <Route path="/login" element={<Login onLogin={handleLogin} />} />


                {/* Fallback for Undefined Routes */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>

            {/* Public Footer */}
            {!isAuthenticated && <EcomFooter />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
