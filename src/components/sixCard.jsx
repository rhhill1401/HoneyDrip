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

    // padding: 90,
  },

  bottomContainer: {
    padding: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  productCup: {
    display: "flex",
    flexDirection: "row",
    minWidth: 300,
  },
}));

// function createCard(products) {
//   return (
//     <ProductCard
//       Title={products.title}
//       description={products.description}
//       image={products.imgURL}
//     />
//   );
// }

function SixCard(props) {
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
          <Grid container className={classes.container} spacing={3}>
            <Grid container item xs className={classes.productCup} spacing={0}>
              <ProductCard
                Title="GSC"
                image="/images/mintsCookie-1.png"
                description="GSC by Mints is of the best tasting and strongest strains around. This highly sought after hybrid strain is crafted by crossing OG Kush with Durban Poison."
              />
            </Grid>
            <Grid item xs className={classes.productCup}>
              {" "}
              <ProductCard
                Title="Monk Fruit"
                image="/images/cookiesBag-1.png"
                description="Experience rich, full flavor with our CBD flower. Our flower is indoor-grown, cured, and manicured to perfection. "
              />
            </Grid>

            <Grid item xs className={classes.productCup}>
              {" "}
              <ProductCard
                Title="EFFEX DIESEL PREMIUM DELTA 8 THC INFUSED HEMP FLOWER"
                image="/images/SourDieselEffex.png"
                description="Delta Effex introduces our Sour Diesel Premium Delta 8 THC infused hemp flower! Sour Diesel has been a fan favorite since the 1990s and for good reason...."
              />
            </Grid>
            <Grid item xs className={classes.productCup}>
              {" "}
              <ProductCard
                Title="Exotic Blvd Lay's Chile Lime"
                image="/images/ChiliLimeElGua.png"
                description="The newest addition to our Thai collection! Enjoy the familiar lime zest flavor that's only paired better with spicy chili heat."
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SixCard;
