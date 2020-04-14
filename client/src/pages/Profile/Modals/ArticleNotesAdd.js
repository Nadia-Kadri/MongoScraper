import React, { Component } from "react";
import userAPI from "../../../utils/userAPI";

class ArticleNotesAdd extends Component {

  state = {
    body: "",
    article: this.props.id
  };

  addNote = event => {
    event.preventDefault();
    userAPI.addNote({
      body: this.state.body,
      article: this.state.article
    })
    .then(res => this.setState({ body: "" }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label><i className="fa fa-commenting-o" aria-hidden="true"></i> Add Note:</label>
            <textarea
              type="text"
              className="form-control"
              name="body"
              value={this.state.body}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            className="btn btn-primary"
            disabled={
              this.state.body ? "" : "disabled"
            }
            onClick={this.addNote}
            data-dismiss="modal"
          >Add</button>
        </form>

      </React.Fragment>
    )
  }
  
};

export default ArticleNotesAdd;