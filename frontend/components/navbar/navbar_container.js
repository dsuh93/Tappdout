import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchSearchBeers } from '../../actions/beer_actions';
import { fetchSearchBreweries } from '../../actions/brewery_actions';
import { fetchSearchList } from '../../actions/search_actions';

const msp = ( {entities, session}, ownProps ) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearchList: (listAndKey) => dispatch(fetchSearchList(listAndKey))
});

export default connect(msp, mdp)(NavBar);