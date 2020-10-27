import { put, call, takeEvery, all, fork, select } from 'redux-saga/effects';
import { GET_TRACKS, loadPopularTracksAction } from '../redux/actions/popularTracksActions';
import { requests } from '../services/requests';

function* popularTrackSagaWatcher(action: any) {
  try {
    const data = yield call(requests.getPopularTracks);
    yield put(loadPopularTracksAction(data.data.tracks.track));
    console.log('data', data.data.tracks.track);
  } catch (error) {
    console.log('error++', error);
    return;
  }
}

export default function* setActiveAwardId() {
  yield takeEvery(GET_TRACKS, popularTrackSagaWatcher);
}
