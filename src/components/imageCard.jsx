import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "transparent",
    marginTop: 50,
    padding: 20,
    marginLeft: 25,
    color: "#ffff",
  },
  media: {
    height: 320,
    paddingTop: "56.25%", // 16:9
    minWidth: 300,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#ddba4f",
  },

  body2: {
    fontFamily: "Poppins",
    color: "#fff",
  },

  title: {
    fontSize: 95,
    color: "#ffff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },

  text: {
    color: "#fff",
  },
}));

function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            8
          </Avatar>
        }
        action={
          <IconButton style={{ color: "#ffff" }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="YG OG 4Hunnid"
        subheader="Cookies Delta 8"
      />
      <CardMedia
        className={classes.media}
        image="/images/weedMin.png"
        title="Weed Image"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.body2}
          component="p"
        >
          Blue Nova is a sativa-hybrid in the LIFT series. Bred from the classic
          Blueberry and Haze strains, this high-potency strain has a
          delightfully sweet berry taste.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ color: "#ffff" }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{ color: "#ffff" }} aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{ color: "#ffff" }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Dried cannabis flower is primarily ingested via inhalation, either
            by smoking or vaporizing the product. Activation time for smoking or
            vaping is roughly about 5 minutes and can last up to a few hours.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default RecipeReviewCard;

/* weed */

// position: absolute;
// width: 199px;
// height: 308px;
// left: 1019px;
// top: 315px;

// background: url(image.png);
