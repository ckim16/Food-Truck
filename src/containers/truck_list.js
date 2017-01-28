import React, { Component } from 'react';
import { connect } from 'react-redux';

class TruckList extends Component {
  constructor(props) {
    super(props);

    this.renderTrucks = this.renderTrucks.bind(this);
  }

  renderTrucks() {
    console.log('this', this.props);
    if (this.props.filteredTrucks.length === 0) {
      return this.props.allTrucks.map((truck) => {
        return (
          <div className="list-box" key={truck.objectid}>
            Name: {truck.applicant}<br/>
            Address: {truck.address}<br/>
            Type: {truck.facilitytype}
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