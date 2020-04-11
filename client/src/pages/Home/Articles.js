import React from "react";
import Article from "./Article";

const Articles = (props) => (
  <div className="container-fluid">
    {props.articles.map(article => (
      <Article id={article.id} link={article.link} title={article.title} summary={article.summary} saveArticle={props.saveArticle} key={article.id}/>
    ))}
  </div>
)

export default Articles;