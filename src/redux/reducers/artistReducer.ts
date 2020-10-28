import { LOAD_ARTIST_INFO } from '../actions/artistInfoActions';

interface IAction {
  type: string;
  payload: any;
}

export const artist = (state = {}, action: IAction) => {
  switch (action.type) {
    case LOAD_ARTIST_INFO:
      return {
        name: action.payload.name,
        artistImg: Object.values(action.payload.image[0])[0],
        tags: action.payload.tags.tag,
        summary: action.payload.bio.summary,
      };
    default:
      return state;
  }
};
