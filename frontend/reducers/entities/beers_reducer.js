import {
  RECEIVE_ALL_BEERS,
  RECEIVE_BEER,
  REMOVE_BEER
} from '../../actions/beer_actions';

const BeersReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
    case RECEIVE_BEER:
      return Object.assign(
        {},
        { [action.beer.id]: action.beer }
      )
    case REMOVE_BEER:
      const newState = Object.assign({}, state);
      delete newState[action.beerId];
      return newState;
    default:
      return state;
  }
}

export default BeersReducer;