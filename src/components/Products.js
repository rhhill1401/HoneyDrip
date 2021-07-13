import React, { Component } from "react";
import ShopButton from "./Buttons/ShopButton";
import formatCurrency from "../util";
export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt="{product.title}"></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <ShopButton text="Add To Cart">Add to Cart</ShopButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
