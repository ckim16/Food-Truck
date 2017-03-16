import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver() {
    if (this.props.onMouseHandler) {
      this.props.onMouseHandler();
    } else {
      console.log('no');
    }
  }
 
  render() {
    return(
      <div className="list-box" onMouseEnter={this.mouseOver}>
        <i className="fa fa-truck" aria-hidden="true"></i>: {props.applicant}<br/>
        <i className="fa fa-address-book" aria-hidden="true"></i>: {props.address}<br/>
        <i className="fa fa-info" aria-hidden="true"></i>: {props.facilitytype}
      </div>
    );
  }
}