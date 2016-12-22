import React, { Component } from 'react';
import Map, { Marker } from 'google-maps-react';
import ReactTooltip from 'react-tooltip';

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.renderTrucks = this.renderTrucks.bind(this);
  }

  onMouseoverMarker(props, marker, e) {
    console.log('this', this.name);
  }

  renderTrucks() { 
    if (this.props.list.length === 0) {
      return;
    }   

    return this.props.list.map((truckInfo) => {
      return (<Marker
        key={truckInfo.objectid}
        name={truckInfo.applicant}
        onMouseover={this.onMouseoverMarker} 
        position={{lat:truckInfo.latitude, lng:truckInfo.longitude}} />
      );
    });
  }

  
  render() {

    return (
      <Map google={window.google}
        className={'map'}
        style={{width: '50%', height: '80%', position: 'relative'}}
        zoom={13}>
        {this.renderTrucks()}
      </Map>
    );
  }
}