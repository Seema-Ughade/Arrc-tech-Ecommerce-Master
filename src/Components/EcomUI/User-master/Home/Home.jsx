// import React from "react";
// import "./Hero.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Slider from "./Slider";
// import MonthOffer from "./MonthOffer";
// import Categories from "./Categories";
// import Features from "./Features";
// import Deal from "./Deal";
// import OurPartners from "./OurPartners";
// import SellingProduct from "./SellingProduct";
// import Testimonial from "./Testimonial";
// import LatestPost from "./LatestPost";

// import Carousel from "./Carousel";

// const Home = () => {

//   return (
//     <div className="relative">
//       <Carousel />
//       <Slider />
//       <MonthOffer />
//       <Categories />;
//       <Features />
//       <Deal />
//       <OurPartners />
//       <SellingProduct />
//       <Testimonial />
//       <LatestPost />
//     </div>
//   );
// };
// export default Home;



import React, { Suspense, lazy } from "react";
import "./Hero.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = lazy(() => import("./Carousel"));
const Slider = lazy(() => import("./Slider"));
const MonthOffer = lazy(() => import("./MonthOffer"));
const Categories = lazy(() => import("./Categories"));
const Features = lazy(() => import("./Features"));
const Deal = lazy(() => import("./Deal"));
const OurPartners = lazy(() => import("./OurPartners"));
const SellingProduct = lazy(() => import("./SellingProduct"));
const Testimonial = lazy(() => import("./Testimonial"));
const LatestPost = lazy(() => import("./LatestPost"));

const LoadingFallback = () => <div>Loading...</div>;

const Home = () => {
  return (
    <div className="relative">
      <Suspense fallback={<LoadingFallback />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Slider />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MonthOffer />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Features />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Deal />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <OurPartners />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <SellingProduct />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <LatestPost />
      </Suspense>
    </div>
  );
};

export default Home;

