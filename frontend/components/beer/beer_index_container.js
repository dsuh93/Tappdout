import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeers } from '../../actions/beer_actions';
import { openModal } from '../../actions/modal_actions';
import BeerIndex from './beer_index';

const msp = (state, ownProps) => {
  return {
    beers: Object.values(state.entities.beers)
  }
};

const mdp = dispatch => ({
  fetchBeers: () => dispatch(fetchBeers()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(BeerIndex));