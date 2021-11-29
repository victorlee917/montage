import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Bogus from "../Routes/Bogus";
import { Helmet } from "react-helmet";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/bogus" exact component={Bogus} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
