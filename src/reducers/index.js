import { combineReducers } from 'redux';
import { trucks, hoverTruck } from './reducer_truck';

const rootReducer = combineReducers({
  trucks,
  hoverTruck
});

export default rootReducer;
