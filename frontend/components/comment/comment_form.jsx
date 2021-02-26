import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      body: this.state.body,
      author_id: this.props.authorId,
      checkin_id: this.props.checkinId
    })
  }

  update(key) {
    return e => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    
    return (
      <div className="comment-form-container">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
            id="comment-form-textarea"
            cols="30"
            rows="10"
            placeholder="Leave a comment..."
            maxLength="140"
            onChange={this.update("body")}
            value={this.state.body}
          >
          </textarea>
          <div className="comment-form-bottom">
            <p className="chars-typed">{this.state.body.length}/140</p>
            <button className="comment-form-btn" type="button">Post</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;