import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar"
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Home from "./pages/Home/index";
import Profile from "./pages/Profile/index";
import API from "./utils/userAPI";

class App extends Component {
  state = {
    authorized: false,
    user: {}
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        res.data.message ? 
          this.setState({
            authorized: false
          })
        : this.setState({
          authorized: true,
          user: res.data
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        window.location.reload(false)
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar logout={this.logout} authorized={this.state.authorized} />
          <Switch>

            <Route exact path="/">
              <Home isAuthorized={this.isAuthorized} user={this.state.user} authorized={this.state.authorized} />
            </Route>

            <Route exact path="/login">
              {this.state.authorized ?
                (<Redirect to="/" />) :
                (<Login isAuthorized={this.isAuthorized} authorized={this.state.authorized} />)
              }
            </Route>

            <Route exact path="/register">
              {this.state.authorized ?
                (<Redirect to="/" />) :
                (<Register isAuthorized={this.isAuthorized} />)
              }
            </Route>

            <Route exact path="/profile">
              {this.state.authorized ? 
                (<Profile user={this.state.user} />) : 
                (<Redirect to="/login" />)
              }
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
