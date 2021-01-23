import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBreweries } from '../../actions/brewery_actions';
import BreweryIndex from './brewery_index';

const msp = (state, ownProps) => ({
  breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries())
})

export default withRouter(connect(msp, mdp)(BreweryIndex));