import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCHED_SCHEDULE_DATA } from './actionTypes';
import 'regenerator-runtime/runtime';
import { reqScheduleData, reqScheduleDataSuccess, reqScheduleDataError } from './actions';
import pathScheduleData from '../data/scheduleData.json';

export function* watchFetchScheduleData() {
  yield takeEvery(FETCHED_SCHEDULE_DATA, fetchScheduleDataAsync);
}

function* fetchScheduleDataAsync() {
  try {
    yield put(reqScheduleData());
    const data = yield call(() => {
      return pathScheduleData;
      /*return fetch('url')
                .then(res => res.json())*/
    });
    yield put(reqScheduleDataSuccess(data));
  } catch (error) {
    yield put(reqScheduleDataError());
  }
}
