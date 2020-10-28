export const GET_ARTIST = '@artist/GET_ARTIST';
export const LOAD_ARTIST_INFO = '@artist/LOAD_ARTIST_INFO';

export const getArtistInfo = (artistName: string, goToArtistScreen: () => void) => ({
  type: GET_ARTIST,
  payload: { artistName, goToArtistScreen },
});

export const loadArtist = (artistDetails: {}) => ({
  type: LOAD_ARTIST_INFO,
  payload: artistDetails,
});
