import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import d from "../../Images/p-1.jpg";

const Cart = (props) => {
  const [price, setPrice] = useState(0);

  const calculateTotal = () => {
    let totalPrice = 0;
    props.cartProducts.map((item) => {
      totalPrice += item.count * item.price;
      setPrice(totalPrice);
    });
  };

  const inputRef = useRef(null)

  useEffect(() => {
    calculateTotal();
  });

  return (
    <div className="cart-sec">
      <div className="cart-sec-con">
        <div className="bg-opacity"></div>
        <aside>
          <div className="aside-header">
            <h4>Your Cart</h4>
            <svg
              onClick={() => props.showSideMenu(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="aside-content">
            {props.cartProducts.length > 0 ? (
              props.cartProducts.map((i) => (
                <div key={i.id} className="aside-content-product">
                  <div className="aside-content-product-img">
                    <img src={i.src} alt="" />
                  </div>
                  <div className="aside-content-product-info">
                    <p>{i.title}</p>
                    <p className="price">${i.count * i.price}</p>
                    <div className="btn-con">
                      <button onClick={() => props.CountHandler(i, +1)}>
                        +
                      </button>
                      <p>{i.count}</p>
                      <button onClick={() => props.CountHandler(i, -1)}>
                        -
                      </button>
                      <svg
                        onClick={() => props.deleteHandler(i)}
                        id="trash"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="noP">Your Cart Is Empty . . . .</p>
            )}
          </div>
          <div className="totalPrice">
            <p>Total Price : {price}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
