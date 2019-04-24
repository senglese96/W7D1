import { RECEIVE_TODOS, CLEAR_ERRORS } from '../actions/error_actions';

const errorReducer = (errors = [], action){
  switch(action.type){
    case RECEIVE_TODOS:
      errors = errors.concat(action.errors);
      return errors;
    case CLEAR_ERRORS:
      errors = [];
      return errors;
    default:
      errors
  }
}

