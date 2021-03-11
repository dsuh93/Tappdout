import { RECEIVE_SEARCH_BEERS } from '../../actions/beer_actions';
import { RECEIVE_SEARCH_BREWERIES } from '../../actions/brewery_actions';
import { RESET_SEARCH_INDEX, RECEIVE_SEARCH_RESULTS } from '../../actions/search_actions';

const defaultSearches = {
  beers: {},
  breweries: {},
  searchIndex: {}
}

const SearchesReducer = (state = defaultSearches, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState.searchIndex = action.results;
      return newState;
    case RECEIVE_SEARCH_BEERS:
      newState.beers = action.searchBeers;
      return newState;
    case RECEIVE_SEARCH_BREWERIES:
      newState.breweries = action.searchBreweries;
      return newState;
    case RESET_SEARCH_INDEX:
      return Object.assign({}, state, defaultSearches)
    default:
      return state;
  }
}

export default SearchesReducer;