import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = (props) => (
  <React.Fragment>
    <nav className="navbar navbar-expand-md navbar-light bg-light cust-nav">
      <Link to="/" className="nav-link">
        <h1>Mongo Scraper</h1>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-link border-right">
            <span className="text">
              Home <span className="sr-only">(current)</span>
            </span>
          </Link>

          {props.authorized ?
            (<Link to="/profile" className="nav-link border-right">
              <span className="text">
                Profile <span className="sr-only">(current)</span>
              </span>
            </Link>) : 
            ("")
          }

          {props.authorized ?
            (<Link to="/" className="nav-link">
              <span className="text" onClick={props.logout}>
                Logout <span className="sr-only">(current)</span>
              </span>
            </Link>) : 
            (<Link to="/login" className="nav-link">
              <span className="text">
                Login / Sign-Up <span className="sr-only">(current)</span>
              </span>
            </Link>)
          }
        </div>
      </div>
    </nav>
  </React.Fragment>  
)
export default Navbar;
