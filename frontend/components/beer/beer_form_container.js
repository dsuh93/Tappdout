import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBeer, receiveBeerErrors } from '../../actions/beer_actions';
import { fetchBrewery } from '../../actions/brewery_actions';
import BeerForm from './beer_form';

const msp = ({errors, entities} , ownProps) => {
  const beers = Object.values(entities.beers);
  return {
    brewery: entities.breweries[ownProps.match.params.breweryId],
    newBeerId: beers[beers.length - 1],
    errors: errors.beerForm
  }
};

const mdp = dispatch => ({
  createBeer: (beer) => dispatch(createBeer(beer)),
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId)),
  receiveBeerErrors: (error) => dispatch(receiveBeerErrors(error))
})

export default withRouter(connect(msp, mdp)(BeerForm));