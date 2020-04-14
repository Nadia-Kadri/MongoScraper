import React from "react";
import "./index.css";

const NoteButton = (props) => (
  <span 
    className="btn btn-primary float-right note-button" 
    data-toggle="modal" 
    data-target={"#article-notes-"+props.id} 
    onClick={() => props.getNotes(props.id)}
  >Notes</span>
)

export default NoteButton;