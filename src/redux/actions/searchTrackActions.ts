export const SEARCH_TRACKS = '@search/SEARCH_TRACKS';
export const LOAD_SEARCHING_TRACKS = '@search/LOAD_SEARCHING_TRACKS';
export const CLEAN_ARTIST_INFO = '@clean/CLEAN_ARTIST_INFO';

export const searchTracks = (text: string) => ({
  type: SEARCH_TRACKS,
  payload: text,
});

export const loadSearchingTracks = (tracks: []) => ({
  type: LOAD_SEARCHING_TRACKS,
  payload: tracks,
});

export const cleanSearchingTracks = () => ({
  type: CLEAN_ARTIST_INFO,
});
