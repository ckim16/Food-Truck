import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../components/list';
import { connect } from 'react-redux';

class TruckList extends Component {
  constructor(props) {
    super(props);
  }

  renderTrucks() {
    if (this.props.filteredTrucks.length > 0) {
      return this.props.filteredTrucks.map((filteredTruck) => {
        return (
          <List key={filteredTruck.objectid} applicant={filteredTruck.applicant} address={filteredTruck.address} facilitytype={filteredTruck.facilitytype} />
        );
      });
    } else {
      return this.props.allTrucks.map((truck) => {
        return (
          <List key={truck.objectid} applicant={truck.applicant} address={truck.address} facilitytype={truck.facilitytype} />
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