import { combineReducers } from 'redux';
import TruckReducer from './reducer_truck';

const rootReducer = combineReducers({
  trucks: TruckReducer
});

export default rootReducer;