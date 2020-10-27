import { all, fork } from 'redux-saga/effects';
import popularTrackSaga from './popularTrackSaga';

export default function* rootSaga() {
  yield all([fork(popularTrackSaga)]);
}
