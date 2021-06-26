import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import BlueButton from "./Buttons/BlueButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1700,
    borderRadius: 30,
    backgroundColor: "#ffc758",
    boxShadow: "4px 3px 7px 2px #00000040",
    marginBottom: 60,
  },
  image: {
    maxWidth: 968,
    minWidth: 300,
    maxHeight: 460,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
  },

  Headline: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 80,
    color: "#545Af6",
    marginTop: 30,
  },

  Featured: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 60,
    color: "#333333",
    marginBottom: -30,
  },
}));

function ThirdCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={7}>
          <Grid item sm container xs style={{ margin: 6 }}>
            <Typography
              variant="body2"
              color="textSecondary"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              SHOP
            </Typography>
            <Typography
              className={classes.Featured}
              style={{ margin: 1 }}
              variant="subtitle1"
              gutterBottom
            >
              Featured Product
            </Typography>

            <Grid item style={{ padding: 0 }}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="/images/mintBanannacrop.png"
                />
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography className={classes.Headline}>
                  Strawnana Delta 8
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="textSecondary"
                  style={{ marginBottom: 50 }}
                >
                  Strawnana by Mints is a sweet strain that is reminiscent of a
                  strawberry banana smoothie. This hybrid strain was only
                  possible by crossing Banana OG with Bubble Gum, and is truly
                  enjoyed by all. *Premium Battery Starter Kit not included
                </Typography>

                <BlueButton text={"Learn More"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default ThirdCard;

/* Strawnana Delta 8 */

// position: absolute;
// width: 681px;
// height: 104px;
// left: 627px;
// top: 1242px;

// font-family: Roboto;
// font-style: normal;
// font-weight: 300;
// font-size: 89px;
// line-height: 104px;
// text-align: center;
// letter-spacing: -0.02em;

// color: #333333;

/* Featured Product */

// position: absolute;
// width: 646px;
// height: 50px;
// left: -58px;
// top: 1191px;

// font-family: Roboto;
// font-style: normal;
// font-weight: 300;
// font-size: 60px;
// line-height: 70px;
// text-align: center;
// letter-spacing: 0.06em;

// color: #333333;
