import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/userAPI";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  login = event => {
    event.preventDefault();
    API.login({
      username: this.state.username.toLowerCase(),
      password: this.state.password
    })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          console.log("login successful")
          this.props.isAuthorized();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });
    this.setState({ password: "" });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container" style={contStyle}>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            {this.state.error ? <p>{this.state.error}</p> : ""}
            <button
              className="btn btn-primary"
              disabled={
                this.state.username && this.state.password ? "" : "disabled"
              }
              onClick={this.login}
            >Login</button>
            <br></br>
            <Link to="/register">Not registered? Click here.</Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const contStyle = {
  marginTop: "20px",
  width: "300px"
}

export default Login;
