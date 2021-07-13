import React from "react";
import { Ul } from "../Pages/ShopHeader";
import { Li } from "../Pages/ShopHeader";
import { Lia } from "../Pages/ShopHeader";
import data from "../data.json";
import Products from "../components/Products";

class ShopNow extends React.Component {
  constructor() {
    super();

    this.state = {
      products: data.products,
      amount: "",
      sort: "",
    };
  }

products-components
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
            <Ul>
              <Li>
                {" "}
                <Lia href="/">React Shopping Cart</Lia>{" "}
              </Li>
              <Li>
                {" "}
                <Lia href="/">Pre-Rolls</Lia>{" "}
              </Li>
              <Li>
                {" "}
                <Lia href="/">Vaporizers</Lia>{" "}
              </Li>
              <Li>
                {" "}
                <Lia href="/">Edibiles</Lia>
              </Li>
              <Li>
                {" "}
                <Lia href="/">Tropicals</Lia>
              </Li>
              <Li>
                {" "}
                <Lia href="/">Clothing</Lia>
              </Li>
            </Ul>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Products products={this.state.products}></Products>
              </div>
              <div className="sidebar">Cart Items</div>
            </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>

export const ShopNow = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="grid-container">
        <header>
          <Ul>
            <Li>
              {" "}
              <Lia href="/">React Shopping Cart</Lia>{" "}
            </Li>
            <Li>
              {" "}
              <Lia href="/preRolls">Pre-Rolls</Lia>{" "}
            </Li>
            <Li>
              {" "}
              <Lia href="/">Vaporizers</Lia>{" "}
            </Li>
            <Li>
              {" "}
              <Lia href="/">Edibiles</Lia>
            </Li>
            <Li>
              {" "}
              <Lia href="/">Tropicals</Lia>
            </Li>
            <Li>
              {" "}
              <Lia href="/">Clothing</Lia>
            </Li>
          </Ul>
        </header>
        <main>Product List</main>
        <footer>All right is reserved.</footer>

      </div>
    );
  }
}
export default ShopNow;
