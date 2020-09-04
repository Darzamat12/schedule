import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';

export default combineReducers({
    scheduleData: scheduleDataReducer,
});