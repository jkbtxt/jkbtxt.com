import React, { Component } from 'react';

class WorkThumb extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      payload:
    }*/
  }

  render() {
    return (<div>{this.props.payload.name}</div>)
  }
}

export default WorkThumb;
