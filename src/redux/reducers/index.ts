import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import hideColumsReducer from './hideColumnReducer/hideColumnsReducer'
import { TaskPageReducer } from '../../components/TaskPage/TaskPageReducer';

export default combineReducers({
  scheduleData: scheduleDataReducer,
  taskPageReducer1: TaskPageReducer,
  hideColumnData: hideColumsReducer,
});
