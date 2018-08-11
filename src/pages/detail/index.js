import React, { Component } from 'react';
class Detail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>Home</div>
    )
  }
}

export default Detail