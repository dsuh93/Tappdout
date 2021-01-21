import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const msp = ( {errors}, ownProps ) => ({
  errors: errors.session
});

const mdp = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default withRouter(connect(msp, mdp)(SignupForm));