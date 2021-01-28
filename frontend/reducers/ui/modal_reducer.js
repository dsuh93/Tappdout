import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return [action.modal, action.beerId];
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;