import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

export default class TruckMap extends Component {
  static defaultProps() {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap>
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      </GoogleMap>
    );
  }
}