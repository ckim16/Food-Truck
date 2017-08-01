import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';

import Trucks from '../components/trucks';
import { onHoverTruck } from '../actions/index';

class NewTruckMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 37.763972,
      lng: -122.431297,
      zoom: 13
    };

    this._onChildClick = this._onChildClick.bind(this);
    this._onChildMouseEnter = this._onChildMouseEnter.bind(this);
    this._onChildMouseLeave = this._onChildMouseLeave.bind(this);
  }

  _onChildClick(key, childProps) {
    this.setState({ lat: +childProps.lat, lng: +childProps.lng });
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
        <div>Loading Trucks...</div>
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
            hours={truck.dayshours}
            />
        );
      });
      return (
        <div className="map">
          <GoogleMap
            options={{minZoom: 12}}
            center={[this.state.lat, this.state.lng]}
            zoom={this.state.zoom}
            onChildClick={this._onChildClick}
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
    hoverTruck: state.hoverTruck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHoverTruck: (key) => dispatch(onHoverTruck(key))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTruckMap);
