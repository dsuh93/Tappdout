import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchbarIndex from './searchbar-index';
import { fetchSearchBeers } from '../../actions/beer_actions';
import { fetchSearchBreweries } from '../../actions/brewery_actions';

const msp = (state, ownProps) => ({
  searchBeers: state.entities.searches.beers,
  searchBreweries: state.entities.searches.breweries,
  keyword: ownProps.keyword
})

const mdp = dispatch => ({
  fetchSearchBeers: (search) => dispatch(fetchSearchBeers(search)),
  fetchSearchBreweries: (search) => dispatch(fetchSearchBreweries(search))
})

export default withRouter(connect(msp, mdp)(SearchbarIndex));