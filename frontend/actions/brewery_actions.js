import * as BreweryAPIUtil from '../util/brewery_api_util';

export const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";
export const RECEIVE_SEARCH_BREWERIES = "RECEIVE_SEARCH_BREWERIES";
export const RECEIVE_BREWERY = "RECEIVE_BREWERY";

const receiveAllBreweries = (breweries) => ({
  type: RECEIVE_ALL_BREWERIES,
  breweries
});

const receiveSearchBreweries = (searchBreweries) => ({
  type: RECEIVE_SEARCH_BREWERIES,
  searchBreweries
});

const receiveBrewery = (brewery) => ({
  type: RECEIVE_BREWERY,
  brewery
});

export const fetchBreweries = () => dispatch => BreweryAPIUtil.fetchBreweries()
  .then( breweries => dispatch(receiveAllBreweries(breweries)));

export const fetchSearchBreweries = (search) => dispatch => BreweryAPIUtil.fetchBreweries(search)
  .then( searchBreweries => dispatch(receiveSearchBreweries(searchBreweries)));

export const fetchBrewery = (breweryId) => dispatch => BreweryAPIUtil.fetchBrewery(breweryId)
  .then( brewery => dispatch(receiveBrewery(brewery)));
