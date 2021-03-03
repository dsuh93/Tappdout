import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import breweriesReducer from './breweries_reducer';
import beersReducer from './beers_reducer';
import checkinsReducer from './checkins_reducer';
import searchesReducer from './searches_reducer';
import profileReducer from './profile_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  breweries: breweriesReducer,
  beers: beersReducer,
  checkins: checkinsReducer,
  searches: searchesReducer,
  profile: profileReducer
})

export default entitiesReducer;