import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mappedComments = this.props.comments.map( (comment, i) => {
      return (
        <li key={`${comment.id}-${i}`}>
          <CommentIndexItem
            comment={comment}
            currentUser={this.props.currentUser}
            updateComment={this.props.updateComment}
            deleteComment={this.props.deleteComment}
          />
        </li>
      )
    })
    return (
      <div className="comment-index-container">
        <ul className="comment-index">
          {mappedComments}
        </ul>
      </div>
    )
  }
}

export default CommentIndex;