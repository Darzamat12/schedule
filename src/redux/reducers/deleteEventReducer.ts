import { REQ_DELETE_EVENT, REQ_DELETE_EVENT_SUCCEEDED, REQ_DELETE_EVENT_FAILED } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const deleteEventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQ_DELETE_EVENT: {
      return { ...initialState, loading: true };
    }
    case REQ_DELETE_EVENT_SUCCEEDED: {
      return { ...initialState, data: action.payload };
    }
    case REQ_DELETE_EVENT_FAILED: {
      return { ...initialState, error: true };
    }
    default:
      return state;
  }
};

export default deleteEventReducer;
