import React from "react";

const DeleteSavedArticle = (props) => (
  <React.Fragment>
    <div className="modal fade" id="delete-saved-article" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">You Got It!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.getSavedArticles()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Article removed from your saved articles
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.getSavedArticles()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default DeleteSavedArticle;