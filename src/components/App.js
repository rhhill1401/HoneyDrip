import React from "react";

import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import SimpleCard from "./TestCard";
import RecipeReviewCard from "./imageCard";
import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
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
            <SimpleCard />
          </Grid>
          <Grid
            className="MedAdd"
            item
            xs={1}
            sm={3}
            style={{ marginLeft: 25, marginBottom: 30, marginTop: 150 }}
          >
            <RecipeReviewCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
