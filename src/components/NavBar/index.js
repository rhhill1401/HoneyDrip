import React from "react";
import { FaBars } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

import "/Users/terryhill/Desktop/HoneyDrip/honey-drip/src/index.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const useStyles = makeStyles({
  text: {
    padding: "6px 12px",
    fontFamily: ["Poppins"],
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: " 0.875rem",
  },
  logo: {
    maxWidth: 120,
    marginRight: "30px",
    fontFamily: ["Kalam"],
  },

  container: {
    position: "relative",
    textAlign: "center",
    backgroundColor: "white",
  },
});

const Navbar = ({ toggle }) => {
  const classes = useStyles();
  return (
    <>
      <Nav>
        <NavbarContainer>
          <div>
            <NavLogo to="/">
              <img
                className={classes.logo}
                src="/images/dripWinni.png "
                alt="Logo"
              />{" "}
              <div class="text-wrapper">
                <h1>HoneyDrip</h1>
              </div>
            </NavLogo>
          </div>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu className={classes.text}>
            {" "}
            <NavItem>
              <NavLinks to="About">ABOUT US</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Shop">SHOP MENU</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Discover">DISCOVER</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {/* <OutlinedCustomButton text={"Sign In"} /> */}
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
