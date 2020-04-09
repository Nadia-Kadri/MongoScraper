import React from "react";

const ScrapeSuccess = (props) => (
 
      <React.Fragment>
        <div className="modal fade" id="scrape-success" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Success!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Articles successfully scraped from the Wall Street Journal. Click below to view!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.getArticles}>View Articles</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

export default ScrapeSuccess;