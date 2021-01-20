import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import sessionReducer from '../session/session_reducer';

const sessionErrorsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;