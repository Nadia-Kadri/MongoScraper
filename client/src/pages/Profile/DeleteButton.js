import React from "react";
import "./index.css";

const DeleteButton = (props) => (

  <span className="btn btn-danger float-right ml-2 delete-button" data-toggle="modal" data-target="#delete-saved-article" onClick={() => props.deleteSavedArticle(props.id)}>Delete</span>

)

export default DeleteButton;