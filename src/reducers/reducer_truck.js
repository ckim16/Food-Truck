import { FETCH_TRUCKS, FILTER_TRUCKS, ON_HOVER_TRUCK } from '../actions/types';

export function trucks(state=null, action) {
  switch(action.type) {
    case FETCH_TRUCKS:
      return action.payload;
    case FILTER_TRUCKS:
      return action.payload;
  }
  return state;
}

export function hoverTruck(state=null, action) {
  switch(action.type) {
    case ON_HOVER_TRUCK:
      return action.payload;
  }
  return state;
}
