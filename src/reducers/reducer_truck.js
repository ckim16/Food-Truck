import { FETCH_TRUCKS, FILTER_TRUCKS } from '../actions/types';

export function allTrucks(state=[], action) {
  switch(action.type) {
    case FETCH_TRUCKS:
      return action.payload;
  }
  return state;
}

export function filteredTrucks(state=[], action) {
  switch(action.type) {
    case FILTER_TRUCKS:
      return action.payload;
  }
  return state;
}
