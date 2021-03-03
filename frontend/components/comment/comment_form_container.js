import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {createComment} from '../../actions/comment_actions';
import { fetchUser } from '../../actions/profile_actions';


const msp = (state, ownProps) => ({
  checkinId: ownProps.checkinId,
  authorId: state.session.id,
  root: ownProps.root
})

const mdp = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(CommentForm))
