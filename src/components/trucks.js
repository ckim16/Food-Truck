import React, { Component } from 'react';

import { greatPlaceStyle, greatPlaceStyleHover } from '../helper/truck_style';

export default class Trucks extends Component {
  render() {
    // const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;
    const style = this.props.hover ? {color: 'red', cursor: 'poiner'} : {color: 'blue', cursor: 'pointer'};
    return (
      <i className="fa fa-truck fa2x" style={style}>
          <div style={{width: 80}} className="hint__content">
            ?
          </div>
       </i>
    );
  }
}
