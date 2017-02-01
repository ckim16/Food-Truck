import React, { Component } from 'react';
import { connect } from 'react-redux';

class TruckList extends Component {
  constructor(props) {
    super(props);

    this.renderTrucks = this.renderTrucks.bind(this);
  }

  renderTrucks() {
    if (this.props.filteredTrucks.length === 0) {
      return this.props.allTrucks.map((truck) => {
        return (
          <div className="list-box" key={truck.objectid}>
            <i className="fa fa-truck" aria-hidden="true"></i>: {truck.applicant}<br/>
            <i className="fa fa-address-book" aria-hidden="true"></i>: {truck.address}<br/>
            <i className="fa fa-info" aria-hidden="true"></i>: {truck.facilitytype}
          </div>
        );
      });
    } else {
      return this.props.filteredTrucks.map((filteredTruck) => {
        return (
          <div className="list-box" key={filteredTruck.objectid}>
            Name: {filteredTruck.applicant}<br/>
            Address: {filteredTruck.address}<br/>
            Type: {filteredTruck.facilitytype}
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