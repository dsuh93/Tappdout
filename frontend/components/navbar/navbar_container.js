import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = ( {entities, session}, ownProps ) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(msp, mdp)(NavBar);