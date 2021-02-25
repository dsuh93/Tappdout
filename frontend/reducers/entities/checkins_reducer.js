import {
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  REMOVE_CHECKIN
} from '../../actions/checkin_actions';

import {
  RECEIVE_CHECKIN_TOASTS,
  REMOVE_CHECKIN_TOAST
} from '../../actions/toast_actions';

import {
  RECEIVE_CHECKIN_COMMENT,
  RECEIVE_UPDATED_COMMENT,
  REMOVE_CHECKIN_COMMENT
} from '../../actions/comment_actions';

const checkinsReducer = (state = {}, action ) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    case RECEIVE_CHECKIN:
      return Object.assign({}, state, { [action.checkin.id]: action.checkin });
    case RECEIVE_CHECKIN_TOASTS:
      return Object.assign({}, state, { [action.checkinToasts.id]: action.checkinToasts});
    case RECEIVE_CHECKIN_COMMENT:
      return Object.assign({}, state, { [action.checkinWithComment.id]: action.checkinWithComment})
    case RECEIVE_UPDATED_COMMENT:
      newState[action.updatedComment.checkin_id].comments[action.updatedComment.id] = action.updatedComment;
      return newState;
    case REMOVE_CHECKIN_COMMENT:
      delete newState[action.deletedComment.checkin_id].comments[action.deletedComment.id];
      return newState;
    case REMOVE_CHECKIN_TOAST:
      delete newState[action.deletedToast.checkin_id].toasts[action.deletedToast.toaster_id];
      return newState;
    case REMOVE_CHECKIN:
      delete newState[action.checkinId];
      return newState;
    default:
      return state;
  }
}

export default checkinsReducer;