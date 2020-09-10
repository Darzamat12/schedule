import { REQ_SCHEDULE_DATA,
  REQ_SCHEDULE_DATA_FAILED,
  REQ_SCHEDULE_DATA_SUCCEEDED,
  FETCHED_SCHEDULE_DATA,
  TIME_ZONE, SCHEDULE_MODE, WEEK,
  USER_MODE,
} from './actionTypes';


export const reqScheduleData = () => {
  return { type: REQ_SCHEDULE_DATA }
};

export const reqScheduleDataSuccess = (obj: any) => {
  return { type: REQ_SCHEDULE_DATA_SUCCEEDED, payload: obj }
};

export const reqScheduleDataError = () => {
  return { type: REQ_SCHEDULE_DATA_FAILED }
};

export const fetchScheduleData = () => {
  return { type: FETCHED_SCHEDULE_DATA }
};

export const changeTimeZone = (timeZone: number) => {
  return { type: TIME_ZONE, payload: timeZone}
}

export const changeScheduleMode = (scheduleMode : 0|1|2) => {
  return { type: SCHEDULE_MODE, payload: scheduleMode }
}

export const changeWeek = (week: 0|1|2|3) => {
  return { type: WEEK, payload: week }
}

export const changeUserMode = (isAdmin: boolean) => {
  return { type: USER_MODE, payload: isAdmin}
}
