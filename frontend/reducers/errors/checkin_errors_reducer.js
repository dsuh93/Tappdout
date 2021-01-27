import {
  RECEIVE_CHECKIN,
  RECEIVE_CHECKIN_ERRORS
} from '../../actions/checkin_actions';

const checkinErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHECKIN_ERRORS:
      return action.errors;
    case RECEIVE_CHECKIN:
      return [];
    default:
      return state;
  }
}

export default checkinErrorsReducer;