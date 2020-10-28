export const GET_TRACKS = '@tracks/GET_TRACKS';
export const LOAD_TRACKS = '@tracks/LOAD_TRACKS';

export const getPopularTracksAction = () => ({
  type: GET_TRACKS,
});

export const loadPopularTracksAction = (tracks: []) => ({
  type: LOAD_TRACKS,
  payload: tracks,
});
