import React from "react";
import SaveButton from "./SaveButton";
import "./index.css";

const Article = (props) => (

  <div className="card mt-2">
    <div className="card-header">
      <div className="row">
        <div className="col-8">
          <span className="h4"><a target="_blank" rel="noopener noreferrer" href={props.link}>{props.title}</a></span>
        </div>
        <div className="col-4">
          <SaveButton id={props.id} saveArticle={props.saveArticle}/>
        </div>
      </div>
    </div>

    <div className="card-body">
      <div className="article-summary">{props.summary}</div>
    </div>
  </div>

)

export default Article;