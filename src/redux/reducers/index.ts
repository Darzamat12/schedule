import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import hideColumsReducer from './hideColumnReducer/hideColumnsReducer'
import preferencesReducer from "./preferences/preferences.reducer";
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';
import scheduleModeReducer from './scheduleModeReducer'
import userModeReducer from './userModeReducer';
import timeZoneReducer from './timeZoneReducer';
import weekPickerReducer from './weekPickerReducer';


export default combineReducers({
    scheduleData: scheduleDataReducer,
    scheduleModeData: scheduleModeReducer,
    userMode: userModeReducer,
    taskPageReducer1: TaskPageReducer,
    timeZoneData: timeZoneReducer,
    weekPickerData: weekPickerReducer,
    hideColumnData: hideColumsReducer,
  userPreferences: preferencesReducer,
});


