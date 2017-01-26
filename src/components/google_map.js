import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

  // componentWillMount() {
  //   document.addEventListener('mouseover', this.handleHover, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mouseover', this.handleHover);
  // }

  // handleHover(e, marker) {
  //   console.log('marker', marker);
  //   const hoveredPlace = e.target.childNodes[4].data;
  //   if (e.target.className === 'list-box') {
  //     if (this.props.filteredList.length === 0) {
  //       this.props.list.map((truck) => {
  //         if (truck.applicant === hoveredPlace) {
            
  //         }
  //       });
  //     }
  //   }
  // }
  
  onMarkerClick(props, marker, e) {
    console.log('p', props, 'm', marker, 'e2', e);
    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
    } else { 
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  } 

  onMapClicked(props) {
    console.log('map click', props);
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
          animation={'drop'}
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
          animation={google.maps.Animation.BOUNCE}
          position={{lat:truckInfo.latitude, lng:truckInfo.longitude}} />
        );
      });
    }
  }

  
  render() {
    return (
      <Map google={window.google}
        className={'map'}
        style={{width: '60vw', height: '100vh'}}
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