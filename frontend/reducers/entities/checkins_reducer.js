import {
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN
} from '../../actions/checkin_actions';

const checkinsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    case RECEIVE_CHECKIN:
      return Object.assign({}, state, { [action.checkin.id]: action.checkin })
    case REMOVE_CHECKIN:
      const newState = Object.assign({}, state);
      delete newState[action.checkinId];
      return newState;
    default:
      return state;
  }
}

export default checkinsReducer;