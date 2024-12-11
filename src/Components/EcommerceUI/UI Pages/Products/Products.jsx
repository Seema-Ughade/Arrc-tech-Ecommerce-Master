import React from "react";
import allimg from "../../../../assets/Assets/allpage.png";
import "./Product.css";
import ProductGrid from "./ProductGrid";

const Products = () => {
  return (
    <div className="products">
      <div className="productHeader">
        <img src={allimg} alt="" className="pimg" />

        <ProductGrid />

        
      </div>
    </div>
  );
};

export default Products;
