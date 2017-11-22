import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../components/list';
import { onHoverTruck, onCenterChange } from '../actions/index';

class TruckList extends Component {
  constructor(props) {
    super(props);
  }

  renderTrucks() {
    if (!this.props.trucks) {
      return (
        <div className="truckDescription" style={{width: '100%'}}>Loading Lists....</div>
      );
    }
    return this.props.trucks.map((truck) => {
      return (
        <List
          key={truck.objectid}
          applicant={truck.applicant}
          address={truck.address}
          facilitytype={truck.facilitytype}
          onHover={() => this.props.onHoverTruck(truck.latitude)}
          onLeave={() => this.props.onHoverTruck(null)}
          click={() => this.props.onCenterChange([+truck.latitude, +truck.longitude])}
          hover={this.props.hoverTruck == truck.latitude}
        />
      );
    });

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
    trucks: state.trucks,
    hoverTruck: state.hoverTruck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHoverTruck: (id) => dispatch(onHoverTruck(id)),
    onCenterChange: ([lat, lng]) => dispatch(onCenterChange([lat, lng]))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
