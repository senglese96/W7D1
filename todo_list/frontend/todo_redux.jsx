import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js'
import Root from './components/root.jsx'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.allTodos = allTodos
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});