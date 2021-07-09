import React from "react";
import Navbar from "./ShopNav/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/index";
import ShopNow from "../Pages/ShopNow";
import About from "../Pages/About";
import Location from "../Pages/Location";
import Menu from "../Pages/Menu";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ShopNow" component={ShopNow} />
        <Route path="/About" component={About} />
        <Route path="/Location" component={Location} />
        <Route path="/Menu" component={Menu} />
      </Switch>
    </Router>
  );
}
export default App;
