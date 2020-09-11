import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';
import dropDownsReducer from './dropDownsReducer';
import userModeReducer from './userModeReducer';

export default combineReducers({
    scheduleData: scheduleDataReducer,
    dropDownsData: dropDownsReducer,
    userMode: userModeReducer,
    taskPageReducer1: TaskPageReducer,
});
