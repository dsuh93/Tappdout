import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      commentFormError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length === 0) {
      this.setState({commentFormError: true})
    } else {
      this.setState({commentFormError: false})
      const commentFormContainer = document.getElementById(`comment-form-container-${this.props.checkinId}`)
      const commentForm = document.getElementById(`comment-form-${this.props.checkinId}`)
      this.props.createComment({
        body: this.state.body,
        author_id: this.props.authorId,
        checkin_id: this.props.checkinId
      })
      this.setState({body: ""})
      commentFormContainer.classList.add("collapsed")
      if(this.props.root === "profile") {
        this.props.fetchUser(this.props.match.params.profileId)
      }
    }
    
  }

  update(key) {
    return e => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    const renderError = this.state.commentFormError ? "Nothing has been added. Please add comment." : null;
    return (
      <div id={`comment-form-container-${this.props.checkinId}`} className={`comment-form-container collapsed`}>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <p>{renderError}</p>
          <textarea
            id="comment-form-textarea"
            cols="69.5"
            rows="3"
            placeholder="Leave a comment..."
            maxLength="140"
            onChange={this.update("body")}
            value={this.state.body}
          >
          </textarea>
          <div className="comment-form-bottom">
            <p className="chars-typed">{this.state.body.length}/140</p>
            <button className="comment-form-btn">Post</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;