import React, { Component } from "react";
import { Link } from "react-router-dom";
import userAPI from "../../utils/userAPI";
import SavedArticles from "./SavedArticles";
import UserEditAccountModal from "./Modals/UserEditAccount";
import moment from "moment";
import "./index.css";

class Profile extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.getSavedArticles()
  }

  getSavedArticles () {
    userAPI.viewSavedArticles()
      .then(res => {
        console.log(res.data[0].savedArticles)
        this.setState({ savedArticles: res.data[0].savedArticles })
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row m-1">
            <div className="col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card bg-light mb-3 card-height">
                <div className="card-body">
                  <h2 className="card-title">Welcome {this.props.user.firstName}!</h2>
                  <div className="card-text">
                    This is your Profile Page that only you have access to. On this page you can:
                    <ul>
                      <li>View your personal information</li>
                      <li>See your saved articles</li>
                      <li>Add, update, and delete article notes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light mb-3 card-height">
                <div className="card-body">
                  <span className="card-title h4">Personal Information</span><small className="float-right user-edit-account" data-toggle="modal" data-target="#user-edit-account"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</small>
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
                        <th scope="row">Joined:</th>
                        <td>{moment.utc(this.props.user.created).local().format("MM/DD/YY")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          
            <div className="col-sm-12">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Your Saved Articles</h4>
                  <div className="card-text">
                    <p>These are all the articles that you've saved. Want to save more? <Link to="/">Click here.</Link></p>
                  </div>
                  <SavedArticles savedArticles={this.state.savedArticles}/>
                </div>
              </div>
            </div>
          </div>

        </div>
        <UserEditAccountModal />
      </React.Fragment>
    );
  }
}
export default Profile;