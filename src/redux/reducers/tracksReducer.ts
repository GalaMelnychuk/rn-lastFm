import { LOAD_TRACKS } from '../actions/popularTracksActions';

interface IAction {
  type: string;
  payload: [];
}

export const tracks = (state = [], action: IAction) => {
  switch (action.type) {
    case LOAD_TRACKS:
      return action.payload.map((elem) => ({
        trackName: elem.name,
        artist: elem.artist.name,
        img: Object.values(elem.image[0])[0],
        url: elem.url,
      }));
    default:
      return state;
  }
};
