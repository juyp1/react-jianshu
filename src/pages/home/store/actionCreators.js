import * as actionTypes from './constants'
import { fromJS } from 'immutable';
import axios from 'axios';
export const getTopicList = () => {
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
  data
})