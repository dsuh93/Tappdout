import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      editForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editFormState = this.editFormState.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = this.props.comment;
    this.props.updateComment({
      id: comment.id,
      body: this.state.body,
      author_id: comment.author_id,
      checkin_id: comment.checkin_id
    });
    this.setState({ editForm: false });
    if(this.props.root === "profile") {
      this.props.fetchUser(this.props.match.params.profileId)
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
    if(this.props.root === "profile") {
      this.props.fetchUser(this.props.match.params.profileId)
    }
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
    const comment = this.props.comment
    const timeAgo = new Date(`${comment.created_at}`).toDateString().split(" ");

    //comment button should only be available if comment author is current user
    const author = comment.author;
    const authorId = comment.author_id;
    const currentUser = this.props.currentUser;
    const showButtons = (authorId === currentUser) ? "" : "hidden"

    const body = comment.body;
    const commentId = this.props.comment.id;
    let charCount = this.state.body.length;
    let hideBody = this.state.editForm ? "hidden" : ""
    let hideEditForm = this.state.editForm ? "" : "hidden"
    return (
      <div className="comment-index-item-container">
        <div className={`comment-index-item`}>
          <img className="author-img" src={window.defAvatar} alt=""/>
          <div className={`static-comment-body ${hideBody}`}>
            <div className="comment-body">
              <p>{author}: {body}</p>
            </div>
            <div className="comment-btns">
              <p>{`${timeAgo[2]} ${timeAgo[1]} ${timeAgo[3].slice(2)}`}</p>
              <button className={`${showButtons}`} onClick={this.editFormState} type="button">Edit</button>
              <button className={`${showButtons}`} onClick={this.handleDelete} type="button">Delete</button>
            </div>
          </div>
          <div className={`comment-edit-form-container ${hideEditForm}`}>
            <form className="comment-edit-form">
              <textarea
                id="comment-edit-textarea"
                cols="62"
                rows="3"
                maxLength="140"
                value={this.state.body}
                onChange={this.update("body")}
              ></textarea>
              <div>
              </div>
            </form>
            <div className="comment-edit-form-bottom">
              <p>{charCount}/140</p>
              <button id="edit-update" onClick={this.handleSubmit} className="comment-update-btn" type="button">Update</button>
              <button id="edit-cancel" onClick={this.editFormState} className="comment-cancel-btn" type="button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CommentIndexItem);