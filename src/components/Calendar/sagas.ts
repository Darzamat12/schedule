import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA } from './types';
import { putData } from './actions';
import sheduleData from '../../data/scheduleData.json';


export function* watchFetchCalendarData() {
  yield takeEvery(LOAD_DATA, FetchCalendarDataAsync);
}

function fetchData() {
  console.log('запрос!');

  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
}

function* FetchCalendarDataAsync() {
  const data = yield call(fetchData);
  //yield put(putData(data)) 
  yield put(putData(sheduleData));
}


