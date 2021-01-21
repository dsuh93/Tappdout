import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

//test imports
import * as SessionAPIUtil from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  
  
  //for testing, don't forget to delete these later
  //testing session_api_util ajax fxs
  // window.login = SessionAPIUtil.login;
  // window.signup = SessionAPIUtil.signup;
  // window.logout = SessionAPIUtil.logout;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  //testing for store
  window.store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;







  // const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
})