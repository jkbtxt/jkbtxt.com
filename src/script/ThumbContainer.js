import React, { Component } from 'react';
import WorkThumb from "../script/WorkThumb.js";

class ThumbContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="thumbContainer">
        {this.props.thumbs.map((item) => <WorkThumb payload={item} />)}
      </div>
    );
  }
}

export default ThumbContainer;
