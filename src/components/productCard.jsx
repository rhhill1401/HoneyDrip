import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import BlueButton from "./Buttons/BlueButton";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    maxWidth: 300,
    minWidth: 250,
    minHeight: 550,
    borderRadius: 30,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff",

    // boxShadow: "3px 2px 8px 1px #00000040",
  },

  image: {
    maxWidth: 200,
    maxHeight: 300,
    minWidth: 200,
    minHeight: 250,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
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
    fontWeight: 400,
    fontSize: 15,
    marginBottom: 20,
    maxWidth: 500,
    maxHeight: 80,
    minWidth: 200,
    minHeight: 50,
  },

  buttonB: {
    minWidth: "10px",
    // width: 30,
    height: 10,
    padding: 0,
    marginTop: 30,
  },

  body2: {
    maxWidth: 500,
    maxHeight: 200,
    minWidth: 200,
    minHeight: 130,
    marginBottom: 30,
  },
}));

function ProductCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container xs={0} spacing={2} className={classes.imgContainer}>
          <Grid item>
            <ButtonBase xs={12} container item className={classes.image}>
              <img className={classes.img} src={props.image} alt="delta8" />
            </ButtonBase>

            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.subTitle}
              >
                {props.Title}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.body2}
              >
                <p> {props.description}</p>
              </Typography>
            </Grid>
            <Grid item xs className={classes.buttonB}>
              <BlueButton gutterBottom text="Add to cart" />
            </Grid>
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
