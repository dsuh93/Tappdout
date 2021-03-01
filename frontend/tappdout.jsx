import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

//test imports
import * as BeerSearchAction from './actions/beer_actions';
import * as BrewerySearchAction from './actions/brewery_actions';
import * as CommentActions from './actions/comment_actions';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  //for testing, don't forget to delete these later
  // testing search actions
  window.fetchSearchBeers = BeerSearchAction.fetchSearchBeers;
  window.fetchSearchBreweries = BrewerySearchAction.fetchSearchBreweries;

  //testing for store
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  //testing for external brewery db
  // window.breweryDBGet = SessionAPIUtil.breweryDBGet;

  // const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})