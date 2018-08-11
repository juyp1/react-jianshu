import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class Detail extends Component {

  componentDidMount() {
    console.log('1111')
    console.log(this.props.match.params.id)
  }

  render() {

    return (
      <div>Home</div>
    )
  }
  
}
const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps, null)(withRouter(Detail));