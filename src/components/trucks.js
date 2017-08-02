import React, { Component } from 'react';

import { greatPlaceStyle, greatPlaceStyleHover, tooltipStyle } from '../helper/truck_style';

export default class Trucks extends Component {
  render() {
    // const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;
    const style = this.props.hover ? {color: 'red', cursor: 'pointer', zIndex: '500000', fontSize: '20px'} : {color: 'blue', cursor: 'pointer', zIndex: '0', fontSize: '10px'};
    const ts = this.props.hover ? tooltipStyle : {display: 'none'};
    return (
      <i className="fa fa-truck fa2x" style={style}>
          <div style={ts} className="hint__content">
            Name: {this.props.name}<br/>
            Hours: {this.props.hours}
          </div>
      </i>
    );
  }
}
