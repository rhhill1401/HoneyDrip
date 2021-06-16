import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import CustomButton from "./CustomButton";
import OutlinedCustomButton from "./OutlinedCustomButton";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "transparent",
    marginTop: 50,
    padding: 20,
  },

  title: {
    fontSize: 95,
    color: "#ffff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          EXPECT BETTER PERIOD<Typography className="dot">.</Typography>
        </Typography>

        <Typography variant="h5" component="h2">
          The highest quality CBD and THC by the top brands delivered straight
          to your door.
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: 70 }}>
        <CustomButton text={"TRY ME"} /> <OutlinedCustomButton text={"MENU"} />
      </CardActions>
    </Card>
  );
}
export default SimpleCard;
