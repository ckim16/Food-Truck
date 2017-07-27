import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter() {
    this.props.onHover();
  }

  _onMouseLeave() {
    this.props.onLeave();
  }

  render() {
    return(
      <div className="list-box" onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
        <i className="fa fa-truck" aria-hidden="true"></i>: {this.props.applicant}<br/>
        <i className="fa fa-address-book" aria-hidden="true"></i>: {this.props.address}<br/>
        <i className="fa fa-info" aria-hidden="true"></i>: {this.props.facilitytype}
      </div>
    );
  }
}
