import React, { Component } from 'react';
import {
  TopicWrapper,
  TopicItem,
  Morelink
} from '../style';
import { connect } from 'react-redux';
// import { actionCreators } from './store';
class Topic extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
         {
          topicList.map((item)=>{
             return <TopicItem key={item.get('id')}>
                <img className='topic-pic' src={item.get('imgUrl')}/>
                {item.get('title')}
              </TopicItem>
           })
         }
          <Morelink>更多链接~</Morelink>
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}


export default connect(mapStateToProps, null)(Topic);