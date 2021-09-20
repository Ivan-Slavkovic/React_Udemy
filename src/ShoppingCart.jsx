import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  constructor(props) {
    // console.log("constructor -Shopping-Cart");
    //initialization of the state
    super(props); //calling super class's constructor
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render -Shopping-Cart");

    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  } //end of render

  //executes after construct and render method and here http requiests are executed
  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products");
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDidUpdate -ShoppingCart",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
    // if (prevProps.x === this.props.x) {
    //   //always make https with some condition becase componentDidUpdate
    //   //will run on every click/action
    // }
  }
  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("componentWillUnmount -ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch - ShoppingCart");
    // console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //incrementing the quantity of a product
  handleIncrement = (product, maxValue) => {
    //cloning the product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
    }
    //update the state so we can render this change
    this.setState({ products: allProducts });
  };
  //decrementing the quantity of a product
  handleDecrement = (product, minValue) => {
    //cloning the product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
    }
    //update the state so we can render this change
    this.setState({ products: allProducts });
  };

  //delete a product
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //delete product base on index
    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
      //update state because of the render
      this.setState({ products: allProducts });
    }
  };
}
