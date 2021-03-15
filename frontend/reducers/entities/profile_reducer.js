import { RECEIVE_PROFILE } from '../../actions/profile_actions';
import { REMOVE_CHECKIN } from '../../actions/checkin_actions';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return Object.assign({}, state, action.profile)
    case REMOVE_CHECKIN:
      const newState = Object.assign({}, state);
      if (newState.checkins && newState.checkins[action.checkinId]) {
        delete newState.checkins[action.checkinId]
      }
      return newState;
    default:
      return state;
  }
}

export default ProfileReducer;