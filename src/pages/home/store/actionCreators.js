import * as actionTypes from './constants'
import { fromJS } from 'immutable';
import axios from 'axios';
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch((e) => {
      console.log(e)
    })
  }
}

const changeList = (data) => ({
  type: actionTypes.TOPICLIST,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const data = res.data;
      dispatch(addHomeList(data.data, page + 1))
    }).catch((e) => {
      console.log(e)
    })
  }
}

const addHomeList = (data, nextPage) => ({
  type: actionTypes.LOADMORE,
  articleList: fromJS(data),
  nextPage: nextPage
})

export const showscroll = (isShow) => ({
  type: actionTypes.SHOWSCROLLTOP,
  isShow
})