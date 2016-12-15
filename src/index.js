import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import TruckList from './components/truck_list';

const url = `https://data.sfgov.org/resource/6a9r-agq8.json`;
const truckArr = [];

class App extends Component {
  constructor(props) {
    super(props);
    const self = this;
    self.state = { truckArr: [] };

    axios.get(url)
    .then((truckList) => {
      console.log(truckList);
      _.forEach(truckList.data, (truck) => {
        truckArr.push(truck);
      });
      console.log('truckArr', truckArr);
      self.setState({ truckArr });
    });
  }

  render() {
    return (
      <div className="app">
        <TruckList list={this.state.truckArr}/>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.querySelector('.container'));