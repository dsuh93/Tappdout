import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBrewery, fetchBreweries } from '../../actions/brewery_actions';
import BreweryShow from './brewery_show';

const msp = (state, ownProps) => {
  const breweryId = ownProps.match.params.breweryId;
  return ({
    brewery: state.entities.breweries[breweryId],
    breweryId: breweryId
  })
};

const mdp = dispatch => ({
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId)),
  fetchBreweries: () => dispatch(fetchBreweries())
})

export default withRouter(connect(msp, mdp)(BreweryShow));