import React from "react";

const ArticleSaved = (props) => (
  <React.Fragment>
    <div className="modal fade" id="article-saved" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {props.authorized ? "Article Saved!" : "Uh Oh!"}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.getArticles()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.authorized ? "Go to your Profile Page to view your saved articles and add notes! To browse more articles, click on the Browse Articles button below." : "Please login/sign-up to save an article."}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.getArticles()}>Browse Articles</button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment> 
);

export default ArticleSaved;