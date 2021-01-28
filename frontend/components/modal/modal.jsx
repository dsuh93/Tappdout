import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckinFormContainer from '../checkin/checkin_form_container';

function Modal({modal, closeModal, beers}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal[0]) {
    case 'checkin':
      component = <CheckinFormContainer beerId={modal[1]} beers={beers}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}


const msp = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    beers: state.entities.beers
  }
}

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(Modal));



