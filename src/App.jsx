//Imports
import React from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import "./App.css";

class App extends React.Component {

  //States
  state = {
    showSideMenu: false,
    cartProducts: [],
  };

  //Show products handler function
  showCart = (data) => {
    const filteredArr = data.filter((i, index) => {
      return data.findIndex((product) => product.id === i.id) === index;
    });
    this.setState({ cartProducts: filteredArr });
  };

  //Delete product from cart function
  deleteHandler = (item) => {
    let array = [...this.state.cartProducts];
    let itemIndex = array.indexOf(item);
    array.splice(itemIndex, 1);
    console.log(item)
    this.setState({ cartProducts: array });
  };

  //Show product count function
  CountHandler = (i, op) => {
    let array = [...this.state.cartProducts];
    let itemIndex = array.indexOf(i);
    array[itemIndex].count += op;
    if (array[itemIndex].count === 0) {
      array[itemIndex].count = 1;
    }
    this.setState({ cartProducts: array });
  };

  //Show sidemenu section function
  setShowSideMenu = (data) => {
    this.setState({ showSideMenu: data });
  };

  //Update cart function 
  setCartProducts = (array) => {
    this.setState({ cartProducts: array });
  };

  render() {
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