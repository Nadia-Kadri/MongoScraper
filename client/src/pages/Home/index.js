import React, { Component } from "react";
import articleAPI from "../../utils/articleAPI";
// import userAPI from "../../utils/userAPI";
import Articles from "./Articles";
import moment from "moment";
import "./index.css";

class Home extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    articleAPI.view()
      .then(res => {
        this.setState({
          articles: res.data
        })
        
      })
      .catch(err => {
        console.log(err)
      });
  };

  scrapeArticles = () => {
    articleAPI.scrape()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
  }

  onClickScrape = () => {
    this.scrapeArticles()
    this.getArticles()
  }

  render() {
    return (
      <React.Fragment>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-8 text-center" id="masthead-margin">
                <h1 className="font-weight-light" id="masthead-text1"><strong>Mongo Scraper</strong></h1>
                <h4 className="lead" id="masthead-text2"><strong>The Wall Street Journal Edition</strong></h4>
              </div>
            </div>
          </div>
        </header>

        {!this.state.articles.length ? 
          (<div className="no-articles">
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-10 text-center" id="no-articles-margin">
                    <h5>Uh Oh. Looks like we don't have any new articles. 
                      <span className="click-here-scrape text-primary" onClick={this.onClickScrape}> Click here </span>
                      to scrape!
                    </h5>
                  </div>
                </div>
              </div>  
            </div>) : 
          (<React.Fragment>
            <div className="scrape-info">
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-11 text-center" id="scrape-info-margin">
                    <h5>Articles last scraped from the WSJ at {moment(this.state.articles[0].created, "YYYY-MM-DDTHH:mm:ss.SSSZ").utc().format("h:mma on MMM Do YYYY")}</h5>
                    <h5><span className="click-here-scrape text-primary" onClick={this.onClickScrape}>Click here </span>to scrape new articles!</h5>
                  </div>
                </div>
              </div>  
            </div>
            <Articles articles={this.state.articles} user={this.props.user}/>
          </React.Fragment>)
        }
        
      </React.Fragment>
    )
  }
}

export default Home;