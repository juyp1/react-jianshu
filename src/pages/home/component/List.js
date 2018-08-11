import React, { PureComponent } from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style.js'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    
    const { articleList, page, getLoadMore } = this.props;

    return (
      <div>
       {
        articleList.map((item,index) => {
          return(
            
            <Link key={index} to={'/detail?id=' + item.get('id')}>
            <ListItem >
            <img className='pic' src={item.get('imgUrl')} alt="" />
            <ListInfo>
              <h3 className='title'> {item.get('title')} </h3>
              <p className='desc'>{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
            </Link>
          )
          
        })
       }
       <LoadMore onClick={ ()=> getLoadMore(page) }>更多文字</LoadMore>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getLoadMore(page){
      dispatch(actionCreators.getMoreList(page))
     }
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
