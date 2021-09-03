import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

//test imports
// make a change 1

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
  //testing for store
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  //testing for external brewery db
  // window.breweryDBGet = SessionAPIUtil.breweryDBGet;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})