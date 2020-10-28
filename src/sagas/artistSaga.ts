import { put, call, takeEvery } from 'redux-saga/effects';
import { requests } from '../services/requests';
import { GET_ARTIST, loadArtist } from '../redux/actions/artistInfoActions';

function* artistSagaWatcher(action: any) {
  const { artistName, goToArtistScreen } = action.payload;
  try {
    const dataArtist = yield call(requests.getArtistInfo, artistName);
    yield put(loadArtist(dataArtist.data.artist));
    goToArtistScreen();
  } catch (error) {
    console.log('error++', error);
    return;
  }
}

export default function* artistSagaWorker() {
  yield takeEvery(GET_ARTIST, artistSagaWatcher);
}
