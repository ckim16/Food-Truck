import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../containers/search_bar';
import TruckMap from '../containers/truck_map';
import TruckList from '../containers/truck_list';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <TruckMap />
        <TruckList />
      </div>
    );
  }
};
