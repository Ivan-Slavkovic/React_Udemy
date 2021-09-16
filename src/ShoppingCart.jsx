import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Samsung", price: 4500, quantity: 0 },
      { id: 3, productName: "Sony", price: 7745, quantity: 0 },
      { id: 4, productName: "iPad", price: 1400, quantity: 0 },
      { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
      { id: 6, productName: "Xaomi", price: 5400, quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
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
