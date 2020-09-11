import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA } from './types';
import { putData } from './actions';
import sheduleData from '../../data/scheduleData.json';

function fetchData() {
  console.log('запрос!');

  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);
  //yield put(putData(data)) ассинхронный запрос
  yield put(putData(sheduleData));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData);
}
