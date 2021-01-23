import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import breweriesReducer from './breweries_reducer';
import beersReducer from './beers_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  breweries: breweriesReducer,
  beers: beersReducer
})

export default entitiesReducer;