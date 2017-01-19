import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import TruckList from './components/truck_list';
import TruckMap from './components/google_map';
import SearchBar from './components/search_bar';

const url = `https://data.sfgov.org/resource/6a9r-agq8.json`;
const truckArr = [];

class App extends Component {
  constructor(props) {
    super(props);
    const self = this;
    self.state = { truckArr: [], filterList: [] };

    axios.get(url)
    .then((truckList) => {
      _.forEach(truckList.data, (truck) => {
        truckArr.push(truck);
      });
      self.setState({ truckArr: truckArr });
    });
    this.foodSearch('hey');
    // put hey just so it doesn't filter at the beginning..
    this.foodSearch = this.foodSearch.bind(this);
  }

  foodSearch(food) {
    const filtered = [];
    if (food === '') {
      this.setState({filterList: []});
    } else {
      axios.get(url)
      .then(truckList => {
        _.forEach(truckList.data, (truck) => {
          if (truck.fooditems !== undefined) {
            const item = truck.fooditems.toLowerCase();
            if (item.includes(food) === true) {
              filtered.push(truck);
            }
          }
        });
        this.setState({filterList: filtered});
      }); 
    }
  }

  render() {
    const foodSearch = _.debounce((term) => { this.foodSearch(term) }, 800);
    return (
      <div className="app">
        <SearchBar onSearchTermChange={foodSearch} />
        <TruckMap list={this.state.truckArr} filteredList={this.state.filterList}/>
        <TruckList list={this.state.truckArr} filteredList={this.state.filterList} />
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.querySelector('.container'));