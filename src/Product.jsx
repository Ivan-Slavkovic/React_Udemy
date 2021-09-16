import React, { Component } from "react";
export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    return (
      <div className="col-lg-6">
        <div class="card m-2 ">
          <div class="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>

          {/*  card body ends here*/}

          <div className="card-footer">{this.props.children}</div>
          <div className="float-left">
            <span className="badge">{this.state.product.quantity}</span>
            <div className="btn-group">
              <div
                className="btn btn-outline-success"
                onClick={() => {
                  this.props.onIncrement(this.state.product, 10);
                }}
              >
                +
              </div>
              <div
                className="btn btn-outline-success"
                onClick={() => {
                  this.props.onDecrement(this.state.product, 0);
                }}
              >
                -
              </div>
            </div>
          </div>

          {/*float-left ends here */}

          {/*   <div className="float-right">{this.props.children}</div>*/}
        </div>
      </div>
    );
  }
}
