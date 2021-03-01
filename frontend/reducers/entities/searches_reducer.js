import { RECEIVE_SEARCH_BEERS } from '../../actions/beer_actions';
import { RECEIVE_SEARCH_BREWERIES } from '../../actions/brewery_actions';

const defaultSearches = {
  beers: {},
  breweries: {}
}

const SearchesReducer = (state = defaultSearches, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SEARCH_BEERS:
      newState[beers] = action.searchBeers;
      return newState;
    case RECEIVE_SEARCH_BREWERIES:
      newState[breweries] = action.searchBreweries;
      return newState;
    default:
      return state;
  }
}

export default SearchesReducer;