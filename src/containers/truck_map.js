import React, { Component } from 'react';
import GoogleMap from '../components/google_map';

export default class TruckMap extends Component {
  render() {
    const style = {width: '60vw', height: '100vh', float: 'left'}
    return (
      <div style={style}>
        <GoogleMap google={window.google}/>
      </div>
    );
  }
}