import React, { Component } from "react";
import Login from "./Login";
// import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";
// import ShoppingCart from "./ShoppingCart";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Login></Login>
      </React.Fragment>
    );
  }
}

//End of Chapter 7

//json-server react-db.json --watch --port=500
