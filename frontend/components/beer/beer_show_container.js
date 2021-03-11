import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeer, deleteBeer } from '../../actions/beer_actions';
import { fetchBrewery } from '../../actions/brewery_actions';
import { fetchCheckins, fetchCheckin, deleteCheckin } from '../../actions/checkin_actions';
import { openModal } from '../../actions/modal_actions';
import BeerShow from './beer_show';

const msp = (state, ownProps) => {
  const beerId = ownProps.match.params.beerId;
  debugger
  return ({
    beer: state.entities.beers[beerId],
    beerId: beerId,
    currentUser: state.session.id
  })
};

const mdp = dispatch => ({
  fetchBeer: (beerId) => dispatch(fetchBeer(beerId)), 
  deleteBeer: (beerId) => dispatch(deleteBeer(beerId)),
  openModal: modal => dispatch(openModal(modal)),
  fetchCheckins: () => dispatch(fetchCheckins()),
  fetchCheckin: (checkinId) => dispatch(fetchCheckin(checkinId)),
  deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId))
});

export default withRouter(connect(msp, mdp)(BeerShow));