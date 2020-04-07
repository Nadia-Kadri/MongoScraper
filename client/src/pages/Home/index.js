import React, { Component } from "react";
import articleAPI from "../../utils/articleAPI";
// import userAPI from "../../utils/userAPI";
import Articles from "./Articles"
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
        console.log(this.state.articles.length)
        console.log(this.state.articles)
      })
      .catch(err => {
        console.log(err)
      });
  };

  scrapeArticles = () => {
    articleAPI.scrape()
      .then(res => {
        console.log(res)
        this.getArticles()
      })
      .catch(err => {
        console.log(err)
      });
  }


  render() {
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

        {!this.state.articles.length ? 
          (<div className="container">
            <div className="alert alert-warning text-center mt-2">
              <h5>Uh Oh. Looks like we don't have any new articles. 
                  <span className="click-here-scrape text-primary" onClick={this.scrapeArticles}> Click here </span>
                  to scrape!
              </h5>
            </div>
          </div>) : 
          <Articles articles={this.state.articles} user={this.props.user}/>
        }
        
      </React.Fragment>
    )
  }
}

export default Home;