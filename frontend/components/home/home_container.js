import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCheckins, fetchCheckin, deleteCheckin } from '../../actions/checkin_actions';
import Home from './home';

const msp = (state, ownProps) => ({
  checkins: state.entities.checkins,
  userId: state.session.id
  
});

const mdp = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: (checkinId) => dispatch(fetchCheckin(checkinId)),
  deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId))
})

export default withRouter(connect(msp, mdp)(Home));