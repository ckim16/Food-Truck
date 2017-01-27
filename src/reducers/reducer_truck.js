import { FETCH_TRUCKS, FILTER_TRUCKS } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_TRUCKS:
      return [action.payload.data, ...state];
    case FILTER_TRUCKS:
      return [action.payload, ...state];
  }
  return state;
}
