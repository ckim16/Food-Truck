import { FETCH_TRUCKS, FILTER_TRUCKS } from '../actions/types';

export default function(state=[], action) {
  console.log('action', action);
  console.log('state', state);
  switch(action.type) {
    case FETCH_TRUCKS:
      return action.payload.data;
    case FILTER_TRUCKS:
      return action.payload;
  }
  return state;
}
