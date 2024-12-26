import React from "react";
import allimg from "../Assets/allpage.png";
import "./Product.css";
import ProductGrid from "./ProductGrid";

const Products = () => {
  return (
    <div className="products">
      <div className="productHeader">
        <img src={allimg} alt="" className="pimg lg:h-[50vh] md:h-[30vh] sm:h-[25vh] "/>

        <ProductGrid />
      
      </div>
    </div>
  );
};

export default Products;
