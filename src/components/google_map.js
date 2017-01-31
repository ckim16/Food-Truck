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
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      // let zoom = 13;
      // let lat = 37.763972;
      // let lng = -122.431297;
      let {initialCenter, zoom} = this.props;
      const {lat, lng} = initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div ref="map" className="map"></div>
    );
  }
}

GoogleMap.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
}

GoogleMap.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.763972,
    lng: -122.431297
  }
}