import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style.js'
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
          <Topic/>
 
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
 
      topiclist: state.getIn(['home', 'topicList']),
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
       
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);