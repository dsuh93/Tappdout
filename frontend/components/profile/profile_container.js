import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/profile_actions';
import { fetchCheckins, fetchCheckin, deleteCheckin } from '../../actions/checkin_actions';

const msp = (state, ownProps) => ({
  profile: state.entities.profile,
  profileId: ownProps.match.params.profileId,
  sessionId: state.session.id,
  
})

const mdp = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: (checkinId) => dispatch(fetchCheckin(checkinId)),
  deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId))
})

export default withRouter(connect(msp, mdp)(Profile));