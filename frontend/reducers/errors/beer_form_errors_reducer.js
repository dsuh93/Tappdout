import { RECEIVE_BEER_ERRORS, RECEIVE_BEER } from '../../actions/beer_actions';

const beerFormErrors = ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEER_ERRORS:
      return action.errors;
    case RECEIVE_BEER:
      return [];
    default:
      return state;
  }
};

export default beerFormErrors;