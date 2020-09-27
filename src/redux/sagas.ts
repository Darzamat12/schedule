import { put, call, takeEvery } from 'redux-saga/effects';
import {
  FETCHED_SCHEDULE_DATA,
  FETCHED_POST_DATA,
  FETCHED_EDIT_DATA,
  FETCHED_DELETE_DATA,
  FETCHED_EVENT_DATA,
} from './actionTypes';
import 'regenerator-runtime/runtime';
import {
  reqScheduleData,
  reqScheduleDataSuccess,
  reqScheduleDataError,
  reqPostEvent,
  reqPostEventSuccess,
  reqPostEventError,
  reqEditEvent,
  reqEditEventSuccess,
  reqEditEventError,
  reqDeleteEvent,
  reqDeleteEventSuccess,
  reqDeleteEventError,
  reqEventData,
  reqEventDataSuccess,
  reqEventDataError,
} from './actions';
import { eventsAPI } from '../api/eventsAPI';

export function* watchFetchScheduleData() {
  yield takeEvery(FETCHED_SCHEDULE_DATA, fetchScheduleDataAsync);
}

export function* watchPostEvent() {
  yield takeEvery(FETCHED_POST_DATA, fetchPostDataAcync);
}

export function* watchEditEvent() {
  yield takeEvery(FETCHED_EDIT_DATA, fetchEditDataAcync);
}

export function* watchDeleteEvent() {
  yield takeEvery(FETCHED_DELETE_DATA, fetchDeleteDataAcync);
}

export function* watchFetchEventData() {
  yield takeEvery(FETCHED_EVENT_DATA, fetchEventDataAsync);
}

function* fetchScheduleDataAsync() {
  try {
    yield put(reqScheduleData());
    const data = yield call(() => {
      return eventsAPI.getEvents().then((res) => res.data);
    });
    yield put(reqScheduleDataSuccess(data));
  } catch (error) {
    yield put(reqScheduleDataError());
  }
}

function* fetchPostDataAcync(action: any) {
  try {
    yield put(reqPostEvent());
    const data = yield call(() => {
      return eventsAPI.createEvent(action.payload).then((res) => res.data);
    });
    yield put(reqPostEventSuccess(data));
    yield fetchScheduleDataAsync();
  } catch (error) {
    yield put(reqPostEventError());
  }
}

function* fetchEditDataAcync(action: any) {
  try {
    yield put(reqEditEvent());
    const data = yield call(() => {
      return eventsAPI.updateEvent(action.id, action.obj).then((res) => res.data);
    });
    yield put(reqEditEventSuccess(data));
    yield fetchScheduleDataAsync();
  } catch (error) {
    yield put(reqEditEventError());
  }
}

function* fetchDeleteDataAcync(action: any) {
  try {
    yield put(reqDeleteEvent());
    const data = yield call(() => {
      return eventsAPI.deleteEvent(action.id).then((res) => res.data);
    });
    yield put(reqDeleteEventSuccess(data));
  } catch (error) {
    yield put(reqDeleteEventError());
  }
}

function* fetchEventDataAsync(action: any) {
  try {
    yield put(reqEventData());
    const data = yield call(() => {
      return eventsAPI.getEvent(action.id).then((res) => res.data);
    });
    yield put(reqEventDataSuccess(data));
  } catch (error) {
    yield put(reqEventDataError());
  }
}
