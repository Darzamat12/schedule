import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';
import { CalendarPageReducer } from '../../components/Calendar/CalendarReducer';
export default combineReducers({
  scheduleData: scheduleDataReducer,
  taskPageReducer1: TaskPageReducer,
  CalendarPageReducer: CalendarPageReducer,
});
