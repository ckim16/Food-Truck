import React, { Component } from 'react';

import { greatPlaceStyle, greatPlaceStyleHover } from '../helper/truck_style';

export default class Trucks extends Component {
  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;
    return (
      <div className="hint--html hint--hoverable hint--top" style={style}>
          <div>{this.props.block}</div>
          <div style={{width: 80}} className="hint__content">
            ?
          </div>
       </div>
    );
  }
}
