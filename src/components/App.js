import React, { useState } from "react";

import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import SimpleCard from "./TestCard";
import RecipeReviewCard from "./imageCard";
import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import TextCard from "./TextCard";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </Router>

      <Container
        maxWidth="xl"
        height="100%"
        style={{ backgroundColor: "#103AB0" }}
      >
        <Grid
          container
          spacing={1}
          justify="center"
          style={{ backgroundColor: "#103AB0" }}
        >
          <Grid
            className="BigAdd"
            item
            xs={1}
            sm={7}
            style={{ marginBottom: 30, marginTop: 150 }}
          >
            <SimpleCard
              bigTitle="EXPECT BETTER PERIOD"
              subTitle="The highest quality CBD and THC by the top brands delivered straight to your door."
            />
          </Grid>
          <Grid
            className="MedAdd"
            item
            xs={1}
            sm={3}
            style={{ marginLeft: 25, marginBottom: 30, marginTop: 150 }}
          >
            <RecipeReviewCard
              title="Grape Ape Soda Delta"
              secondDescription="Grape Ape Soda by Mints is here to satisfy all grape cravings. Be prepared to enjoy the deep embrace of Grape Ape with a hint of pop."
              description="Grape Ape Soda Delta 8 Vape Pod by MINTS (500mg) *Stiiizy Compatible*"
            />
          </Grid>
          <TextCard
            Header="Join the waitlist"
            subTitle="Honey Drip  offers a personalized selection of the best CBD  
"
          />
        </Grid>
      </Container>
    </div>
  );
}
export default App;
