import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../components/google_map';

export default class TruckMap extends Component {
  render() {
    return (
      <GoogleMap />
    );
  }
}