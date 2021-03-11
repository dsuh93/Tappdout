import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSearchBeers } from '../../actions/beer_actions';
import { fetchSearchBreweries } from '../../actions/brewery_actions';
import Search from './search';

const msp = (state, ownProps) => {
  const searchState = ownProps.location.state;
  const list = searchState.list ? searchState.list : "";
  const keyword = searchState.keyword ? searchState.keyword : "";
  return {
    searchBeerIndex: Object.values(state.entities.searches.beers),
    searchBreweryIndex: Object.values(state.entities.searches.breweries),
    list: list,
    keyword: keyword
  }
};


const mdp = dispatch => ({
  fetchSearchBeers: (search) => dispatch(fetchSearchBeers(search)),
  fetchSearchBreweries: (search) => dispatch(fetchSearchBreweries(search)),
});

export default withRouter(connect(msp, mdp)(Search))