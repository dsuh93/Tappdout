import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/profile_actions';

const msp = (state) => ({
  profile: state.entities.profile
})

const mdp = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(Profile));