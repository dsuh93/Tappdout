import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentForm from './comment_form';


const msp = (state, ownProps) => ({
  checkinId: ownProps.checkinId,
  authorId: state.session.id
})

const mdp = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
})

export default withRouter(connect(msp, mdp)(CommentForm))
