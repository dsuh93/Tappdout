import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateBeer, fetchBeer, receiveBeerErrors } from '../../actions/beer_actions';
import BeerEditForm from './beer_edit_form';

const msp = ( state, ownProps ) => {
  const beerId = ownProps.match.params.beerId;
  return ({
    beer: state.entities.beers[beerId],
    beerId: beerId,
    errors: state.errors.beerForm
  })
};

const mdp = dispatch => ({
  updateBeer: (beer) => dispatch(updateBeer(beer)),
  fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
  receiveBeerErrors: (error) => dispatch(receiveBeerErrors(error))
});

export default withRouter(connect(msp, mdp)(BeerEditForm));