import React, { PureComponent } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js'
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store'
class Home extends PureComponent {
  componentDidMount() {
    this.props.getTopList();
    this.bindEvents();
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changShow)
  }
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
          {
            showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
          }

        </HomeRight>

      </HomeWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    topiclist: state.getIn(['home', 'topicList']),
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopList() {
      dispatch(actionCreators.getHomeInfo())
    },
    changShow() {
      let scrollheight = document.documentElement.scrollTop;
      if (scrollheight > 400) {
         const action = actionCreators.showscroll(true);
         dispatch(action)
      } else {
        const action = actionCreators.showscroll(false);
        dispatch(action)
      }

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);