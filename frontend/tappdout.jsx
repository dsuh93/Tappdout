import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

//test imports
// import * as SessionAPIUtil from './util/session_api_util';
// import * as BreweriesAPIUtil from './util/brewery_api_util';
// import * as BeersAPIUtil from './util/beer_api_util';
import * as ToastsAPIUtil from './util/toast_api_util';
import * as ToastActions from './actions/toast_actions';
import * as BeerActions from './actions/beer_actions';
// import * as CheckinAPIUtil from './util/checkin_api_util';
import * as CheckinActions from './actions/checkin_actions';
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
  //testing Checkin actions 
  // window.fetchCheckins = CheckinActions.fetchCheckins;
  // window.fetchCheckin = CheckinActions.fetchCheckin;
  // window.createCheckin = CheckinActions.createCheckin;
  // window.deleteCheckin = CheckinActions.deleteCheckin;
  
  //testing toast_api_util ajax fxs
  // window.createToast = ToastsAPIUtil.createToast;
  // window.deleteToast = ToastsAPIUtil.deleteToast;
  //testing toast actions
  window.createToast = ToastActions.createToast;
  window.deleteToast = ToastActions.deleteToast;

  //testing beer_api_util ajax fxs
  // window.fetchBeers = BeersAPIUtil.fetchBeers;
  // window.fetchBeer = BeersAPIUtil.fetchBeer;
  window.createBeer = BeerActions.createBeer;
  // window.updateBeer = BeersAPIUtil.updateBeer;
  // window.deleteBeer = BeersAPIUtil.deleteBeer;


  //testing session_api_util ajax fxs
  // window.login = SessionAPIUtil.login;
  // window.signup = SessionAPIUtil.signup;
  // window.logout = SessionAPIUtil.logout;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

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