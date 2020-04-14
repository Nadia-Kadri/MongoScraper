import React from "react";
import ArticleNotesAdd from "./ArticleNotesAdd";

const ArticleNotes = (props) => (
  <React.Fragment>
    <div className="modal fade" id={"article-notes-"+props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.getArticles}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <i className="fa fa-comment-o" aria-hidden="true"></i><span> Notes: </span>
            {!props.notes.length ? 
              (<span>Looks like you haven't saved any notes for this article yet!</span>) 
            :
              (<React.Fragment>
                <ul>
                  {props.notes.map(note => <li key={note._id}>{note.body}</li>)}
                </ul>
              </React.Fragment>)
            }
            <ArticleNotesAdd getNotes={props.getNotes} id={props.id} />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ArticleNotes;