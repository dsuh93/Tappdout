import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import beerFormErrors from './beer_form_errors';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  beerForm: beerFormErrors
})

export default errorsReducer;