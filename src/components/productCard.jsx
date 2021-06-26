import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import BlueButton from "./Buttons/BlueButton";
import { PinDropSharp } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    maxWidth: 300,
    minWidth: 200,
    minHeight: 550,
    borderRadius: 30,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    // boxShadow: "3px 2px 8px 1px #00000040",
  },

  image: {
    maxWidth: 200,
    maxHeight: 400,
    minWidth: 30,
    minHeight: 300,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 30,
  },
  img: {
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",

    flexWrap: "wrap",
    flexShrink: 1,
  },

  imgContainer: {
    display: "flex",

    justifyContent: "center",
    maxwidth: "100%",
  },

  subTitle: {
    color: "#020202",
    fontFamily: "Roboto",
  },

  buttonB: {
    minWidth: "10px",
    width: 50,
    height: 48,
    color: "yellow",
    padding: 0,
  },
}));

function ProductCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container xs={12} spacing={2} className={classes.imgContainer}>
          <Grid item>
            <ButtonBase xs={12} container item className={classes.image}>
              <img className={classes.img} src={props.image} />
            </ButtonBase>

            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.subTitle}
              >
                EFFEX DIESEL PREMIUM DELTA 8 THC INFUSED HEMP FLOWER
              </Typography>

              <Typography variant="body2" color="textSecondary">
                Delta Effex introduces our Sour Diesel Premium Delta 8 THC
                infused hemp flower! Sour Diesel has been a fan favorite since
                the 1990s and for good reason....
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid item>
            <BlueButton className={classes.buttonB} text="Add to cart" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default ProductCard;

/* EFFEX DIESEL PREMIUM DELTA 8 THC INFUSED HEMP FLOWER */

// position: absolute;
// width: 323px;
// height: 11px;

// font-family: Roboto;
// font-style: normal;
// font-weight: 300;
// font-size: 20px;
// line-height: 23px;
// letter-spacing: 0.03em;

// color: #020202;
