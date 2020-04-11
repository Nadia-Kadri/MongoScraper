import React from "react";
import { Link } from "react-router-dom";

const ArticleSaved = (props) => (
 
  props.authorized ? 
      <React.Fragment>
        <div className="modal fade" id="article-saved" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Article Saved!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.getArticles}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Go to your Profile Page to view your saved articles and add notes! To browse more articles, click on the Browse Articles button below. 
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.getArticles}>Browse Articles</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment> :
      <React.Fragment>
        <div className="modal fade" id="article-saved" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Uh Oh!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.getArticles}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Please login/sign-up to save an article.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.getArticles}>Browse Articles</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

export default ArticleSaved;