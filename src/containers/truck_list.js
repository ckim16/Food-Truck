import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

class TruckList extends Component {
  constructor(props) {
    super(props);

    this.renderTrucks = this.renderTrucks.bind(this);

    this.state = { hovered: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ hovered: true });
  }

  onMouseOut() {
    this.setState({ hovered: false });
  }

  changeStyle() {
    if (this.state.hovered) {
        return { background: "#E1E0E2" };
      } else {
        return { background: "white" };
      }
  }

  renderTrucks() {
    if (this.props.filteredTrucks.length === 0) {
      return this.props.allTrucks.map((truck) => {
        return (
          <div className="list-box" key={truck.objectid} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            <i className="fa fa-truck" aria-hidden="true"></i>: {truck.applicant}<br/>
            <i className="fa fa-address-book" aria-hidden="true"></i>: {truck.address}<br/>
            <i className="fa fa-info" aria-hidden="true"></i>: {truck.facilitytype}
          </div>
        );
      });
    } else {
      return this.props.filteredTrucks.map((filteredTruck) => {
        return (
          <div className="list-box" key={filteredTruck.objectid} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            <i className="fa fa-truck" aria-hidden="true"></i>: {filteredTruck.applicant}<br/>
            <i className="fa fa-address-book" aria-hidden="true"></i>: {filteredTruck.address}<br/>
            <i className="fa fa-info" aria-hidden="true"></i>: {filteredTruck.facilitytype}
          </div>
        );
      });
    }
  }
  
  render() { 
    return(
      <div className="truckDescription">
        {this.renderTrucks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredTrucks: state.trucks
  };
}

export default connect(mapStateToProps)(TruckList);