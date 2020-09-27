import { REQ_POST_EVENT, REQ_POST_EVENT_SUCCEEDED, REQ_POST_EVENT_FAILED } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false,
  success: false,
};

const postEventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQ_POST_EVENT: {
      return { ...initialState, loading: true };
    }
    case REQ_POST_EVENT_SUCCEEDED: {
      return { ...initialState, data: action.payload, success: true };
    }
    case REQ_POST_EVENT_FAILED: {
      return { ...initialState, error: true };
    }
    default:
      return state;
  }
};

export default postEventReducer;
