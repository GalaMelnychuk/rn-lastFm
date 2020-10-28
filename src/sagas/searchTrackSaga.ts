import { put, call, takeEvery } from 'redux-saga/effects';
import { requests } from '../services/requests';
import { SEARCH_TRACKS, loadSearchingTracks } from '../redux/actions/searchTrackActions';

function* searchTrackSagaWatcher(action: any) {
  const trackTittle = action.payload;
  try {
    const data = yield call(requests.trackSearch, trackTittle);
    console.log('data', data);
    yield put(loadSearchingTracks(data.data.results.trackmatches.track));
  } catch (error) {
    console.log('error++', error);
    return;
  }
}

export default function* searchTrackSagaWorker() {
  yield takeEvery(SEARCH_TRACKS, searchTrackSagaWatcher);
}
