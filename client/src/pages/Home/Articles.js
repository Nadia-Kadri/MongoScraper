import React from "react";
import "./index.css";
import Article from "./Article";
// import moment from "moment"

const Articles = (props) => (

  <div className="container-fluid">
    {props.articles.map(article => (
      <Article link={article.link} title={article.title} summary={article.summary} key={article._id}/>
    ))}
  </div>

)

export default Articles;