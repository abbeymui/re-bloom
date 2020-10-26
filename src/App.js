import React, { Component } from "react";
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "./Components/Home";
import Blogs from "./Components/Blogs";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
      </Router>
    );
  }
}

export default App;
