import * as actionTypes from './constants'
import { fromJS } from 'immutable';
import axios from 'axios';
export const searchFoucs = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BlUR
})

export const mouseEnter = () => ({
  type: actionTypes.SEARCH_MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.SEARCH_MOUSE_LEAVE
})

export const changePage = (page) =>({
  type: actionTypes.SEARCH_CHANG_PAGE,
  page
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerlist.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch((e) => {
      console.log(e)
    })
  }
}

const changeList = (data) => ({
  type: actionTypes.SEARCH_SWITCH,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
 