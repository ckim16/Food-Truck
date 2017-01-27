import { combineReducers } from 'redux';
import TruckReducer from './reducer_truck';

const rootReducer = combineReducers({
  truck: TruckReducer
});

export default rootReducer;