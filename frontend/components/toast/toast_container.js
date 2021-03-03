import { connect } from 'react-redux';
import { createToast, deleteToast } from '../../actions/toast_actions';
import Toast from './toast';


const msp = (state, ownProps) => {
  const checkin = ownProps.root === "profile" ? state.entities.profile.checkins[ownProps.checkinId] : state.entities.checkins[ownProps.checkinId]
  return {
    checkin: checkin,
    checkinId: ownProps.checkinId,
    toasterId: state.session.id
  }
}

const mdp = dispatch => ({
  createToast: toast => dispatch(createToast(toast)),
  deleteToast: toastId => dispatch(deleteToast(toastId))
})

export default connect(msp, mdp)(Toast);