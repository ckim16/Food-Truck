import React, { PropTypes, Component } from 'react';
import Map, { Marker } from 'google-maps-react';

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.renderTrucks = this.renderTrucks.bind(this);
  }

  renderTrucks() { 
    if (this.props.list.length === 0) {
      return;
    }   

    return this.props.list.map((truckInfo) => {
      return <Marker
        key={truckInfo.objectid} 
        position={{lat:truckInfo.latitude, lng:truckInfo.longitude}} />
    });
  }
  
  render() {

    return (
      <Map google={window.google}
        style={{width: '50%', height: '80%', position: 'relative'}}
        zoom={13}>
        {this.renderTrucks()}
      </Map>
    );
  }
}