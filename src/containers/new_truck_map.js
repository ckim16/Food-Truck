import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';

import Trucks from '../components/trucks';
import { onHoverTruck, onCenterChange } from '../actions/index';

class NewTruckMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 13
    };

    this._onChildClick = this._onChildClick.bind(this);
    this._onBoundChange = this._onBoundChange.bind(this);
    this._onChildMouseEnter = this._onChildMouseEnter.bind(this);
    this._onChildMouseLeave = this._onChildMouseLeave.bind(this);
  }

  _onBoundChange({bound, center}) {
    console.log('center', center);
    this.props.onCenterChange(center);
  }

  _onChildClick(key, childProps) {
    this.props.onCenterChange([+childProps.lat, +childProps.lng]);
  }

  _onChildMouseEnter(key, childProps) {
    this.props.onHoverTruck(childProps.lat);
  }

  _onChildMouseLeave() {
    this.props.onHoverTruck(null);
  }

  render() {
    if (!this.props.trucks) {
      return (
        <div className="map">Loading Trucks...</div>
      )
    } else {
      const trucks = this.props.trucks.map((truck) => {
        return (
          <Trucks
            key={truck.objectid}
            lat={truck.latitude}
            lng={truck.longitude}
            block={truck.block}
            hover={this.props.hoverTruck == truck.latitude}
            name={truck.applicant}
            menu={truck.fooditems}
            hours={truck.dayshours}
          />
        );
      });
      return (
        <div className="map">
          <GoogleMap
            options={{minZoom: 12}}
            center={this.props.center}
            zoom={this.state.zoom}
            onChildClick={this._onChildClick}
            onBouncChange={this._onBoundChange}
            onChildMouseEnter={this._onChildMouseEnter}
            onChildMouseLeave={this._onChildMouseLeave}
          >
            {trucks}
          </GoogleMap>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    trucks: state.trucks,
    hoverTruck: state.hoverTruck,
    center: state.center
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHoverTruck: (key) => dispatch(onHoverTruck(key)),
    onCenterChange: ([lat, lng]) => dispatch(onCenterChange([lat, lng]))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTruckMap);
