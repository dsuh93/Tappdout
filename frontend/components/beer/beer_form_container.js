import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBeer, receiveBeerErrors } from '../../actions/beer_actions';
import { fetchBrewery } from '../../actions/brewery_actions';
import BeerForm from './beer_form';

const msp = ({errors, entities} , ownProps) => ({
  brewery: entities.breweries[ownProps.match.params.breweryId],
  errors: errors.beerForm
})

const mdp = dispatch => ({
  createBeer: (beer) => dispatch(createBeer(beer)),
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId)),
  receiveBeerErrors: (error) => dispatch(receiveBeerErrors(error))
})

export default withRouter(connect(msp, mdp)(BeerForm));