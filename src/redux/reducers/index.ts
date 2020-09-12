import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import preferencesReducer from "./preferences/preferences.reducer";
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';


export default combineReducers({
  scheduleData: scheduleDataReducer,
  taskPageReducer1: TaskPageReducer,
  userPreferences: preferencesReducer,
});


