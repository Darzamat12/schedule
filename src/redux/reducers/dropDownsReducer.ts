import { TIME_ZONE,
  SCHEDULE_MODE,
  WEEK,
} from "../actionTypes";


const initialState = {
  timeZone: new Date().getTimezoneOffset() / 60 * -1,
  scheduleMode: 0,
  week: 1,
}

const dropDownsReducer = (state = initialState, action: any) => {
  switch (action.type) {
      case TIME_ZONE:
          { return { ...state, timeZone: action.payload}; }
      case SCHEDULE_MODE:
          {return { ...state, scheduleMode: action.payload}; }
      case WEEK:
          {return { ...state, week: action.payload}; }
      default:
          return state;
  }
};



export default dropDownsReducer;
