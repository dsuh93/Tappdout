import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCheckin } from '../../actions/checkin_actions';
import { createToast, deleteToast } from '../../actions/toast_actions';
import CheckinShow from './checkin_show';

const msp = (state, ownProps) => {
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId],
    checkinId: ownProps.match.params.checkinId,
    currentUser: state.session.id
  }
}

const mdp = dispatch => ({
  fetchCheckin: (checkinId) => dispatch(fetchCheckin(checkinId)),
  createToast: (toast) => dispatch(createToast(toast)),
  deleteToast: (toastId) => dispatch(deleteToast(toastId))
})

export default withRouter(connect(msp, mdp)(CheckinShow));