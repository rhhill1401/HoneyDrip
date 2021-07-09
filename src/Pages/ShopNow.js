import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Ul } from "../Pages/ShopHeader";
import { Li } from "../Pages/ShopHeader";
import { Lia } from "../Pages/ShopHeader";

const useStyles = makeStyles({
  root: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 900,
  },

  ul: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },

  li: {
    float: "left",
  },

  "li a": {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: 16,
    textDecoration: "none",
  },

  // logo: {
  //   maxWidth: 90,
  //   marginRight: "30px",
  //   fontFamily: ["Kalam"],
  //   padding: 0,
  // },
  // gridContainer: {
  //   display: "grid",
  //   gridTemplateAreas: "header  main  footer",
  //   gridTemplateRows: "5 rem  1fr 5rem",
  //   gridTemplateColumns: "1fr",
  //   backgroundColor: "#203040",
  //   fontFamily: "Poppins",
  //   fontStyle: "normal",
  //   fontWeight: 900,
  //   fontSize: " 0.875rem",
  // },
  // header: {
  //   gridArea: "header",
  //   backgroundColor: "#ffffff",
  // },
  // main: {
  //   gridArea: "main",
  // },
  // footer: {
  //   gridArea: "footer",
  //   backgroundColor: "#203040",
  //   color: "#fff",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

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
    </div>
  );
};
export default ShopNow;
