import * as actionTypes from './constants'
import { fromJS } from 'immutable';
import axios from 'axios';

export const login = (account, passowrd) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&passowrd=' + passowrd).then((res) => {
      dispatch({
        type: actionTypes.LOGIN,
        result: res.data.data
      })
    })
  }
}

// 退出登录
export const logOut = () => ({
  type: actionTypes.LOGINOUT,
  result: false
})