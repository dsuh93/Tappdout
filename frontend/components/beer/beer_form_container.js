import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBeer } from '../../actions/beer_actions';
import { fetchBrewery } from '../../actions/brewery_actions';
import BeerForm from './beer_form';

const msp = (state , ownProps) => ({
  brewery: state.entities.breweries[ownProps.match.params.breweryId]
})

const mdp = dispatch => ({
  createBeer: (beer) => dispatch(createBeer(beer)),
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId))
})

export default withRouter(connect(msp, mdp)(BeerForm));