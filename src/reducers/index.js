import { combineReducers } from 'redux';
// import AllTrucks from './reducer_allTruck';
import TruckReducer from './reducer_truck';

const rootReducer = combineReducers({
  trucks: TruckReducer
});

export default rootReducer;