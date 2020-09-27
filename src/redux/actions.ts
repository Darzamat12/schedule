import {
  REQ_SCHEDULE_DATA,
  REQ_SCHEDULE_DATA_FAILED,
  REQ_SCHEDULE_DATA_SUCCEEDED,
  FETCHED_SCHEDULE_DATA,
  TIME_ZONE,
  SCHEDULE_MODE,
  WEEK,
  USER_MODE,
  REQ_POST_EVENT,
  REQ_POST_EVENT_SUCCEEDED,
  REQ_POST_EVENT_FAILED,
  FETCHED_POST_DATA,
  REQ_EDIT_EVENT,
  REQ_EDIT_EVENT_SUCCEEDED,
  REQ_EDIT_EVENT_FAILED,
  FETCHED_EDIT_DATA,
  REQ_DELETE_EVENT,
  REQ_DELETE_EVENT_SUCCEEDED,
  REQ_DELETE_EVENT_FAILED,
  FETCHED_DELETE_DATA,
  REQ_EVENT_DATA,
  REQ_EVENT_DATA_FAILED,
  REQ_EVENT_DATA_SUCCEEDED,
  FETCHED_EVENT_DATA,
  VIEW_SCHEDULE_DATA,
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

export const changeTimeZone = (timeOffset: number) => {
  return { type: TIME_ZONE, payload: timeOffset };
};

export const changeScheduleMode = (scheduleMode: 0 | 1 | 2) => {
  return { type: SCHEDULE_MODE, payload: scheduleMode };
};

export const changeWeek = (week: 0 | 1 | 2 | 3) => {
  return { type: WEEK, payload: week };
};

export const changeUserMode = (isAdmin: boolean) => {
  return { type: USER_MODE, payload: isAdmin };
};

export const reqPostEvent = () => {
  return { type: REQ_POST_EVENT };
};

export const reqPostEventSuccess = (obj: any) => {
  return { type: REQ_POST_EVENT_SUCCEEDED, payload: obj };
};

export const reqPostEventError = () => {
  return { type: REQ_POST_EVENT_FAILED };
};

export const fetchPostData = (obj: any) => {
  return { type: FETCHED_POST_DATA, payload: obj };
};

export const reqEditEvent = () => {
  return { type: REQ_EDIT_EVENT };
};

export const reqEditEventSuccess = (obj: any) => {
  return { type: REQ_EDIT_EVENT_SUCCEEDED, payload: obj };
};

export const reqEditEventError = () => {
  return { type: REQ_EDIT_EVENT_FAILED };
};

export const fetchEditData = (id: string, obj: any) => {
  return { type: FETCHED_EDIT_DATA, id: id, obj: obj };
};

export const reqDeleteEvent = () => {
  return { type: REQ_DELETE_EVENT };
};

export const reqDeleteEventSuccess = (obj: any) => {
  return { type: REQ_DELETE_EVENT_SUCCEEDED, payload: obj };
};

export const reqDeleteEventError = () => {
  return { type: REQ_DELETE_EVENT_FAILED };
};

export const fetchDeleteData = (id: string) => {
  return { type: FETCHED_DELETE_DATA, id: id };
};

export const reqEventData = () => {
  return { type: REQ_EVENT_DATA };
};

export const reqEventDataSuccess = (obj: any) => {
  return { type: REQ_EVENT_DATA_SUCCEEDED, payload: obj };
};

export const reqEventDataError = () => {
  return { type: REQ_EVENT_DATA_FAILED };
};

export const fetchEventData = (id: string) => {
  return { type: FETCHED_EVENT_DATA, id: id };
};

export const setViewData = (EventsArray: any) => {
  return { type: VIEW_SCHEDULE_DATA, payload: EventsArray };
};
