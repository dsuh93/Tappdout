import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeers } from '../../actions/beer_actions';
import BeerIndex from './beer_index';

const msp = (state, ownProps) => ({
  beers: Object.values(state.entities.beers)
})

const mdp = dispatch => ({
  fetchBeers: () => dispatch(fetchBeers())
})

export default withRouter(connect(msp, mdp)(BeerIndex));