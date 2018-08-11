import React, { PureComponent } from 'react';
import {
  RecommendItem,
} from '../style.js';
import { connect } from 'react-redux';
class Recommend extends PureComponent {

  render() {
    const { recommendList } = this.props;
    return (
      <div>
        {
          recommendList.map((item) => {
            return (
              <div key={item.get('id')}>
                <RecommendItem>
                  <img className='pic' src={item.get('imgUrl')} alt="Banner s 3" />
                </RecommendItem>
              </div>
            )
          })
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList']),
  }
}


export default connect(mapStateToProps, null)(Recommend);

