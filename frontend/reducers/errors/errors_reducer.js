import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import beerFormErrorsReducer from './beer_form_errors_reducer';
import checkinErrorsReducer from './checkin_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  beerForm: beerFormErrorsReducer,
  checkin: checkinErrorsReducer
})

export default errorsReducer;