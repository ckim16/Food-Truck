import { FETCH_FOOD_TRUCK } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_FOOD_TRUCK:
      return [action.payload.data, ...state];
  }
  console.log('action', action);
  return state;
}