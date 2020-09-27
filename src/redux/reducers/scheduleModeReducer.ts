import { SCHEDULE_MODE } from '../actionTypes';

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
  navigator.userAgent,
);

const initialState = {
  scheduleMode: isMobileDevice ? 1 : 0,
};

const scheduleModeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SCHEDULE_MODE: {
      return { ...state, scheduleMode: action.payload };
    }
    default:
      return state;
  }
};

export default scheduleModeReducer;
