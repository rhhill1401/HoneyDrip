import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: 0,
    background: "white",
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

      color: "white",
    },
    color: "#545AF6",
    padding: "6px 12px",
    fontFamily: ["Roboto"],
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: " 0.875rem",
  },
});

function CustomButton(props) {
  const classes = useStyles();
  return <Button className={classes.root}>{props.text}</Button>;
}
export default CustomButton;
