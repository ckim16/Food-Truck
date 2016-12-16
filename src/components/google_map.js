import React, {PropTypes, Component} from 'react';
import Map, { Marker } from 'google-maps-react';
// center: {lat: 37.7749, lng: 122.4194}

export default class GoogleMap extends Component {
  
  render() {
    return (
      <Map google={window.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        zoom={10}>
      </Map>
    );
  }
}