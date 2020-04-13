import React, { Component } from "react";

class ArticleNotes extends Component {

  // state = {
  //   username: "",
  //   password: "",
  //   error: ""
  // };

  // addNote = event => {
  //   event.preventDefault();
  // }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value.trim()
  //   });
  // };

  render () {
    return (
      <React.Fragment>
        <div className="modal fade" id={"article-notes-"+this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.getArticles}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <i className="fa fa-comment-o" aria-hidden="true"></i><span> Notes:</span><br></br>
                <i className="fa fa-commenting-o" aria-hidden="true"></i><span> Add Note:</span><br></br>
                <textarea className='bodyinput' id="note${data[i]._id}" name='body'></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  
};

export default ArticleNotes;