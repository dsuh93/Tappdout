import * as BeerAPIUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const REMOVE_BEER = "REMOVE_BEER";

const receiveAllBeers = beers => ({
  type: RECEIVE_ALL_BEERS,
  beers
});
const receiveBeer = beer => ({
  type: RECEIVE_BEER,
  beer
});
const removeBeer = beerId => ({
  type: REMOVE_BEER,
  beerId
});

export const fetchBeers = () => dispatch => BeerAPIUtil.fetchBeers()
  .then( beers => dispatch(receiveAllBeers(beers)));

export const fetchBeer = (beer) => dispatch => BeerAPIUtil.fetchBeer(beer)
  .then( beer => dispatch(receiveBeer(beer)));

export const createBeer = (beer) => dispatch => BeerAPIUtil.createBeer(beer)
  .then( beer => dispatch(receiveBeer(beer)));

export const updateBeers = (beer) => dispatch => BeerAPIUtil.updateBeer(beer)
  .then( beer => dispatch(receiveBeer(beer)));

export const deleteBeer = (beerId) => dispatch => BeerAPIUtil.deleteBeer(beerId)
  .then( () => dispatch(removeBeer(beerId)));

