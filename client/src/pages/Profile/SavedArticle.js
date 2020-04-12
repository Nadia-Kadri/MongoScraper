import React from "react";
import NoteButton from "./NoteButton";
import DeleteButton from "./DeleteButton";
import "./index.css";

const SavedArticle = (props) => (

  <div className="card mt-2">
    <div className="card-header">
      <div className="row">
        <div className="col-7">
          <span><a target="_blank" rel="noopener noreferrer" href={props.link}>{props.title}</a></span>
        </div>
        <div className="col-5">
          <DeleteButton deleteSavedArticle={props.deleteSavedArticle} getSavedArticles={props.getSavedArticles} id={props.id}/>
          <NoteButton />
        </div>
      </div>
    </div>

    <div className="card-body">
      <div className="article-summary">{props.summary}</div>
    </div>
  </div>

)

export default SavedArticle;