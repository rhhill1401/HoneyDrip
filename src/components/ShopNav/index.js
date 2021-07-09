import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnlink,
  NavLink,
  NavLogo,
} from "../ShopNav/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Navtext: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: " 0.875rem",
  },

  logo: {
    maxWidth: 90,
    marginRight: "30px",
    fontFamily: ["Kalam"],
    padding: 0,
  },
});

export const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Nav>
        <Bars />

        <NavLogo to="/">
          <img
            className={classes.logo}
            src="/images/dripWinni.png "
            alt="logo"
          />
          <div class="text-wrapper">
            <h1>HoneyDrip</h1>
          </div>
        </NavLogo>

        <NavMenu className={classes.Navtext}>
          <NavLink to="/ShopNow" activeStyle>
            {" "}
            SHOP NOW
          </NavLink>
          <NavLink to="/Menu" activeStyle>
            {" "}
            MENU
          </NavLink>
          <NavLink to="/About" activeStyle>
            {" "}
            ABOUT
          </NavLink>

          <NavLink to="/Location" activeStyle>
            {" "}
            LOCATION
          </NavLink>
        </NavMenu>
        <NavBtn className={classes.Navtext}>
          <NavBtnlink to="/signin">Sign In</NavBtnlink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
