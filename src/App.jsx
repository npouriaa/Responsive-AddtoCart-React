import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super();
  //   console.log("Ápp constructor");
  // }

  // componentDidMount() {
  //   console.log("Ápp componentDidMount");
  // }

  // static getDerivedStateFromProps(prevProps, prevState) {
  //   console.log("prevState", prevState);
  //   console.log("prevProps", prevProps);
  //   console.log("App getDerivedStateFromProps");
  //   return null;
  // }

  state = {
    showSideMenu: false,
    cartProducts: [],
  };

  showCart = (data) => {
    const filteredArr = data.filter((i, index) => {
      return data.findIndex((product) => product.id === i.id) === index;
    });
    this.setState({ cartProducts: filteredArr });
  };

  deleteHandler = (item) => {
    let array = [...this.state.cartProducts];
    let itemIndex = array.indexOf(item);
    array.splice(itemIndex, 1);
    console.log(item)
    this.setState({ cartProducts: array });
  };

  CountHandler = (i, op) => {
    let array = [...this.state.cartProducts];
    let itemIndex = array.indexOf(i);
    array[itemIndex].count += op;
    if (array[itemIndex].count === 0) {
      array[itemIndex].count = 1;
    }
    this.setState({ cartProducts: array });
  };

  setShowSideMenu = (b) => {
    this.setState({ showSideMenu: b });
  };

  setCartProducts = (array) => {
    this.setState({ cartProducts: array });
  };

  render() {
    // console.log("App render");
    return (
      <div className="container">
        <Header
          cartCount={this.state.cartProducts.length}
          showSideMenu={this.setShowSideMenu}
        />
        <Products
          cartListArray={this.state.cartProducts}
          setcartListArray={this.setCartProducts}
          productsArray={this.showCart}
        />
        {this.state.showSideMenu ? (
          <Cart
            deleteHandler={this.deleteHandler}
            CountHandler={this.CountHandler}
            cartProducts={this.state.cartProducts}
            showSideMenu={this.setShowSideMenu}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;

//Components Life cycle
// Mounting
// Update
// unMounting
