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

  subheader: {
    fontSize: 95,
    color: "#ffff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
}));

function SecondCard(props) {
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
        title={props.title}
        subheader="Mint"
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
          {props.description}
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
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{props.secondDescription}</Typography>
          <Typography paragraph>{props.Attribute} </Typography>
          <Typography paragraph>{props.subDescription}</Typography>
          <Typography paragraph>{props.categorie}</Typography>
          <Typography paragraph>{props.categorieDescription}</Typography>
          <Typography paragraph>{props.disclosure}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default SecondCard;

/* weed */

// position: absolute;
// width: 199px;
// height: 308px;
// left: 1019px;
// top: 315px;

// background: url(image.png);
