import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import hideColumsReducer from './hideColumnsReducer';

const rootReducer = combineReducers({
    scheduleData: scheduleDataReducer,
    hideColumnData: hideColumsReducer,
});

export default rootReducer;
