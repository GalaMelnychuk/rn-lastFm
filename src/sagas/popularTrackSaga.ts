import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_TRACKS, loadPopularTracksAction } from '../redux/actions/popularTracksActions';
import { requests } from '../services/requests';

function* popularTrackSagaWatcher(action: any) {
  try {
    const data = yield call(requests.getPopularTracks);
    yield put(loadPopularTracksAction(data.data.tracks.track));
  } catch (error) {
    console.log('error++', error);
    return;
  }
}

export default function* popularTrackSagaWorker() {
  yield takeEvery(GET_TRACKS, popularTrackSagaWatcher);
}
