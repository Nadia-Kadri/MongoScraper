import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home/index";

class App extends Component {
  state = {

  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
