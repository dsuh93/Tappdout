import * as BeerAPIUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_SEARCH_BEERS = "RECEIVE_SEARCH_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const RECEIVE_BEER_ERRORS = "RECEIVE_BEER_ERRORS"

const receiveAllBeers = beers => ({
  type: RECEIVE_ALL_BEERS,
  beers
});
const receiveSearchBeers = searchBeers => ({
  type: RECEIVE_SEARCH_BEERS,
  searchBeers
})
const receiveBeer = beer => ({
  type: RECEIVE_BEER,
  beer
});
const removeBeer = beerId => ({
  type: REMOVE_BEER,
  beerId
});

export const receiveBeerErrors = errors => ({
  type: RECEIVE_BEER_ERRORS,
  errors
})

export const fetchBeers = () => dispatch => BeerAPIUtil.fetchBeers()
  .then( beers => dispatch(receiveAllBeers(beers)));

export const fetchSearchBeers = (search) => dispatch => BeerAPIUtil.fetchBeers(search)
  .then( searchBeers => dispatch(receiveSearchBeers(searchBeers)));

export const fetchBeer = (beerId) => dispatch => BeerAPIUtil.fetchBeer(beerId)
  .then( beer => dispatch(receiveBeer(beer)));

export const createBeer = (beer) => dispatch => BeerAPIUtil.createBeer(beer)
  .then( beer => dispatch(receiveBeer(beer)),
  errors => dispatch(receiveBeerErrors(errors.responseJSON)));

export const updateBeer = (beer) => dispatch => BeerAPIUtil.updateBeer(beer)
  .then( beer => dispatch(receiveBeer(beer)),
  errors => dispatch(receiveBeerErrors(errors.responseJSON)));

export const deleteBeer = (beerId) => dispatch => BeerAPIUtil.deleteBeer(beerId)
  .then( () => dispatch(removeBeer(beerId)));

