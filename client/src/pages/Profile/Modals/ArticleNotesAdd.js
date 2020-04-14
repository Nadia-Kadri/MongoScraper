import React, { Component } from "react";

class ArticleNotesAdd extends Component {

  state = {
    body: "",
    user: "",
    article: ""
  };

  addNote = event => {
    event.preventDefault();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.trim()
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
          >Add</button>
        </form>

      </React.Fragment>
    )
  }
  
};

export default ArticleNotesAdd;