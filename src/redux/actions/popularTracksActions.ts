export const GET_TRACKS = '@get/GET_TRACKS';
export const LOAD_TRACKS = '@get/LOAD_TRACKS';

export const getPopularTracksAction = () => ({
  type: GET_TRACKS,
});

export const loadPopularTracksAction = (tracks: []) => ({
  type: LOAD_TRACKS,
  payload: tracks,
});
