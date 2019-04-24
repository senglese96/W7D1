export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const recieveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}