import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      editForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editFormState = this.editFormState.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment({
      id: this.props.comment.id,
      body: this.state.body,
      author_id: this.props.authorId,
      checkin_id: this.props.checkinId
    });
    this.setState({ editForm: false });
  }

  editFormState(e) {
    e.preventDefault();
    if (this.state.editForm) {
      this.setState({ editForm: false })
    } else {
      this.setState({ editForm: true })
    }
  }

  update(key) {
    return e => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    let timeAgo = new Date();
    let charCount = this.state.body.length;
    let hideBody = this.state.editForm ? "hidden" : ""
    let hideEditForm = this.state.editForm ? "" : "hidden"
    return (
      <div className="comment-index-item-container">
        <img className="author-img" src="" alt=""/>
        <div className={`static-comment-body ${hideBody}`}>
          <div className="comment-body">
          </div>
          <div className="comment-btns">
            <p>{timeAgo}</p>
            <button onClick={this.editFormState} type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </div>
        <div className={`comment-edit-form-container ${hideEditForm}`}>
          <form className="comment-edit-form">
            <textarea
              id="comment-edit-textarea"
              cols="30"
              rows="10"
              maxLength="140"
              value={this.state.body}
              onChange={this.update("body")}
            ></textarea>
            <div>
            </div>
          </form>
          <div className="comment-edit-form-bottom">
            <p>{charCount}/140</p>
            <button onClick={this.handleSubmit} className="comment-update-btn" type="button">Update</button>
            <button onClick={this.editFormState} className="comment-cancel-btn" type="button">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;