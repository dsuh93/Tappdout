import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCheckins } from '../../actions/checkin_actions';
import { createToast, deleteToast } from '../../actions/toast_actions';
import CheckinShow from './checkin_show';

const msp = (state, ownProps) => {
  debugger
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId],
    checkinId: ownProps.match.params.checkinId,
    currentUser: state.session.id
  }
}

const mdp = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins()),
  createToast: (toast) => dispatch(createToast(toast)),
  deleteToast: (toastId) => dispatch(deleteToast(toastId))
})

export default withRouter(connect(msp, mdp)(CheckinShow));