import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import preferencesReducer from "./preferences/preferences.reducer";
import hideColumsReducer from './hideColumnReducer/hideColumnsReducer'
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';
import scheduleModeReducer from './scheduleModeReducer'
import userModeReducer from './userModeReducer';
import timeZoneReducer from './timeZoneReducer';
import weekPickerReducer from './weekPickerReducer';


export default combineReducers({
    userPreferences: preferencesReducer,
    scheduleData: scheduleDataReducer,
    scheduleModeData: scheduleModeReducer,
    userMode: userModeReducer,
    taskPageReducer1: TaskPageReducer,
    timeZoneData: timeZoneReducer,
    weekPickerData: weekPickerReducer,
    hideColumnData: hideColumsReducer,
});


