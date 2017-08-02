import { combineReducers } from 'redux';
import { trucks, hoverTruck, centerChange } from './reducer_truck';

const rootReducer = combineReducers({
  trucks,
  hoverTruck,
  center: centerChange
});

export default rootReducer;
