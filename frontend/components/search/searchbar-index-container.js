import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchbarIndex from './searchbar-index';
import { fetchBeer } from '../../actions/beer_actions';
import { fetchBrewery } from '../../actions/brewery_actions';
import { fetchSearchBeers } from '../../actions/beer_actions';
import { fetchSearchBreweries } from '../../actions/brewery_actions';
import { fetchSearchList, resetSearchIndex } from '../../actions/search_actions';

const msp = (state, ownProps) => ({
  searchBeers: state.entities.searches.beers,
  searchBreweries: state.entities.searches.breweries,
  keyword: ownProps.keyword,
  resetState: ownProps.resetState
})

const mdp = dispatch => ({
  fetchBeer: (beerId) => dispatch(fetchBeer(beerId)), 
  fetchBrewery: (breweryId) => dispatch(fetchBrewery(breweryId)),
  fetchSearchBeers: (search) => dispatch(fetchSearchBeers(search)),
  fetchSearchBreweries: (search) => dispatch(fetchSearchBreweries(search)),
  fetchSearchList: (listAndKey) => dispatch(fetchSearchList(listAndKey)),
  resetSearchIndex: () => dispatch(resetSearchIndex())
})

export default withRouter(connect(msp, mdp)(SearchbarIndex));