import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ProductCard from "./productCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },

  paper: {
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 30,
    padding: 50,
    minWidth: 300,

    backgroundColor: "#F4F4F4",
    boxShadow: "4px 3px 7px 2px #00000040",
    textAlign: "center",
    marginBottom: 60,
  },

  Headline: {
    fontFamily: "Indie Flower, cursive",
    fontStyle: "normal",
    fontWeight: "Bold",
    fontSize: 66,
    color: "#103AB0",
    marginBottom: 0,
    marginTop: 0,
  },

  titleContainer: {
    backgroundColor: "#F4F4F4",
    maxWidth: "100%",
    minWidth: 300,
    maxHeight: "auto",
    margin: "0 auto",

    display: "flex",
    flexDirection: "row",
    alignItems: "flexStart",
    justifyContent: "flexStart",
  },

  container: {
    // backgroundColor: "black",
    maxWidth: "100%",
    maxHeight: "100%",

    minWidth: 300,
    textAlign: "center",
    margin: "0 auto",

    borderRadius: 0,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "flexStart",
  },

  bottomContainer: {
    padding: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

function SixCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography className={classes.Headline}>
              August Collection
            </Typography>
          </Grid>
          <Grid container className={classes.container} spacing={2}>
            <Grid item xs={0} className={classes.imgCup}>
              <ProductCard image="/images/cookiesBag-1.png" />
            </Grid>
            <Grid item xs={0} className={classes.imgCup}>
              <ProductCard image="/images/SourDieselEffex.png" />
            </Grid>
            <Grid item xs={0} className={classes.imgCup}>
              <ProductCard image="/images/ChiliLimeElGua.png" />
            </Grid>
            <Grid item xs={0} className={classes.imgCup}>
              <ProductCard image="/images/mintsCookie-1.png" />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default SixCard;
