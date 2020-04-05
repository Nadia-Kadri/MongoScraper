import React from "react";
import "./index.css";

function Home() {
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-6 text-center" id="masthead-margin">
              <h1 className="font-weight-light" id="masthead-text1"><strong>Mongo Scraper</strong></h1>
              <h5 className="lead" id="masthead-text2"><strong>The Wall Street Journal Edition</strong></h5>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="alert alert-warning text-center">
          <h4>Uh Oh. Looks like we don't have any new articles.</h4>
        </div>

        <div className="card">
          <div className="card-header text-center">
            <h3 className="home-card-text">What Would You Like To Do?</h3>
          </div>
          <div className="card-body text-center">
            <h4>
              <a href="/scrape">Try Scraping New Articles</a>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;