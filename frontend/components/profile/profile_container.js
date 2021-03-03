import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './profile';

const msp = (state, ownProps) => ({

})

const mdp = dispatch => ({

})

export default withRouter(connect(msp, mdp)(Profile));