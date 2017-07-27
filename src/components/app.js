import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
// import TruckMap from '../containers/truck_map';
import TruckList from '../containers/truck_list';
import NewTruckMap from '../containers/new_truck_map';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <NewTruckMap />
        <TruckList />
      </div>
    );
  }
};
