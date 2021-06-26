import React, { useState } from "react";
import { useIntersection } from "react-use";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SecondCard from "./secondCard";
import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import FirstCard from "./firstCard";
import ThirdCard from "./thirdCard";
import TextCard from "./TextCard";
import FourthCard from "./fourthCard";
import SixCard from "./sixCard";
import gsap from "gsap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sectionRef = React.useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

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
          alignItems="flex-start"
          style={{ backgroundColor: "", marginTop: -30 }}
        >
          <Grid
            className="BigAdd"
            item
            xs={1}
            sm={7}
            style={{ marginBottom: 30, marginTop: 150 }}
          >
            <FirstCard
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
            <SecondCard
              title="Grape Ape Soda Delta"
              secondDescription="Grape Ape Soda by Mints is here to satisfy all grape cravings. Be prepared to enjoy the deep embrace of Grape Ape with a hint of pop."
              description="Grape Ape Soda Delta 8 Vape Pod by MINTS (500mg) *Stiiizy Compatible*"
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextCard
              Header="Join the waitlist"
              subTitle="Honey Drip  offers a personalized selection of the best CBD"
            />
          </Grid>

          <Grid xs={0} sm={7} style={{ marginBottom: 30 }}>
            <ThirdCard />
          </Grid>
          <Grid
            xs={0}
            sm={12}
            style={{ backgroundColor: "#103AB0", padding: 4 }}
          >
            <FourthCard />
          </Grid>
          <Grid
            xs={0}
            sm={12}
            style={{ backgroundColor: "#103AB0", padding: 4 }}
          >
            <SixCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
