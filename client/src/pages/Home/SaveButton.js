import React from "react";
import "./index.css";

const SaveButton = (props) => (

  <span 
    className="btn btn-success float-right" 
    onClick={() => props.saveArticle(props.id)}
    data-toggle="modal" 
    data-target="#article-saved"
  >
    Save Article
  </span>

)

export default SaveButton;