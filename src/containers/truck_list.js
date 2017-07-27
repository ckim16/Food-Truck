import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../components/list';
import { onHoverTruck } from '../actions/index';

class TruckList extends Component {
  constructor(props) {
    super(props);
  }

  renderTrucks() {
    if (!this.props.trucks) {
      return (
        <div>Loading Lists....</div>
      )
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
    onHoverTruck: (id) => dispatch(onHoverTruck(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
