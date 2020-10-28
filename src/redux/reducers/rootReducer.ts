import { combineReducers } from 'redux';
import { tracks } from './tracksReducer';
import { artist } from './artistReducer';
import { trackInfo } from './trackInfoReducer';

export const rootReducer = combineReducers({
  tracks,
  artist,
  trackInfo,
});
