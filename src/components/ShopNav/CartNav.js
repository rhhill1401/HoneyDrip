import React from "react";
import { Li, Ul, Lia } from "../../Pages/ShopHeader";
export const CartNav = (props) => {
  return (
    <div>
      <Ul>
        <Li>
          {" "}
          <Lia href="/">{props.link1}</Lia>{" "}
        </Li>
        <Li>
          {" "}
          <Lia href="/">{props.link2}</Lia>{" "}
        </Li>
        <Li>
          {" "}
          <Lia href="/">{props.link3}</Lia>{" "}
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
    </div>
  );
};
