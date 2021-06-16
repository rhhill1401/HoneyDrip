import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid",
    background: "clear",
    borderColor: "white",
    borderRadius: 20,
    lineHeight: 1.5,
    letterSpacing: "0.02857em",
    minWidth: "80px",
    width: 170,
    height: 48,
    boxShadow:
      "1px 3px 3px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%)",
    "&:hover": {
      backgroundColor: "#545AF6",
      borderColor: "#0062cc",
      boxShadow: "none",
      color: "white",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    color: "white",
    padding: "6px 12px",
    fontFamily: ["Roboto"],
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: " 0.875rem",
  },
});

function OutlinedCustomButton(props) {
  const classes = useStyles();
  return <Button className={classes.root}>{props.text}</Button>;
}
export default OutlinedCustomButton;

/* Rectangle 4 */

// position: absolute;
// width: 170px;
// height: 48px;
// left: 182px;
// top: 590px;

// background: #FFFFFF;
// border-radius: 40px;
