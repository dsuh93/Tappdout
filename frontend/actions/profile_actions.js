import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const fetchUser = userId => dispatch => ProfileAPIUtil.fetchUser(userId)
  .then(profile => dispatch(receiveProfile(profile)));