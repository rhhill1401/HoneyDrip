import React from "react";

import data from "../data.json";
import Products from "../components/Products";
import Filter from "../Shop/Filter";
import { CartNav } from "../components/ShopNav/CartNav";

class ShopNow extends React.Component {
  constructor() {
    super();

    this.state = {
      products: data.products,
      type: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    // impl
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    // impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ type: event.target.value, product: data.products });
    } else {
      this.setState({
        type: event.target.value,
        products: data.products.filter(
          (product) => product.availableTypes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <div
          className="grid-container"
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 900,
          }}
        >
          <header>
            <CartNav link1="Products" link2="Pre-rolls" link3="Pods" />
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter
                  count={this.state.products.length}
                  type={this.state.type}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                ></Filter>
                <Products products={this.state.products}></Products>
              </div>
              <div className="sidebar">Cart Items</div>
            </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </div>
    );
  }
}
export default ShopNow;
