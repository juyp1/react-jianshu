import * as actionTypes from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BlUR:
      return state.set('focused', false);
    case actionTypes.SEARCH_SWITCH:
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.SEARCH_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.SEARCH_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.SEARCH_CHANG_PAGE:
       return state.set('page', action.page);
    default:
      return state;
  }
}