import React, { Component } from 'react';

import List from '../components/list';
import { connect } from 'react-redux';

class TruckList extends Component {
  constructor(props) {
    super(props);
    this.onMouseHover = this.onMouseHover.bind(this);
  }

  onMouseHover() {
    console.log('hover');
  }

  renderTrucks() {
    if (this.props.filteredTrucks.length > 0) {
      return this.props.filteredTrucks.map((filteredTruck) => {
        return (
          <List key={filteredTruck.objectid} applicant={filteredTruck.applicant} address={filteredTruck.address} facilitytype={filteredTruck.facilitytype} onHoverHandler={this.onMouseHover}/>
        );
      });
    } else {
      return this.props.allTrucks.map((truck) => {
        return (
          <List key={truck.objectid} applicant={truck.applicant} address={truck.address} facilitytype={truck.facilitytype} onHoverHandler={this.onMouseHover}/>
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
    allTrucks: state.allTrucks,
    filteredTrucks: state.filteredTrucks
  };
}

export default connect(mapStateToProps)(TruckList);
