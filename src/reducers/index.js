import { combineReducers } from 'redux';
import { allTrucks, filteredTrucks } from './reducer_truck';

const rootReducer = combineReducers({
  allTrucks,
  filteredTrucks
});

export default rootReducer;
