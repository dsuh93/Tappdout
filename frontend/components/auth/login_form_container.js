import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions';

const msp = ( {errors}, ownProps ) => ({
  errors: errors.session
});

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default withRouter(connect(msp, mdp)(LoginForm));