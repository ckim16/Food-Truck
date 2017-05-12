import React, { Component, PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import { camelize } from '../helper/camelize';
const evtNames = ['ready', 'click', 'dragend'];

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update?', prevProps)
    if (prevProps.google !== this.props.google) {
      console.log('DidUpdate');
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentDidMount() {
    // if (this.props.centerAroundCurrentLocation) {
    //     if (navigator && navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((pos) => {
    //             const coords = pos.coords;
    //             this.setState({
    //                 currentLocation: {
    //                     lat: coords.latitude,
    //                     lng: coords.longitude
    //                 }
    //             })
    //         });
    //     }
    // }
    this.loadMap();
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng);
        map.panTo(center);
    }
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
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
        minZoom: 12
      });
      this.map = new maps.Map(node, mapConfig);
      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });

      maps.event.trigger(this.map, 'ready');
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = `on${camelize(evtName)}`;

    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  renderChildren() {
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    return (
      <div ref="map" className="map">{this.renderChildren()}</div>
    );
  }
}

GoogleMap.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: React.PropTypes.bool,
  onMove: React.PropTypes.func,
};

evtNames.forEach(e => GoogleMap.propTypes[e] = T.func)

GoogleMap.defaultProps = {
  minZoom: 12,
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.763972,
    lng: -122.431297
  },
  centerAroundCurrentLocation: false
}
