import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { updateComment, deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => ({
  comments: Object.values(ownProps.comments),
  currentUser: state.session.id
})

const mdp = dispatch => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

export default withRouter(connect(msp, mdp)(CommentIndex));
