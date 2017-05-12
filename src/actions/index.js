import axios from 'axios';
import { FETCH_TRUCKS, FILTER_TRUCKS } from './types';
import _ from 'lodash';

const url = `https://data.sfgov.org/resource/6a9r-agq8.json`;

export function fetchTrucks() {
  return function(dispatch) {
    axios.get(url)
    .then(function(trucks) {
      dispatch({
        type: FETCH_TRUCKS,
        payload: trucks
      });
    }).catch(function(err) { console.log('fetch trucks error', err); });
  }
}

export function filterTrucks(food) {
  const filteredTrucks = [];
  return function(dispatch) {
    axios.get(url)
    .then(function(trucks) {
      _.forEach(trucks.data, function(truck) {
        if (truck.fooditems !== undefined) {
            const item = truck.fooditems.toLowerCase();
            if (item.includes(food) === true) {
              filteredTrucks.push(truck);
            }
          }
      });
      dispatch({
        type: FILTER_TRUCKS,
        payload: filteredTrucks
      });
    });
  }
}
