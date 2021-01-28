import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCheckin } from '../../actions/checkin_actions';
import CheckinForm from './checkin_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    userId: state.session.id,
    beerId: ownProps.beerId,
    errors: state.errors.checkin
  }
};

const mdp = dispatch => ({
  createCheckin: (checkin) => dispatch(createCheckin(checkin)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(msp, mdp)(CheckinForm));

