import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';
import Marker from '../components/marker';
import InfoWindow from '../components/infoWindow';

class TruckMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    } else {
      this.setState({
        showingInfoWindow: true,
        activeMarker: marker,
        selectedPlace: props
      });  
    }
  }

  onMapClick() {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  renderMarkers() {    
    if (this.props.filteredTrucks.length > 0) {
      return this.props.filteredTrucks.map((truck) => {
        const pos = {lat: +truck.latitude, lng: +truck.longitude};
        return (
          <Marker position={pos} key={truck.objectid} name={truck.applicant} location={truck.locationdescription} hour={truck.dayshours} onClick={this.onMarkerClick}/>
        );
      });
    } else {
      return this.props.allTrucks.map((truck) => {
        const pos = {lat: +truck.latitude, lng: +truck.longitude};
        return (
          <Marker position={pos} key={truck.objectid} name={truck.applicant} location={truck.locationdescription} hour={truck.dayshours} onClick={this.onMarkerClick} />
        );
      });
    }
  }

  render() {
    const style = {width: '60vw', height: '100vh', float: 'left'}
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div style={style}>
        <GoogleMap google={window.google} onClick={this.onMapClick}>
          {this.renderMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
              <div>
                <p>{this.state.selectedPlace.name}</p>
                <p>{this.state.selectedPlace.location}</p>
                <p>{this.state.selectedPlace.hour}</p>
              </div>
          </InfoWindow>
        </GoogleMap>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    filteredTrucks: state.trucks
  };
}

export default connect(mapStateToProps)(TruckMap);