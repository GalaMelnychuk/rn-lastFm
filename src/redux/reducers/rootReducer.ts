import { combineReducers } from 'redux';
import { tracks } from './tracksReducer';
import { artist } from './artistReducer';
import { trackInfo } from './trackInfoReducer';
import { ITracks, IArtist, ITrackInfo } from '../../types/reducersInterfaces';

export const rootReducer = combineReducers({
  tracks,
  artist,
  trackInfo,
});

export interface RootState {
  tracks: Array<ITracks | undefined> | [];
  artist: IArtist | undefined;
  trackInfo: Array<ITrackInfo> | [];
}
