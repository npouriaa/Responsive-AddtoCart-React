//Imports
import React from "react";
import "./Product.css";

const Products = (props) => {

  let {title , price , imgSrc , click} = props
  
  return (
    <div className="product-sec">
      <div className="product-sec-img">
        <button onClick={click} className="addBtn btnStyle">+</button>
        <img src={imgSrc} alt="" />
      </div>
      <div className="product-sec-title">
        <p>{title}</p>
      </div>
      <div className="product-sec-price">
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Products;
