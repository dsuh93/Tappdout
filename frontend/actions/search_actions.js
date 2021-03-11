import * as BeerAPIUtil from '../util/beer_api_util';
import * as BreweryAPIUtil from '../util/brewery_api_util';

export const RESET_SEARCH_INDEX = "RESET_SEARCH_INDEX";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const resetSearchIndex = () => ({
  type: RESET_SEARCH_INDEX
})

const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
})

export const fetchSearchList = ({list, keyword}) => dispatch => {
  if (list === "beers") {
    BeerAPIUtil.fetchBeers(keyword)
      .then(beers => dispatch(receiveSearchResults(beers)));
  } else if (list === "breweries") {
    BreweryAPIUtil.fetchBreweries(keyword)
      .then(breweries => dispatch(receiveSearchResults(breweries)));
  }
}