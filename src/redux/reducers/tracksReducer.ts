import { LOAD_TRACKS } from '../actions/popularTracksActions';

const initialState = [{ trackName: '', artist: '', img: '', url: '' }];

interface IAction {
  type: string;
  payload: [];
}

export const tracks = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOAD_TRACKS:
      return action.payload;
    default:
      return state;
  }
};
