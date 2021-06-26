import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SimpleCard from "./SimpleCard";
const useStyles = makeStyles({
  root: {
    // width: 750,
    textAlign: "left",
  },

  featured: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 60,
    color: "#333333",
    marginBottom: 0,
    top: 0,
    textAlign: "left",
    color: "#545Af6",
  },
  pos: {
    paddingTop: 20,
    textAlign: "left",
    fontFamily: "Roboto",
    color: "#fff",
  },
  headLine: {
    float: "right",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 60,
  },
});

function AdCardMid() {
  const classes = useStyles();
  return (
    <div className="card">
      <div class="container4" style={{ marginLeft: 30 }}>
        <Typography className={classes.pos}>Shop</Typography>

        <Typography className={classes.featured}>Featured Product</Typography>
      </div>
      <div className="row">
        <div class="column" style={{ marginLeft: 30 }}>
          <img
            className="adjustImg"
            src="/images/mintBananna copy.png"
            alt="Delta 8 "
            style={{ width: 700 }}
          />
        </div>

        <div class="column" style={{ width: 450, marginLeft: 0 }}>
          <SimpleCard />
        </div>
      </div>
    </div>
  );
}
export default AdCardMid;
