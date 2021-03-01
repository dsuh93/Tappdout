import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchSearchBeers } from '../../actions/beer_actions';
import { fetchSearchBreweries } from '../../actions/brewery_actions';

const msp = ( {entities, session}, ownProps ) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearchBeers: (search) => dispatch(fetchSearchBeers(search)),
  fetchSearchBreweries: (search) => dispatch(fetchSearchBreweries(search))
});

export default connect(msp, mdp)(NavBar);