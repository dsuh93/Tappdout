import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createToast, deleteToast } from '../../actions/toast_actions';
import { fetchUser } from '../../actions/profile_actions';
import Toast from './toast';


const msp = (state, ownProps) => {
  const checkin = ownProps.root === "profile" ? state.entities.profile.checkins[ownProps.checkinId] : state.entities.checkins[ownProps.checkinId]
  return {
    checkin: checkin,
    checkinId: ownProps.checkinId,
    toasterId: state.session.id,
    root: ownProps.root
  }
}

const mdp = dispatch => ({
  createToast: toast => dispatch(createToast(toast)),
  deleteToast: toastId => dispatch(deleteToast(toastId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(Toast));