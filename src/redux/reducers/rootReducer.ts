import { combineReducers } from 'redux';
import { tracks } from './tracksReducer';
import { artist } from './artistReducer';

export const rootReducer = combineReducers({
  tracks,
  artist,
});
