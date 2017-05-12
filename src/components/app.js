import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../containers/search_bar';
import TruckMap from '../containers/truck_map';
import TruckList from '../containers/truck_list';

const url = `https://data.sfgov.org/resource/6a9r-agq8.json`;

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { trucks: [] };
  //   this.allTrucks = [];
  //   axios.get(url)
  //   .then((truckLists) => {
  //     truckLists.data.map((truck) => {
  //       this.allTrucks.push(truck);
  //     });
  //     this.setState({ trucks: this.allTrucks });
  //   });
  // }

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
