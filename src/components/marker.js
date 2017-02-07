import React, { Component, PropTypes as T } from 'react';
import { camelize } from '../helper/camelize';

const evtNames = ['click', 'mouseover', 'recenter', 'dragend'];

export default class Marker extends Component {
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        // The relevant props have changed

      this.renderMarker();
    }
  }

  //may need componentDidMount
  componentDidMount() {
    this.renderMarker();
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('will update', nextProps);
  // }

  componentWillUnmount() {
    if (this.props) {
      this.marker.setMap(null);
    }
  }

  renderMarker() {
    let {
      map, google, position, mapCenter
    } = this.props;
    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
        map: map,
        position: position,
        icon: 'http://www.megaicons.net/static/img/icons_sizes/519/1910/16/mail-truck-icon.png'
    };
    this.marker = new google.maps.Marker(pref);
    evtNames.forEach(e => {
      this.marker.addListener(e, this.handleEvent(e));
    });
  }

  handleEvent(evt) {
    return (e) => {
      const evtName = `on${camelize(evt)}`
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.marker, e);
      }
    }
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}

evtNames.forEach(e => Marker.propTypes[e] = T.func)
