import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  imgCup: {
    maxHeight: 100,
    padding: 50,
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1400,
    maxHeight: "100%",

    minWidth: 300,
    borderRadius: 30,
    backgroundColor: "#2455D5",
    boxShadow: "4px 3px 7px 2px #00000040",
    textAlign: "center",
    marginBottom: 60,
  },

  Headline: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 86,
    color: "#fff",
    textDecoration: "underline",
    textDecorationColor: "#f6d05c",
    marginBottom: 20,
    marginTop: 30,
  },

  logo1: {
    maxHeight: 100,
  },

  logo2: {
    maxHeight: 140,
  },

  logo3: {
    maxHeight: 120,
  },

  logo4: {
    maxHeight: 200,
  },
  titleContainer: {
    maxWidth: "100%",
    minWidth: 300,
    maxHeight: "auto",
    margin: "0 auto",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  container: {
    // backgroundColor: "black",
    maxWidth: "100%",
    maxHeight: "100%",

    minWidth: 300,
    textAlign: "center",
    paddingTop: 0,
    paddingBottom: 30,
    margin: "0 auto",

    borderRadius: 20,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
  },

  bottomContainer: {
    padding: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function FourthCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <div className="Title">
            {" "}
            <h1 className={classes.Headline}>BRANDS</h1>
          </div>
          <div className={classes.container}>
            <div className={classes.imgCup}>
              <img
                className={classes.logo1}
                src="/images/Mints.png"
                alt="Mint Logo"
              />
            </div>
            <div className={classes.imgCup}>
              <img
                className={classes.logo2}
                src="/images/cookieslogo.png"
                alt="Cookies Logo"
              />
            </div>
            <div className={classes.imgCup}>
              <img
                className={classes.logo3}
                src="/images/EFFEX.png"
                alt="Effex Logo"
              />
            </div>
            <div className={classes.bottomContainer}>
              <img
                className={classes.logo4}
                src="/images/El+Guaches+Market_Final-02.png"
                alt="ElGuaches logo"
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
export default FourthCard;
