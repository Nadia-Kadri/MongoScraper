import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            <h1>Mongo Scraper</h1>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className={window.location.pathname === "/" ? "nav-link active border-right" : "nav-link border-right"}>
                <span className="float-right text">
                  Home <span className="sr-only">(current)</span>
                </span>
              </Link>

              {this.props.authorized ?
                (<Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active border-right" : "nav-link border-right" }>
                  <span className="float-right text">
                    Profile <span className="sr-only">(current)</span>
                  </span>
                </Link>) : 
                ("")
              }

              {this.props.authorized ?
                (<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  <span className="float-right text" onClick={this.props.logout}>
                    Logout <span className="sr-only">(current)</span>
                  </span>
                </Link>) : 
                (<Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                  <span className="float-right text">
                    Login / Sign-Up <span className="sr-only">(current)</span>
                  </span>
                </Link>)
              }
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
