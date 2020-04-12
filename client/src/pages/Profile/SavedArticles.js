import React from "react";
import "./index.css";
import SavedArticle from "./SavedArticle";
// import moment from "moment"

const SavedArticles = (props) => (

  props.savedArticles.map(article => (
    <SavedArticle 
      id={article._id} 
      link={article.link} 
      title={article.title} 
      summary={article.summary} 
      notes={article.notes} 
      key={article._id} 
      deleteSavedArticle={props.deleteSavedArticle} 
      getSavedArticles={props.getSavedArticles}/>
  ))
  
)

export default SavedArticles;