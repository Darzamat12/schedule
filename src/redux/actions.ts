import {
  REQ_SCHEDULE_DATA,
  REQ_SCHEDULE_DATA_FAILED,
  REQ_SCHEDULE_DATA_SUCCEEDED,
  FETCHED_SCHEDULE_DATA,
} from './actionTypes';

export const reqScheduleData = () => {
  return { type: REQ_SCHEDULE_DATA };
};

export const reqScheduleDataSuccess = (obj: any) => {
  return { type: REQ_SCHEDULE_DATA_SUCCEEDED, payload: obj };
};

export const reqScheduleDataError = () => {
  return { type: REQ_SCHEDULE_DATA_FAILED };
};

export const fetchScheduleData = () => {
  return { type: FETCHED_SCHEDULE_DATA };
};
