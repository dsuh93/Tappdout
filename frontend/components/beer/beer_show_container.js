import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeer, deleteBeer } from '../../actions/beer_actions';
import BeerShow from './beer_show';

const msp = (state, ownProps) => {
  const beerId = ownProps.match.params.beerId;
  return ({
    beer: state.entities.beers[beerId],
    beerId: beerId
  })
};

const mdp = dispatch => ({
  fetchBeer: (beerId) => dispatch(fetchBeer(beerId)),
  deleteBeer: (beerId) => dispatch(deleteBeer(beerId))
});

export default withRouter(connect(msp, mdp)(BeerShow));