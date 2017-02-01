import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';
import Marker from '../components/marker';

export default class TruckMap extends Component {
  renderMarkers() {
    console.log('up')
    console.log('data', this.props.allTrucks);
    if (!this.props.filteredTrucks) {
      return this.props.allTrucks.map((truck) => {
        const pos = {lat: +truck.latitude, lng: +truck.longitude};
        return (
          <Marker position={pos} key={truck.objectid} />
        );
      });
    }
  }

  render() {
    console.log('ehy')
    const style = {width: '60vw', height: '100vh', float: 'left'}
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div style={style}>
        <GoogleMap google={window.google}>
          {this.renderMarkers()}
        </GoogleMap>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     filteredTrucks: state.trucks
//   };
// }

// export default connect(mapStateToProps)(TruckMap);