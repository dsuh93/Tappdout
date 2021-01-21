import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

//test imports
import * as SessionAPIUtil from './util/session_api_util';
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

  // const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})