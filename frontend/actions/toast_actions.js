import * as ToastAPIUtil from '../util/toast_api_util';

export const RECEIVE_CHECKIN_TOASTS = "RECEIVE_CHECKIN_TOASTS";
export const REMOVE_CHECKIN_TOAST = "REMOVE_CHECKIN_TOAST";

const receiveCheckinToasts = (checkinToasts) => ({
  type: RECEIVE_CHECKIN_TOASTS,
  checkinToasts
})

const removeToast = (deletedToast) => ({
  type: REMOVE_CHECKIN_TOAST,
  deletedToast
})

//after creating toast, return associated checkin with toasts added
export const createToast = toast => dispatch => ToastAPIUtil.createToast(toast)
  .then(checkinToasts => dispatch(receiveCheckinToasts(checkinToasts)));

//after deleting toast, return deleted toast, and access toaster_id in reducer to remove from checkin reducer
export const deleteToast = toastId => dispatch => ToastAPIUtil.deleteToast(toastId)
  .then((deletedToast) => dispatch(removeToast(deletedToast)));

