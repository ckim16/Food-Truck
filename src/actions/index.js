import axios from 'axios';

const url = `https://data.sfgov.org/resource/6a9r-agq8.json`;

export const FETCH_FOOD_TRUCK = 'FETCH_FOOD_TRUCK';

export function fetchFoodTruck() {
  const request = axios(url);
  console.log('request', request);
  return {
    type: FETCH_FOOD_TRUCK,
    payload: request
  };
}