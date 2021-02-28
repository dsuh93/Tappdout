import Date from './date';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const msp = (state, ownProps) => ({
  createdAt: ownProps.createdAt
})

const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(Date));