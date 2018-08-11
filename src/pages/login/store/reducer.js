import * as actionTypes from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('login', action.result);
    case actionTypes.LOGINOUT:
      return state.set('login', action.result);
    default:
      return state;
  }
}