import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import BlueButton from "../components/Buttons/BlueButton";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffc758",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: "left",
    color: "#545Af6",
  },
  Headline: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 89,
    paddingTop: 0,
    color: "#545Af6",
  },
  pos2: {
    marginBottom: 22,
    paddingTop: 20,
    textAlign: "center",
    color: "#545Af6",
  },
});

function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0} raised="false">
      <CardContent>
        <Typography className={classes.Headline}>Strawnana Delta 8</Typography>
        <Typography className={classes.pos}>
          Strawnana by Mints is a sweet strain that is reminiscent of a
          strawberry banana smoothie. This hybrid strain was only possible by
          crossing Banana OG with Bubble Gum, and is truly enjoyed by all.
        </Typography>
        <Typography className={classes.pos2}>
          *Premium Battery Starter Kit not included
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <BlueButton text={"Learn More"} />
      </CardActions>
    </Card>
  );
}
export default SimpleCard;
