import React from "react";

const UserEditAccount = (props) => (
  <React.Fragment>
    <div className="modal fade" id="user-edit-account" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Edit Personal Information below</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.getArticles}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Form to go here
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default UserEditAccount;