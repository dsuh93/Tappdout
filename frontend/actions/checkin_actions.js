import * as CheckinAPITUtil from '../util/checkin_api_util';

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN";

const receiveAllCheckins = checkins => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins 
});
const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin
});
const removeCheckin = checkinId => ({
  type: REMOVE_CHECKIN,
  checkinId
});

export const fetchCheckins = () => dispatch => CheckinAPITUtil.fetchCheckins()
  .then( checkins => dispatch(receiveAllCheckins(checkins)));

export const fetchCheckin = (checkin) => dispatch => CheckinAPITUtil.fetchCheckin(checkin)
  .then( checkin => dispatch(receiveCheckin(checkin)));

export const createCheckin = (checkin) => dispatch => CheckinAPITUtil.createCheckin(checkin)
  .then( checkin => dispatch(receiveCheckin(checkin)));

export const deleteCheckin = (checkinId) => dispatch => CheckinAPITUtil.deleteCheckin(checkinId)
  .then( () => dispatch(removeCheckin(checkinId)));

