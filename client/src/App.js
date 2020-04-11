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
    userId: false,
    user: {}
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        // console.log(res)
        res.data.message ? 
          this.setState({
            authorized: false,
            userId: false,
          })
        : this.setState({
          authorized: true,
          userId: res.data._id,
          user: res.data
        })
        // console.log(this.state.user)
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

  setRedirect = (pathname) => {
    this.setState({ redirect: pathname });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar logout={this.logout} authorized={this.state.authorized} />
          <Switch>

            <Route exact path="/">
              <Home isAuthorized={this.isAuthorized} user={this.state.user} userId={this.state.userId} authorized={this.state.authorized} />
            </Route>

            <Route exact path="/login">
              <Login isAuthorized={this.isAuthorized} authorized={this.state.authorized} redirect={window.location.pathname} />
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
