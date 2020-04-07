import React, { Component } from "react";
import "./index.css";
// import moment from "moment"

class Articles extends Component {

  state = {
    
  };

  componentDidMount() {
  
  };

  render() {
    return (
      <React.Fragment>
        {this.props.articles.map(article => (
          <div className="card mt-2">
            <div className="card-header">
              <h5><a target="_blank" rel="noopener noreferrer" href={article.link}>{article.title}</a></h5>
            </div>
            <div className="card-body">
              <div className="article-summary">{article.summary}</div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Articles;