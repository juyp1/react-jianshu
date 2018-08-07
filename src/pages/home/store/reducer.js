import * as actionTypes from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '摄影',
    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOPICLIST:
      return state.set('topicList', action.data)

    default:
      return state;
  }
}