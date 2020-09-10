import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import dropDownsReducer from './dropDownsReducer';
import userModeReducer from './userModeReducer';

export default combineReducers({
    scheduleData: scheduleDataReducer,
    dropDownsData: dropDownsReducer,
    userMode: userModeReducer,
});
