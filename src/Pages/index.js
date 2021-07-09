import React, { useState, useRef, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SecondCard from "../components/secondCard";
import { BrowserRouter as Router } from "react-router-dom";
import FirstCard from "../components/firstCard";
import ThirdCard from "../components/thirdCard";
import TextCard from "../components/TextCard";
import FourthCard from "../components/fourthCard";
import SixCard from "../components/sixCard";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //* animation */

  let secondCard = useRef(null);
  let beginning = useRef(null);
  let textMiddle = useRef(null);
  let Brands = useRef(null);
  let products = useRef(null);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "JoinWaitList",
      // start: "ExpectBetter",
      pin: "JoinWaitList",
      // markers: true,
      toggleActions: "play pause none complete",
    },
  });

  useEffect(() => {
    const weedBox = secondCard;
    const ExpectBetter = beginning;
    const JoinWaitList = textMiddle;
    const brands = Brands;
    const AugustCollection = products;
    gsap.from(weedBox, 1.4, {
      x: 320,
      opacity: 0,
      duration: 9,
      ease: Power3.easeOut,
      delay: 0.7,
    });

    gsap.from(ExpectBetter, 1.4, {
      x: -320,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.7,
      duration: 9,
    });

    tl.from(JoinWaitList, {
      duration: 2,
      y: 200,

      scrub: 2,
      // start: "top center",
      // end: "top 100px",
      opacity: 0,
      delay: 0.5,
      // ease: Power3.easeOut,
    });

    // gsap.from(AugustCollection, {
    //   scrollTrigger: {
    //     trigger: "AugustCollection",

    //     markers: true,
    //     toggleActions: "restart none restart pause",
    //   },
    //   duration: 2,
    //   y: 600,
    //   scrub: 2,
    //   delay: 0.08,

    //   opacity: 0,

    //   // ease: Power3.easeOut,
    // });
  });

  //** scroll animation */

  return (
    <div>
      <Container
        maxWidth="1000vw"
        height="100%"
        style={{ backgroundColor: "#103AB0" }}
      >
        <Grid
          container
          spacing={1}
          justify="center"
          alignItems="flex-start"
          style={{
            backgroundColor: "",
            marginTop: -30,
            maxWidth: "100vw",
          }}
        >
          <Grid
            className="BigAdd"
            ref={(el) => (beginning = el)}
            item
            xs={1}
            sm={7}
            style={{ marginBottom: 30, marginTop: 150, maxWidth: 1000 }}
          >
            <FirstCard
              bigTitle="EXPECT BETTER PERIOD"
              subTitle="The highest quality CBD and THC by the top brands delivered straight to your door."
            />
          </Grid>
          <Grid
            className="MedAdd"
            ref={(el) => (secondCard = el)}
            item
            xs={1}
            sm={3}
            style={{
              marginLeft: 25,
              marginBottom: 30,
              marginTop: 150,
              maxWidth: 435,
            }}
          >
            <SecondCard
              title="Grape Ape Soda Delta"
              secondDescription="Grape Ape Soda by Mints is here to satisfy all grape cravings. Be prepared to enjoy the deep embrace of Grape Ape with a hint of pop."
              description="Grape Ape Soda Delta 8 Vape Pod by MINTS (500mg) *Stiiizy Compatible*"
            />
          </Grid>

          <Grid xs={12} sm={12} ref={(el) => (textMiddle = el)}>
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
            className="sectionSecond"
            ref={(el) => (Brands = el)}
          >
            <FourthCard />
          </Grid>
          <Grid
            xs={0}
            sm={12}
            style={{ backgroundColor: "#103AB0", padding: 4 }}
            ref={(el) => (products = el)}
          >
            <SixCard image="/images/cookiesBag-1.png " />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Home;
/* Background */

// position: absolute;
// width: 762px;
// height: 556px;
// left: 138px;
// top: 197px;

// background: linear-gradient(64.84deg, #0B2C86 30.18%, #2455D5 100.77%, #FFFFFF 119.92%);
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 30px;

/* Rectangle 6 */

// position: absolute;
// width: 335px;
// height: 556px;
// left: 956px;
// top: 197px;

// background: #2455D5;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 30px;
