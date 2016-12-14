import React, { Component } from 'react';
import TruckList from '../containers/truck_list';
import MapTruck from '../containers/map_truck';

export default class App extends Component {
  render() {
    return (
      <div>
        Where is my food truck?
        <TruckList />
        <MapTruck />
      </div>
    );
  }
};