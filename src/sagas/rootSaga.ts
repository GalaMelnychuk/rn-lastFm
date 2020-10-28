import { all, fork } from 'redux-saga/effects';
import artistSagaWorker from './artistSaga';
import popularTrackSaga from './popularTrackSaga';

export default function* rootSaga() {
  yield all([fork(popularTrackSaga), fork(artistSagaWorker)]);
}
