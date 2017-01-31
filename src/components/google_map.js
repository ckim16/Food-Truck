import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const latLng = {lat: 37.742972, lng: -122.431297};

export default class GoogleMap extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      console.log('DidUpdate');
      this.loadMap();
    }
  }

  componentDidMount() {
    console.log('DidMount');
    this.loadMap();
  }

  loadMap() {
    console.log('google',this.props);
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      console.log('maps', maps);
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const zoom = 13;
      let lat = 37.742972;
      let lng = -122.431297;
      const center = new maps.LatLng(lat, lng);
      console.log('center', center);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);
      console.log('inside', this.map);
    }
  }

  render() {
    return (
      <div ref="map" className="map"></div>
    );
  }
}