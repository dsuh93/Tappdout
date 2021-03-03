import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { updateComment, deleteComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/profile_actions';

const msp = (state, ownProps) => {
  return {
    comments: Object.values(ownProps.comments),
    currentUser: state.session.id,
    root: ownProps.root
  }
}

const mdp = dispatch => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(CommentIndex));
