import { REQ_EVENT_DATA, REQ_EVENT_DATA_FAILED, REQ_EVENT_DATA_SUCCEEDED } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const eventDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQ_EVENT_DATA: {
      return { ...initialState, loading: true };
    }
    case REQ_EVENT_DATA_SUCCEEDED: {
      return { ...initialState, data: action.payload };
    }
    case REQ_EVENT_DATA_FAILED: {
      return { ...initialState, error: true };
    }
    default:
      return state;
  }
};

export default eventDataReducer;
