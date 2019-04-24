import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer.js'
import { logger } from 'redux-logger'
import thunk from '../middleware/thunk.js';

const initialState = {
  todos:{
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    }
  }
};


const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
}

export default configureStore;
