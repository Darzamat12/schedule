import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import { hideColumsReducer, initColumnsReducer} from './hideColumnReducer/hideColumnsReducer'
import preferencesReducer from "./preferences/preferences.reducer";
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';
import { CalendarPageReducer } from '../../components/Calendar/CalendarReducer';
import scheduleModeReducer from './scheduleModeReducer';
import userModeReducer from './userModeReducer';
import timeZoneReducer from './timeZoneReducer';
import weekPickerReducer from './weekPickerReducer';
import postEventReducer from './postEventReducer';
import editEventReducer from './editEventReducer';
import deleteEventReducer from './deleteEventReducer';
import eventDataReducer from './eventDataReducer';


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
    initColumnsData: initColumnsReducer,
    postEvent: postEventReducer,
    editEvent: editEventReducer,
    deleteEvent: deleteEventReducer,
    eventData: eventDataReducer
});


