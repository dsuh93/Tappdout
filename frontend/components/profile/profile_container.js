import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/profile_actions';

const msp = (state, ownProps) => ({
  profile: state.entities.profile,
  profileId: ownProps.match.params.profileId
})

const mdp = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(Profile));