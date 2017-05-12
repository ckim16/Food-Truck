import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver() {
    if (this.props.onHoverHandler) {
      this.props.onHoverHandler();
    } else {
      console.log('no');
    }
  }
 
  render() {
    return(
      <div className="list-box" onMouseEnter={this.mouseOver}>
        <i className="fa fa-truck" aria-hidden="true"></i>: {this.props.applicant}<br/>
        <i className="fa fa-address-book" aria-hidden="true"></i>: {this.props.address}<br/>
        <i className="fa fa-info" aria-hidden="true"></i>: {this.props.facilitytype}
      </div>
    );
  }
}