import { REQ_SCHEDULE_DATA, REQ_SCHEDULE_DATA_FAILED, REQ_SCHEDULE_DATA_SUCCEEDED } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const scheduleDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQ_SCHEDULE_DATA: {
      return { ...initialState, loading: true };
    }
    case REQ_SCHEDULE_DATA_SUCCEEDED: {
      return { ...initialState, data: action.payload };
    }
    case REQ_SCHEDULE_DATA_FAILED: {
      return { ...initialState, error: true };
    }
    default:
      return state;
  }
};

export default scheduleDataReducer;
