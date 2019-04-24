import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx'
import {fetchTodos} from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.fetchTodos = fetchTodos;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});