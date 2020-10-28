import { LOAD_SEARCHING_TRACKS } from '../actions/searchTrackActions';
import { CLEAN_ARTIST_INFO } from '../actions/searchTrackActions';

interface IAction {
  type: string;
  payload: any;
}

export const trackInfo = (state = [], action: IAction) => {
  switch (action.type) {
    case LOAD_SEARCHING_TRACKS:
      return action.payload.map((elem: any) => ({ name: elem.name, artist: elem.artist }));
    case CLEAN_ARTIST_INFO:
      return [];
    default:
      return state;
  }
};
