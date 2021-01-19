import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
// import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  
  
  
  //for testing, don't forget to delete these later
  //testing session_api_util ajax fxs
  window.login = SessionAPIUtil.login;
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;







  // const store = configureStore();
  ReactDOM.render(<h1>React is working</h1>, root);
})