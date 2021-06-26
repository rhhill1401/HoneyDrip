import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const UseStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "transparent",
    marginTop: 50,
    padding: 20,
  },

  title: {
    fontSize: 56,
    color: "#ffff",
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "Roboto",
    textAlign: "center",
    letterSpacing: "-0.05em",
    textDecorationLine: "underline",
    textDecorationColor: "#F6D05C",
    textUnderlineOffset: 20,
  },
  pos: {
    marginBottom: 12,
  },

  subTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    letterSpacing: -0.01,

    color: "#FFF",
  },
});

function TextCard(props) {
  const classes = UseStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {" "}
          {props.Header}
        </Typography>

        <Typography className={classes.subTitle}>{props.subTitle}</Typography>
      </CardContent>
    </Card>
  );
}
export default TextCard;

/* Group 16 */

// position: absolute;
// width: 689px;
// height: 129px;
// left: 384px;
// top: 788px;

/* Honey Drip offers a personalized selection of the best CBD */

// position: absolute;
// width: 689px;
// height: 45px;
// left: 384px;
// top: 872px;

// font-family: Roboto;
// font-style: normal;
// font-weight: bold;
// font-size: 26px;
// line-height: 30px;
// text-align: center;
// letter-spacing: -0.01em;

// color: #FFFFFF;

/* Join the waitlist */

// position: absolute;
// width: 401px;
// height: 82px;
// left: 519px;
// top: 788px;

// font-family: Roboto;
// font-style: normal;
// font-weight: bold;
// font-size: 56px;
// line-height: 66px;
// text-align: center;
// letter-spacing: -0.05em;

// color: #FFFFFF;

/* Line 2 */

// position: absolute;
// width: 365px;
// height: 0px;
// left: 546px;
// top: 857px;

// border: 2px solid #F6D05C;
/* Background */

/* . */

// position: absolute;
// width: 38px;
// height: 218px;
// left: 485px;
// top: 297px;

// font-family: Poppins;
// font-style: normal;
// font-weight: 600;
// font-size: 145px;
// line-height: 217px;
// /* identical to box height */

// color: #FFC758;
