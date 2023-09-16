//Imports
import React, { Component } from "react";
import "./Header.css";
import search_icon from "../../Images/search-i.svg";
import cart_icon from "../../Images/cart_mini-i.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li className="search-li">
              <img src={search_icon} alt="" />
            </li>
            <li
              className="cart-li"
              onClick={() => this.props.showSideMenu(true)}
            >
              <img src={cart_icon} alt="" />
              <p>{this.props.cartCount}</p>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
