import React, { Component } from "react";
import articleAPI from "../../utils/articleAPI";
import userAPI from "../../utils/userAPI";
import Articles from "./Articles";
import ScrapeSuccessModal from "./Modals/ScrapeSuccess";
import ArticleSavedModal from "./Modals/ArticleSaved";
import moment from "moment";
import "./index.css";

class Home extends Component {

  state = {
    articles: [],
  };

  componentDidMount() {
    this.props.isAuthorized();
    this.getArticles()
  }

  getArticles = () => {
    this.props.isAuthorized();
    articleAPI.view()
      .then(res => {
        let articlesArr = []
        for(let i = 0; i < res.data.length; i++) {
          let isSaved
          if (this.props.authorized) {
            let found = this.props.user.savedArticles.some(article => article === res.data[i]._id)
            found ? isSaved = true : isSaved = false
          } else {
            isSaved = false
          }

          articlesArr.push({
            id: res.data[i]._id,
            created: res.data[i].created,
            notes: res.data[i].notes,
            title: res.data[i].title,
            summary: res.data[i].summary,
            link: res.data[i].link,
            users: res.data[i].users, 
            isSaved: isSaved
          })
        }
        const articlesArrFilter = articlesArr.filter(article => article.isSaved === false)
        this.setState({ articles: articlesArrFilter })
      })
      .catch(err => {
        console.log(err)
      });
  };

  scrapeArticles = () => {
    articleAPI.scrape()
      .then(res => console.log(res))
      .catch(err => {
        console.log(err)
      });
  }

  saveArticle = (articleId) => {
    userAPI.saveArticle(articleId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
                      <span 
                        className="click-here-scrape text-primary" 
                        onClick={this.scrapeArticles}
                        data-toggle="modal" 
                        data-target="#scrape-success"
                      > Click here </span>
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
                    <h5><i className="fa fa-angle-double-down" aria-hidden="true"></i>  Articles last scraped from the WSJ at {moment.utc(this.state.articles[0].created).local().format("h:mma on MMM Do YYYY")}  <i className="fa fa-angle-double-down" aria-hidden="true"></i></h5>
                    <h5>
                      <span 
                        className="click-here-scrape text-primary" 
                        onClick={this.scrapeArticles}
                        data-toggle="modal" 
                        data-target="#scrape-success"
                      >Click here </span>
                      to scrape new articles!
                    </h5>
                  </div>
                </div>
              </div>  
            </div>
            <Articles articles={this.state.articles} user={this.props.user} saveArticle={this.saveArticle} />
          </React.Fragment>)
        }
      
        <ScrapeSuccessModal getArticles={this.getArticles}/>
        <ArticleSavedModal getArticles={this.getArticles} authorized={this.props.authorized}/>
      </React.Fragment>
    )
  }
}

export default Home;