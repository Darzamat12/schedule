import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import hideColumsReducer from './hideColumnReducer/hideColumnsReducer'
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';
import { CalendarPageReducer } from '../../components/Calendar/CalendarReducer';
import scheduleModeReducer from './scheduleModeReducer';
import userModeReducer from './userModeReducer';
import timeZoneReducer from './timeZoneReducer';
import weekPickerReducer from './weekPickerReducer';
import {importantReducer} from "./ImportantReducer/importantReducer";


export default combineReducers({
    CalendarPageReducer: CalendarPageReducer,
    userPreferences: preferencesReducer,
    scheduleData: scheduleDataReducer,
    scheduleModeData: scheduleModeReducer,
    userMode: userModeReducer,
    taskPageReducer1: TaskPageReducer,
    timeZoneData: timeZoneReducer,
    weekPickerData: weekPickerReducer,
    hideColumnData: hideColumsReducer,
    importantColData: importantReducer
});


