import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #2455d5;
  height: 150px;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ffc758;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  margin-right: 24px;
  padding: 1rem;

  white-space: nowrap;
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -4px;

  white-space: nowrap;

  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnlink = styled(Link)`
  border-radius: 10px;
  background: #fff;
  padding: 10px 22px;
  color: #2455d5;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffc758;
    color: #fff;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #ffc758;
  justify-self: flex-start;
  curser: pointer;
  font-size: 1rem;
  display: flex align-items center;
  font-weight: 100;
  text-decoration: none;
  font-family: Kalam;
  -webkit-text-stroke: 1px black;
  max-width: 60;
  align-items: center;
  padding: 0 1rem;
`;
