import * as actionTypes from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOPICLIST:
      return state.merge({
        'topicList': action.topicList,
        'articleList': action.articleList,
        'recommendList': action.recommendList
      })
    case actionTypes.LOADMORE:
      return state.merge({
        'articleList': state.get('articleList').concat(action.articleList),
        'articlePage': action.nextPage
      })
    case actionTypes.SHOWSCROLLTOP:
      return state.merge({
        showScroll: action.isShow
      })
    default:
      return state;
  }
}