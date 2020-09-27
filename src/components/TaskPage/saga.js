import { takeEvery } from 'redux-saga/effects';
import { SHOW_ALERT } from './types';

function* watchAlert() {
  yield takeEvery(SHOW_ALERT, something);
}
