import React from "react";

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
            <i className="fa fa-comment-o" aria-hidden="true"></i><span> Notes:</span><br></br>
            <i className="fa fa-commenting-o" aria-hidden="true"></i><span> Add Note:</span><br></br>
            <textarea className='bodyinput' id="note${data[i]._id}" name='body'></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ArticleNotes;