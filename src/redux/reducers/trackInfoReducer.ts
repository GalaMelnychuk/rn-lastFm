import { LOAD_SEARCHING_TRACKS } from '../actions/searchTrackActions';

export const trackInfo = (state = [], action: IAction) => {
  switch (action.type) {
    case LOAD_SEARCHING_TRACKS:
      return action.payload.map((elem) => ({
        trackName: elem.name,
        author: elem.artist,
        id: Date.now().toString(),
      }));
    default:
      return state;
  }
};
