import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// import "./index.css";

class Profile extends Component {
  state = {
    
  };

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="custContainer">
          <div className="row m-1">
            <div className="col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h2 className="card-title">Welcome {this.props.user.firstName}!</h2>
                  <p className="card-text">This is your Profile Page that only you have access to. On this page you can view your personal information, see your saved articles, and update/delete any notes. Scroll down to get started!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Personal Information</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th scope="row">Name:</th>
                        <td>{this.props.user.firstName} {this.props.user.lastName}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email:</th>
                        <td>{this.props.user.email}</td>
                      </tr>
                      <tr>
                        <th scope="row">Username:</th>
                        <td>{this.props.user.username}</td>
                      </tr>
                      <tr>
                        <th scope="row">Birthday:</th>
                        <td>{moment(this.props.user.birthday, "YYYY-MM-DDTHH:mm:ss.SSSZ").utc().format("MM/DD/YY")}</td>
                      </tr>
                      <tr>
                        <th scope="row">Date Joined:</th>
                        <td>{moment(this.props.user.created, "YYYY-MM-DDTHH:mm:ss.SSSZ").utc().format("MM/DD/YY")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Your Saved Articles</h4>
                  <div className="card-text">
                    <p>These are all the articles that you've saved. Want to save more? Click <Link to="/">here.</Link></p>
                  </div>
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date saved</th>
                        <th scope="col">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}
export default Profile;