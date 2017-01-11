import React, { Component } from 'react';
import Map, { Marker, InfoWindow } from 'google-maps-react';

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.renderTrucks = this.renderTrucks.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  } 

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  renderTrucks() {
    // assign marker with id
    if (this.props.filteredList.length !== 0 || !this.props.filteredList) {
      return this.props.filteredList.map((filteredTruck) => {
        return (<Marker
          key={filteredTruck.objectid}
          name={filteredTruck.applicant}
          address={filteredTruck.address}
          hours={filteredTruck.dayshours}
          items={filteredTruck.fooditems}
          onClick={this.onMarkerClick}
          icon={'https://maxcdn.icons8.com/windows8/PNG/26/Transport/truck-26.png'}
          position={{lat:filteredTruck.latitude, lng:filteredTruck.longitude}} />
        );
      });
    } else {
      return this.props.list.map((truckInfo) => {
        return (<Marker
          key={truckInfo.objectid}
          name={truckInfo.applicant}
          address={truckInfo.address}
          hours={truckInfo.dayshours}
          items={truckInfo.fooditems}
          onClick={this.onMarkerClick}
          position={{lat:truckInfo.latitude, lng:truckInfo.longitude}} />
        );
      });
    }
  }

  
  render() {
    return (
      <Map google={window.google}
        className={'map'}
        onClick={this.onMapClicked}
        zoom={13}>
        {this.renderTrucks()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <p>
            {this.state.selectedPlace.name}<br /> 
            {this.state.selectedPlace.address}<br /> 
            {this.state.selectedPlace.hours}<br />
            {this.state.selectedPlace.items}
          </p>
        </InfoWindow>        
      </Map>
    );
  }
}